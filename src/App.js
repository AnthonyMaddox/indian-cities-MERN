import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import DList from "./DistrictList";
import { Button } from "@material-ui/core";
import PostForm from "./PostForm";
import PutForm from "./PutForm";
import DeleteForm from "./DeleteForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
      allDistricts: [],
      allCites: [],
    };
  }
  handleClick = (e) => {
    console.log("hello");
    e.preventDefault();
    let districtDiv = document.querySelector(".districtDiv");
    districtDiv.classList.toggle("display");
  };
  handleAddClick = (e) => {
    console.log("add");
    e.preventDefault();
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.toggle("display");
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.remove("display");
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.remove("display");
  };
  handleUpdateClick = (e) => {
    console.log("update");
    e.preventDefault();
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.toggle("display");
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.remove("display");
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.remove("display");
  };
  handleDeleteClick = (e) => {
    console.log("delete");
    e.preventDefault();
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.toggle("display");
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.remove("display");
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.remove("display");
  };

  render() {
    return (
      <div className="bodyDiv">
        <div className="top">
          <Header
            
          />
        </div>
        <div className="majorCities">
          <Button variant="contained" color="secondary">
            Imphal
          </Button>
          <Button variant="contained" color="secondary">
            Nambol
          </Button>
          <Button variant="contained" color="secondary">
            Samurou
          </Button>
        </div>
        <div className="App">
          <div className="districtBtn">
            <button className="actualDistrictBtn" onClick={this.handleClick}>
              Districts
            </button>
            <div className="districtDiv">
              <DList dlist={this.state.allDistricts} />
            </div>
          </div>
          <div className="crudDiv">
            <div className="formDiv">
              <button className="addBtn" onClick={this.handleAddClick}>
                Add City
              </button>
            </div>
            <div>
              <button className="addBtn" onClick={this.handleUpdateClick}>
                Update City by ID
              </button>
            </div>
            <div>
              <button className="addBtn" onClick={this.handleDeleteClick}>
                Delete City by ID
              </button>
            </div>
          </div>
          <div className="addDiv">
            <PostForm />
          </div>
          <div className="updateDiv">
            <PutForm />
          </div>
          <div className="deleteDiv">
            <DeleteForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
