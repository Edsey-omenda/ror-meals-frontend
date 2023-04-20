import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav";
import "./addItem.css";

export default function EditForm() {
  const [menu_item, setMenuItem] = useState({});
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    let url = `https://ror-meals.onrender.com/menu_items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenuItem(data));
  }, []);

  function addItem(newItem) {
    setMenuItem([...menu_item, newItem]);
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = menu_item.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setMenuItem(updatedItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://ror-meals.onrender.com/menu_items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: menu_item.name,
        image_url: menu_item.image_url,
        price: menu_item.price,
        description: menu_item.description,
        on_menu: !menu_item.on_menu,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem));
    navigate("/admin");
    // refreshPage()
  }

  const handleChange = (e) => {
    setMenuItem({ ...menu_item, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-page">
      <div>
        <Nav />
      </div>
      <div>
        <h2
          className="menutoday"
          style={{
            position: "relative",
            marginTop: "-100px",
            fontWeight: "600",
            fontSize: "40px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <br />
          <br />
          Edit Menu Item
        </h2>
        <form onSubmit={handleSubmit} className="editform">
          <label htmlFor="title">
            <strong style={{ color: "white" }}>Update Meal Name :</strong>
          </label>
          <br />
          <input
            type="text"
            value={menu_item.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="image_url">
            <strong style={{ color: "white" }}>Edit Image URL :</strong>
          </label>
          <textarea
            type="text"
            rows="4"
            columns="100"
            value={menu_item.image_url}
            name="image_url"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="price">
            <strong style={{ color: "white" }}>Edit Price :</strong>
          </label>
          <input
            type="text"
            value={menu_item.price}
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
          <label htmlFor="body">
            <strong style={{ color: "white" }}>Edit Description :</strong>
          </label>
          <textarea
            type="text"
            rows="4"
            columns="100"
            value={menu_item.description}
            name="description"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="menu" />
          <br />
          <input
            type="text"
            defaultValue={menu_item.on_menu}
            name="menu"
            placeholder="set menu"
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="edit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}