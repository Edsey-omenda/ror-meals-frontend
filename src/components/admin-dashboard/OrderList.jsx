import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import '../../../src/App.css'

export default function Orders() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch("https://ror-meals.onrender.com/orders")
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);


    return (
        <Table striped bordered hover className='order-table'>
                
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>User Name</th>
                    <th>Menu Item</th>
                    <th>Quantity</th>
            
            {orders.map((item) => (
                <tbody>
                    <tr>
                        <td>#{item.id}</td>
                        <td>{item.day}</td>
                        <td>{item.user.user_name}</td>
                        <td>{item.menu_item_id}</td>
                        <td>{item.quantity}</td>
                    </tr>

                </tbody>
            ))}

        </Table>
    );
}