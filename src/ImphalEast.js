import React from "react";
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
      <div>{props.imphalEastCities[6]}</div>
      <div>{props.imphalEastCities[7]}</div>
      <div>{props.imphalEastCities[8]}</div>
    </div>
  );
}

export default ImphalEast;
