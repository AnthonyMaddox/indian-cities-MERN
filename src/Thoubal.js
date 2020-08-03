import React, { Component } from "react";
//import { Button } from "@material-ui/core";
import "./App.css";

function Thoubal(props) {
  console.log(props.thoubalCities);
  return (
    <div className="cityList">
      <div>{props.thoubalCities[0]}</div>
      <div>{props.thoubalCities[1]}</div>
      <div>{props.thoubalCities[2]}</div>
      <div>{props.thoubalCities[3]}</div>
      <div>{props.thoubalCities[4]}</div>
      <div>{props.thoubalCities[5]}</div>
      <div>{props.thoubalCities[6]}</div>
      <div>{props.thoubalCities[7]}</div>
      <div>{props.thoubalCities[8]}</div>
      <div>{props.thoubalCities[9]}</div>
      <div>{props.thoubalCities[10]}</div>
    </div>
  );
}

export default Thoubal;
