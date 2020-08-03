import React, { Component } from "react";
import "./App.css";

function Bishnupur(props) {
  console.log(props.bishnupurCities);
  return (
    <div className="cityList">
      <div>{props.bishnupurCities[0]}</div>
      <div>{props.bishnupurCities[1]}</div>
      <div>{props.bishnupurCities[2]}</div>
      <div>{props.bishnupurCities[3]}</div>
      <div>{props.bishnupurCities[4]}</div>
      <div>{props.bishnupurCities[5]}</div>
      <div>{props.bishnupurCities[6]}</div>
      <div>{props.bishnupurCities[7]}</div>
      <div>{props.bishnupurCities[8]}</div>
    </div>
  );
}

export default Bishnupur;