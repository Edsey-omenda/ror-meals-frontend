import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../homeuser/Cart";
import UserHomepage from "../homeuser/UserHomepage";
import NotFound from "../NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../App.css';
import Dashboard from '../main-dashboard/Dashboard';
import LoginForm from '../main-dashboard/LoginForm';
import Register from '../main-dashboard/Register';
import AdminDashboard from '../admin-dashboard/AdminDashboard';
// import Form from './components/Credentials/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserOrders from "../order/UserOrders";
import AfterOrder from "../order/AfterOrder";
import AddItem from "../admin-dashboard/AddItem";
import Carousel from "../homeuser/Carousel"
// import EditMenu from "../adminuser/EditMenu";

import Orders from "../admin-dashboard/OrderList";

function App() {
  
  return (
    <Router>
       <ToastContainer />
      <Routes>
      <Route path='/cart' element={<Cart />} />
      {/* <Route path='/orders' element={<Orders />} /> */}
      <Route path="/not-found" element={<NotFound/>} />
      {/* <Route path="/" element={<UserHomepage />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/UserHome" element={<UserHomepage />} />
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/UserOrder' element={<UserOrders/>}/>
        <Route path='/placed' element={<AfterOrder/>}/>
        <Route path='/admin' element={<AdminDashboard />}/>
        <Route path='/addItem' element={<AddItem />}/>
        {/* <Route path='/edit-menu' element={<EditMenu />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
