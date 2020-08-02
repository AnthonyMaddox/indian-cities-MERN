import React, { Component } from "react";
import "./App.css";

function Chandel(props) {
  console.log(props.chandelCities);
  return (
    <div className="cityList">
      <div>{props.chandelCities[0]}</div>
    </div>
  );
}

export default Chandel;