import React from 'react';
import './admindash.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Order from '../order/Order';
import Orders from './OrderList';
import AdminNav from '../main-dashboard/adminNav';
import SetMenu from './adminuser/SetMenu';
import Sales from './adminuser/Sales';
// import AddItem from './AddItem';


function Admin () {

    return (
        <div className="admin">
            <AdminNav />
            <Order />
            {/* <SetMenu />
            <EditMenu />
            <Orders /> */}
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 toggle">
              {/* <Tab eventKey="add-item" title="Add Item">
              <AddItem />
            </Tab> */}
            <Tab eventKey="setmenu" title="Set Menu" id="setmenu">
              <div>
              <SetMenu />
              </div>
            </Tab>
            <Tab eventKey="order" title="Orders" id="order">
              <div>
              <Orders />
              </div>
            </Tab>
            <Tab eventKey="sales" title="Sales" id="sales">
              <div>
              <Sales />
              </div>
            </Tab>
            </Tabs>
        </div>
    );   
}


export default Admin;