import React, { Component } from "react";
//import { Button } from "@material-ui/core";
import "./App.css";

function ImphalWest(props) {
  console.log(props.imphalWestCities);
  return (
    <div className="cityList">
      <div>{props.imphalWestCities[0]}</div>
      <div>{props.imphalWestCities[1]}</div>
      <div>{props.imphalWestCities[2]}</div>
      <div>{props.imphalWestCities[3]}</div>
      <div>{props.imphalWestCities[4]}</div>
      <div>{props.imphalWestCities[5]}</div>
      <div>{props.imphalWestCities[6]}</div>
      <div>{props.imphalWestCities[7]}</div>
      <div>{props.imphalWestCities[8]}</div>
      <div>{props.imphalWestCities[9]}</div>
    </div>
  );
}

export default ImphalWest