import React, { Component } from "react";
//import { Button } from "@material-ui/core";
import "./App.css";

function ImphalEast(props) {
  console.log(props.imphalEastCities);
  return (
    <div className="cityList">
      <div>{props.imphalEastCities[0]}</div>
      <div>{props.imphalEastCities[1]}</div>
      <div>{props.imphalEastCities[2]}</div>
      <div>{props.imphalEastCities[3]}</div>
      <div>{props.imphalEastCities[4]}</div>
      <div>{props.imphalEastCities[5]}</div>
    </div>
  );
}

export default ImphalEast;
//{props.imphalEastCities[0].City}