import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import DList from "./DistrictList";
import { Button } from "@material-ui/core";
import PostForm from "./PostForm";
import PutForm from "./PutForm";
import DeleteForm from "./DeleteForm";

const res =
  "https://indian-cities-api.herokuapp.com/cities/search?State=Manipur";
//const imphalEastRes =
// "https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20East";
// const bishnupurRes =
//   "https://indian-cities-api.herokuapp.com/cities/search?District=Bishnupur";
// const thoubalRes =
//   "https://indian-cities-api.herokuapp.com/cities/search?District=Thoubal";
// const imphalWestRes =
//   "https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20West";
// const chandelRes =
//   "https://indian-cities-api.herokuapp.com/cities/search?District=Chandel";
const imphalRes =
  "https://indian-cities-api.herokuapp.com/cities/search?City=Imphal";
const samurouRes =
  "https://indian-cities-api.herokuapp.com/cities/search?City=Samurou";
const nambolRes =
  "https://indian-cities-api.herokuapp.com/cities/search?City=Nambol";

const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
const postOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
};
const putOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
const deleteOptions = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
      allDistricts: [],
      allCites: [],
      //imphalEastCities: [],
      //bishnupurCities: [],
      //thoubalCities: [],
      //
      //chandelCities: [],
      imphalCity: [],
      nambolCity: [],
      SamurouCity: [],
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
            stateName={this.state.stateName}
            imphalCity={this.state.imphalCity.City}
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

//  fetch(samurouRes, options)
//    .then((samurouRes) => {
//      return samurouRes.json();
//    })
//    .then((samurouRes) => {
//      console.log(samurouRes);
//      this.setState({
//        samurouCity: samurouRes,
//      });
//    });
//  fetch(nambolRes, options)
//    .then((nambolRes) => {
//      return nambolRes.json();
//    })
//    .then((nambolRes) => {
//      console.log(nambolRes);
//      this.setState({
//        imphalCity: nambolRes,
//      });
//    });
//  fetch(imphalRes, options)
//    .then((imphalRes) => {
//      return imphalRes.json();
//    })
//    .then((imphalRes) => {
//      console.log(imphalRes);
//      this.setState({
//        chandelCities: imphalRes,
//      });
//    });
