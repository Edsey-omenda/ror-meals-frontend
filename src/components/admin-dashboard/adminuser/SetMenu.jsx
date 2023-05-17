import React, { useEffect, useState } from "react";
import { useGetAllMenu_itemsQuery } from "../../homeuser/ProductsApi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./addItem.css";

export default function SetMenu() {
  const [menu_items, setMenuItems] = useState([]);
  const [image_url, setImage_url] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { data, error, isLoading } = useGetAllMenu_itemsQuery();

  const [Items, setItems] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
    on_menu: "",
    category_id: 1,
    user_type: 1,
  });


  function handleDelete(deleteItem) {
    setItems(Items.filter((Item) => Item.id !== deleteItem.id));
  }

  function handleClickDelete(e) {
    let id = e.target.id;
    fetch(`https://ror-meals.onrender.com/menu_items/${id}`, {
      method: "DELETE",
    });
    // .then((r) => r.json())
    // .then((deleteItem) => handleDelete(deleteItem));
    console.log("Item Sucessfully Deleted");
    handleDelete(Items);
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = menu_items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setMenuItems(updatedItems);
  }

  function handleSetMenu(item) {
    let id = item.target.id;
    fetch(`https://ror-meals.onrender.com/menu_items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        on_menu: !item.on_menu,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem));
    console.log("mr");
  }
 
  return (
    <div>
      <center>
        <div>
          <div
            className="products"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              height: "500px",
            }}
          >
            {data &&
              data?.map((menu_item) => (
                <div
                  key={menu_item.id}
                  className="product"
                  style={{
                    marginTop: "50px",
                    height: "650px",
                    width: "20%",
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
                    border: "0.1px solid #875d2c",
                    boxShadow: "0px 5px 5px 0px",
                    marginTop: "50px",
                  }}
                >
                  <h3
                    style={{
                      color: "#002524",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {menu_item.name}
                  </h3>
                  <img
                    src={menu_item.image_url}
                    alt={menu_item.name}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <div className="details">
                    <p
                      className="ellipsis"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "22px",
                        textAlign: "center",
                        marginTop: "20px",
                        marginBottom: "5px",
                        height: "130px",
                      }}
                    >
                      {menu_item.description}
                    </p>
                  </div>
                  <div>
                    <br />
                    <span
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "20px",
                        textAlign: "center",
                        height: "50px",
                      }}
                    >
                      Ksh. {menu_item.price} /-
                    </span>
                  </div>

                  <div
                    style={{
                      display: "block",
                    }}
                  >
                    <button
                      id={menu_item.id}
                      onClick={handleSetMenu}
                      style={{
                        backgroundColor: "#002524",
                        width: "120px",
                        height: "45px",
                        paddingTop: "10px",
                        paddingBottom: "15px",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderBottomLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        textAlign: "center",
                        marginRight: "20px",
                      }}
                    >
                      {menu_item.on_menu == true ? "onmenu" : "setmenu"}
                    </button>
                    <br />
                    <button
                      id={menu_item.id}
                      onClick={handleClickDelete}
                      style={{
                        backgroundColor: "#875d2c",
                        color: "#fff",
                        width: "120px",
                        height: "45px",
                        paddingTop: "10px",
                        paddingBottom: "15px",
                        fontSize: "15px",
                        fontWeight: "600",
                        borderBottomLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        textAlign: "center",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
      </center>
    </div>
  );
}
