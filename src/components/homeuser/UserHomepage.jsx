import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Carr from './Carousel';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./CartSlice";
import { useGetAllMenu_itemsQuery } from "./ProductsApi";
import SetMenu from "../admin-dashboard/adminuser/SetMenu";
import './user.css'


export default function UserHomepage({order}) {

  const { items: menu_items, status } = useSelector(
    (state) => state.menu_items
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const { data, error, isLoading } = useGetAllMenu_itemsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (menu_item) => {
    dispatch(addToCart(menu_item));
    navigate("/cart");
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  

  const foodcard = (
    <div>
      <div className="products" style={{display:"flex", flexWrap:"wrap", gap:"50px"}}>
        {data &&
          data?.map((menu_item) => (
            <div key={menu_item.id} className="product" style={{marginTop:"50px", height:"600px", width:"20%", backgroundImage: 'url(https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)', border:"0.1px solid #875d2c", boxShadow:"0px 5px 5px 0px", marginTop: "50px"}}>
              <h3 style={{color:"#002524", fontWeight:"600", textAlign:"center"}}>{menu_item.name}</h3>
              <img src={menu_item.image_url} alt={menu_item.name} style={{width:"100%", height:"250px",}} />
              <div className="details" style={{color:"black", fontWeight:"600", fontSize:"25px", textAlign:"center"}}>
                <span>{menu_item.description}
                <br />
                <br />
                ${menu_item.price}</span>
              </div>
              <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                <button style={{backgroundColor: "#002524", width:"150px", height:"60px", paddingTop: "15px", paddingBottom: "15px" , fontSize:"18px", fontWeight: "600", borderBottomLeftRadius: "15px", borderTopRightRadius: "15px", textAlign: "center"}} onClick={() => handleAddToCart(menu_item)}>
                  Book Meal
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <main>
        <div className="wrapper">
          <div className="container" style={{}}>
            <Carr />
          </div>
              {/* <div className="special">TODAY’S SPECIAL MEALS</div>
              <div className="main-dish">Other Main Dishes</div> */}
        </div>

          <div className="search" >
            <div className="searchInputs" >
              <div className="d-flex" >
                <input
                  type="search"
                  placeholder="Search for food"
                  className="searchInput"
                  aria-label="Search"
                  value={wordEntered}
                  onChange={handleFilter}
                />
                
              </div>
            </div>
          </div>
        <div className="card-food">
          <div className="home-container">
            <h2 className="menutoday" style={{fontWeight:"600", fontSize:"40px", width:"100%", marginTop:"150px"}}><br/><br/>Menu of the Day</h2>
            {status === "success" && filteredData.length === 0 ? (
              <>{foodcard}</>

              
            ) : status === "success" && filteredData.length !== 0 ? (
              <div className="searchProducts">
                {filteredData.map((product, key) => {
                  return (
                    <div className="products">
                      <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image_url} alt={product.name} />
                        <div className="details">
                          <span>{product.description}</span>
                          <span className="price">${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>
                          Book Meal
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : status === "pending" ? (
              <p>Loading...</p>
            ) : (
              <p>Unexpected error occured...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
