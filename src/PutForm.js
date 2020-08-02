import React, { Component } from "react";
import "./App.css";

const res = "https://indian-cities-api.herokuapp.com/cities";

class putForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("help");
    const data = new FormData(e.target);
    fetch(res, {
      method: "PUT",
      body: data,
    });
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="formLine">
          <label htmlFor="City">Enter ID</label>
          <input id="id" name="_Id" type="text" />
        </div>
        <div className="formLine">
          <label htmlFor="City">Enter City</label>
          <input id="city" name="City" type="text" />
        </div>
        <div className="formLine">
          <label htmlFor="State">Enter State</label>
          <input id="state" name="State" type="text" />
        </div>
        <div className="formLine">
          <label htmlFor="District">Enter District</label>
          <input id="district" name="District" type="text" />
        </div>
        <button className="dButton">Update City by ID</button>
      </form>
    );
  }
}

export default putForm;
