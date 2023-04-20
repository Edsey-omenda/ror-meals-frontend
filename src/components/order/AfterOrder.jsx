import React from 'react'
import { Link } from "react-router-dom";
import './order.css';

export default function AfterOrder() {
  return (
    <div className="order-details" >
         <h3 className="success-message">Your order has been placed.</h3>
         <div className="continue-shopping">
            <Link to="/UserHome">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Go to Home</span>
            </Link>
          </div>
    </div>
  )
}
