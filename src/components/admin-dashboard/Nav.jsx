import React from 'react'
import "../main-dashboard/navigation.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import tastytreats from '../../assets/titty.gif';
import { FaHome } from "react-icons/fa";


function Nav() {

    const navigate=useNavigate()

    function handleLogoutClick() {
      fetch("https://ror-meals.onrender.com/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          // setUser(null)
          navigate("/login")
        }
      });
    }

  return (
    <div className="navbar">
        <div className = "navbar-item-left">
            <ul className="nav-menu">
                <li className="nav-menu-item" >
                <img src={tastytreats} alt="ramen" className="logo" style={{position:"absolute", top:"50px", left:"25px", height:"180px", width:"200px", objectFit:"contain"}}/>
                </li>
            </ul>
        </div>
        <div className = "navbar-item-right">
            <ul className="nav-menu">
            <li className="nav-menu-item" >
                <Link className="link" to="/admin">
                <FaHome className="carticon" /> |</Link>
            </li>
            <li className="nav-menu-item" >
                <Link className="link"  to="/addItem"> Add Item |</Link> 
            </li>            

            <li className="nav-menu-item">
                <Link className="link" to="/orders">Orders |</Link>
            </li>

            <li className="nav-menu-item">
                <Link className="link" to="/sales">Sales |</Link>
            </li>

            <li className="nav-menu-item">
              <button className="link" onClick={handleLogoutClick} style={{border:"none"}}>Logout</button>
            </li>
            </ul>
        </div>
      </div>
)};

export default Nav;