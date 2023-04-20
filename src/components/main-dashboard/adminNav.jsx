import React from 'react';
import "./navigation.css"
import { Link } from "react-router-dom";
import tastytreats from '../../assets/new_logo.gif'

const AdminNav = () => {
    return (
        <div className="navbar">
            <div className = "navbar-item-left">
                <ul className="nav-menu">
                    <li className="nav-menu-item" >
                    <img src={tastytreats} alt="ramen" className="logo" width="500" height="600"/>
                    </li>
                </ul>
            </div>
            <div className = "navbar-item-right">
                <ul className="nav-menu">
                <li className="nav-menu-item">
                    <Link className="link" to="/login">Logout</Link>
                </li>
                </ul>
            </div>
          </div>
    )
}

export default AdminNav;
