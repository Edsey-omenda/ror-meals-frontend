import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../src/App.css";
import Nav from "../Nav";

export default function Sales() {
  const [totals, setTotals] = useState([]);
  const [Todaytotals, setTodaytotals] = useState([]);

  // total sales
  useEffect(() => {
    fetch("https://ror-meals.onrender.com/totals")
      .then((response) => response.json())
      .then((data) => {
        setTotals(data);
        // console.log(data)
      });
  }, []);

  // totals sales in a day
  useEffect(() => {
    fetch("https://ror-meals.onrender.com/Todaytotals")
      .then((response) => response.json())
      .then((data) => {
        setTodaytotals(data);
        // console.log(data)
      });
  }, []);

  return (
    <div className="cart-container">
      {/* <Nav /> */}
      <br />
      <h2> <b>OVERALL TOTAL SALES MADE:</b> KSH{totals}</h2>
      <br />
      <h2><b>TOTAL SALES FOR TODAY ONLY: </b>KSH{Todaytotals}</h2>
    </div>
  );
}