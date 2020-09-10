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
  handleImphalClick = (e) => {
    e.preventDefault();
    let imphalTopDiv = document.querySelector(".imphalTopDiv");
    imphalTopDiv.classList.toggle("display");
    let nambolTopDiv = document.querySelector(".nambolTopDiv");
    nambolTopDiv.classList.remove("display");
    let samurouTopDiv = document.querySelector(".samurouTopDiv");
    samurouTopDiv.classList.remove("display");
  };
  handleNambolClick = (e) => {
    e.preventDefault();
    let imphalTopDiv = document.querySelector(".imphalTopDiv");
    imphalTopDiv.classList.remove("display");
    let nambolTopDiv = document.querySelector(".nambolTopDiv");
    nambolTopDiv.classList.toggle("display");
    let samurouTopDiv = document.querySelector(".samurouTopDiv");
    samurouTopDiv.classList.remove("display");
  };
  handleSamurouClick = (e) => {
    e.preventDefault();
    let imphalTopDiv = document.querySelector(".imphalTopDiv");
    imphalTopDiv.classList.remove("display");
    let nambolTopDiv = document.querySelector(".nambolTopDiv");
    nambolTopDiv.classList.remove("display");
    let samurouTopDiv = document.querySelector(".samurouTopDiv");
    samurouTopDiv.classList.toggle("display");
  };

  render() {
    return (
      <div className="bodyDiv">
          <div className="app">
        <div className="top">
          <Header />
        </div>
        <div className="majorCities">
          <Button
            onClick={this.handleImphalClick}
            variant="contained"
            color="secondary"
          >
            Imphal
          </Button>
          <Button
            onClick={this.handleNambolClick}
            variant="contained"
            color="secondary"
          >
            Nambol
          </Button>
          <Button
            onClick={this.handleSamurouClick}
            variant="contained"
            color="secondary"
          >
            Samurou
          </Button>
        </div>
        <div className="imphalTopDiv">
          <div className="imphalPic"></div>
          <div className="imphalDes">Imphal is the capital city of Manipur. It spans both the Imphal East and West districts. It is most famous for it's metropolitan centre which contains the ruins of Kangla Palace, the royal seat of the former Kingdom of Manipur. It's population was 268,243 according to a 2011 census.</div>
        </div>
        <div className="nambolTopDiv">
          <div className="nambolPic"></div>
          <div className="nambolDes">The town of Nambol overlaps the Bishnupur and Imphal West districts. It is known as an educational hub and it's market called the Nambol Bazaar is one of the busiest markets in Manipur. In 2001 a census showed a population of 18,117.</div>
        </div>
        <div className="samurouTopDiv">
          <div className="samurouPic"></div>
          <div className="samurouDes">Samurou city limits reach into both the Thoubal and Imphal West districts. Notable spots include two temples for the diety of Ibudhou Pakhangba, Awang Leikai and Makha Leikai. It is also the birthplace of the Manipuri poet Hijam Angahal. As of 2001 it's population was 14,232.</div>
        </div>
        
          <div className="districtBtn">
            <button className="actualDistrictBtn" onClick={this.handleClick}>
              Districts
            </button>
            <div className="districtDiv">
              <DList dlist={this.state.allDistricts} />
            </div>
          </div>
          <div className="accessDiv"><p>Access to Anthony Maddox's Indian City Database:</p></div>
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
