import React, { Component } from "react";
import "./App.css";

class DeleteForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("oh no I'm deleting");
    let idInput = document.getElementById("idInput").value;
    JSON.stringify(idInput);
    let idToDelete = idInput;
    console.log(idToDelete);

    let res = `https://indian-cities-api.herokuapp.com/cities/${idToDelete}`;

    fetch(res, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedCity) => console.log(deletedCity))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="formLine">
          <label htmlFor="idInput">Enter District</label>
          <input id="idInput" name="idInput" type="text" />
        </div>
        <button className="dButton">Delete</button>
      </form>
    );
  }
}

export default DeleteForm;
