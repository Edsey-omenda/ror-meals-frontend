import React from 'react';
import { useState } from "react";
import axios from "axios";
// import Nav from '../admin-dashboard/Nav';
import '../admin-dashboard/adminuser/addItem.css'; 
import { useNavigate} from "react-router-dom";

function AddItem() {
  const navigate = useNavigate();
  const [Items, setItems] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
    on_menu: "",
    category_id: 1,
    is_admin: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://ror-meals.onrender.com/menu_items", {
      name: Items.name,
      price: Items.price,
      description: Items.description,
      image_url: Items.image_url,
      on_menu: Items.on_menu,
      category_id: Items.category_id,
      is_admin: Items.is_admin,
    });
    navigate("/admin");
    
  }
  
  function handleChange(e) {
    setItems({ ...Items, [e.target.name]: e.target.value });
  }


  return (
    <div className="add-menu-item">
      {/* <div><Nav /></div> */}
        <div>
          <h2 className="menutoday" style={{marginTop:"-100px", fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Add to Menu</h2>
          <form className="add-item-form" id="addItem" onSubmit={handleSubmit}>
            <br />
            <label htmlFor="name"><span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43;  Name :</span></label>
            <input
              placeholder="Enter Meal Name"
              type="text"
              name="name"
              value={Items.name}
              onChange={handleChange}
              />
            <br />
            <label htmlFor="price">
              {""}
              <span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43;  Price :</span></label>
            <input
              placeholder="Enter the Meal's Price"
              type="text"
              name="price"
              value={Items.price}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="description">
            <span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43;  Meal Description :</span></label>
            <input
              placeholder="Enter the Meal's Description"
              type="text"
              name="description"
              value={Items.description}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="image"><span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43;  Image URL :</span></label>
            <input
              placeholder="Enter the Meal's Image Link"
              type="text"
              name="image_url"
              id="image"
              value={Items.image_url}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="onmenu"><span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43; Is Item on Today's Menu ? </span></label>
            <input
              placeholder="Is Item on Today's Menu?"
              type="text"
              name="on-menu"
              // input="true"
              defaultValue={Items.on_menu}
              onChange={handleChange}
            />
            
            <br />
            <label htmlFor="category"><span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43;  Menu Category :</span></label>
            <input
              placeholder="enter the category_id"
              type="text"
              name="category_id"
              value={Items.category_id}
              onChange={handleChange}
              />
            <br />
            <label htmlFor="usertype"><span style={{fontFamily:"Simonetta", fontSize:"18px", fontWeight:"900", color:"whitesmoke"}}>&#43;  Is Admin :</span></label>
            <input
              placeholder="enter the user_type"
              type="text"
              name="user_type"
              value={Items.is_admin}
              onChange={handleChange}
            />
          <button className='add-button'>Add to Menu</button>
          
        </form>
      </div>
    </div>
  );
}

export default AddItem;