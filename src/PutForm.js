import React, { Component } from "react";
import "./App.css";

class PutForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("yikes im updating");
    let idUpdateInput = document.getElementById("idUpdateInput").value;
    JSON.stringify(idUpdateInput);
    let idToUpdate = idUpdateInput;
    console.log(idToUpdate);

    let city =
      document.getElementById("cityUpdate").value.charAt(0).toUpperCase() +
      document.getElementById("cityUpdate").value.slice(1);
    let state =
      document.getElementById("stateUpdate").value.charAt(0).toUpperCase() +
      document.getElementById("stateUpdate").value.slice(1);
    let district =
      document.getElementById("districtUpdate").value.charAt(0).toUpperCase() +
      document.getElementById("districtUpdate").value.slice(1);
    let res = `https://indian-cities-api.herokuapp.com/cities/${idToUpdate}`;
    fetch(res, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        City: city,
        State: state,
        District: district,
      }),
    })
      .then((res) => res.json())
      .then((updatedCity) => console.log(updatedCity))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="formLine">
          <label htmlFor="id">Enter City id</label>
          <input id="idUpdateInput" name="id" type="text" />
        </div>
        <div className="formLine">
          <label htmlFor="City">Enter City</label>
          <input id="cityUpdate" name="City" type="text" />
        </div>
        <div className="formLine">
          <label htmlFor="State">Enter State</label>
          <input id="stateUpdate" name="State" type="text" />
        </div>
        <div className="formLine">
          <label htmlFor="District">Enter District</label>
          <input id="districtUpdate" name="District" type="text" />
        </div>
        <button className="dButton">Update City by ID</button>
      </form>
    );
  }
}

export default PutForm;
