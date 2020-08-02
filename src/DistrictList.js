import React, { Component } from "react";
import "./App.css";
import ImphalEast from "./ImphalEast";
import Bishnupur from "./Bishnupur";
import Thoubal from "./Thoubal";
import ImphalWest from "./ImphalWest";
import Chandel from "./Chandel";

const imphalEastRes =
  "https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20East";
const bishnupurRes =
  "https://indian-cities-api.herokuapp.com/cities/search?District=Bishnupur";
const thoubalRes =
  "https://indian-cities-api.herokuapp.com/cities/search?District=Thoubal";
const imphalWestRes =
  "https://indian-cities-api.herokuapp.com/cities/search?District=Imphal%20West";
const chandelRes =
  "https://indian-cities-api.herokuapp.com/cities/search?District=Chandel";

const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class DList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
      imphalEastCities: [],
      bishnupurCities: [],
      thoubalCities: [],
      imphalWestCities: [],
      chandelCities: [],
    };
  }
  handleIEClick = (e) => {
    console.log("hello");
    e.preventDefault();
    let IEDiv = document.querySelector(".IEDiv");
    IEDiv.classList.toggle("display");
  };
  handleBishClick = (e) => {
    console.log("hello");
    e.preventDefault();
    let bishDiv = document.querySelector(".bishDiv");
    bishDiv.classList.toggle("display");
  };
  handleThouClick = (e) => {
    console.log("hello");
    e.preventDefault();
    let thouDiv = document.querySelector(".thouDiv");
    thouDiv.classList.toggle("display");
  };
  handleIWClick = (e) => {
    console.log("hello");
    e.preventDefault();
    let IWDiv = document.querySelector(".IWDiv");
    IWDiv.classList.toggle("display");
  };
  handleChanClick = (e) => {
    console.log("hello");
    e.preventDefault();
    let chanDiv = document.querySelector(".chanDiv");
    chanDiv.classList.toggle("display");
  };
  render() {
    return (
      <div className="districtBody">
        <div>
          <button className="dButton" onClick={this.handleIEClick}>Imphal East</button>
          <div className="IEDiv">
            <p className="citiesWord" >
              Cities:
            </p>
            <ImphalEast imphalEastCities={this.state.imphalEastCities} />
          </div>
        </div>
        <div>
          <button className="dButton" onClick={this.handleBishClick}>Bishnupur</button>
          <div className="bishDiv">
            <p className="citiesWord">
              Cities:
            </p>
            <Bishnupur bishnupurCities={this.state.bishnupurCities} />
          </div>
        </div>
        <div>
          <button className="dButton" onClick={this.handleThouClick}>Thoubal</button>
          <div className="thouDiv">
            <p className="citiesWord">
              Cities:
            </p>
            <Thoubal thoubalCities={this.state.thoubalCities} />
          </div>
        </div>
        <div>
          <button className="dButton" onClick={this.handleIWClick}>Imphal West</button>
          <div className="IWDiv">
            <p className="citiesWord">
              Cities:
            </p>
            <ImphalWest imphalWestCities={this.state.imphalWestCities} />
          </div>
        </div>
        <div>
          <button className="dButton" onClick={this.handleChanClick}>Chandel</button>
          <div className="chanDiv">
            <p className="citiesWord">
              Cities:
            </p>
            <Chandel chandelCities={this.state.chandelCities} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(imphalEastRes, getOptions)
      .then((imphalEastRes) => {
        return imphalEastRes.json();
      })
      .then((imphalEastRes) => {
        let newArr = [];
        for (let i = 0; i < imphalEastRes.length; i++) {
          newArr.push(imphalEastRes[i].City);
        }
        this.setState({
          imphalEastCities: newArr,
        });
      });
    fetch(bishnupurRes, getOptions)
      .then((bishnupurRes) => {
        return bishnupurRes.json();
      })
      .then((bishnupurRes) => {
        let newArr = [];
        for (let i = 0; i < bishnupurRes.length; i++) {
          newArr.push(bishnupurRes[i].City);
        }
        console.log(bishnupurRes);
        this.setState({
          bishnupurCities: newArr,
        });
      });
    fetch(thoubalRes, getOptions)
      .then((thoubalRes) => {
        return thoubalRes.json();
      })
      .then((thoubalRes) => {
        let newArr = [];
        for (let i = 0; i < thoubalRes.length; i++) {
          newArr.push(thoubalRes[i].City);
        }
        this.setState({
          thoubalCities: newArr,
        });
      });
    fetch(imphalWestRes, getOptions)
      .then((imphalWestRes) => {
        return imphalWestRes.json();
      })
      .then((imphalWestRes) => {
        let newArr = [];
        for (let i = 0; i < imphalWestRes.length; i++) {
          newArr.push(imphalWestRes[i].City);
        }
        this.setState({
          imphalWestCities: newArr,
        });
      });
    fetch(chandelRes, getOptions)
      .then((chandelRes) => {
        return chandelRes.json();
      })
      .then((chandelRes) => {
        let newArr = [];
        for (let i = 0; i < chandelRes.length; i++) {
          newArr.push(chandelRes[i].City);
        }
        this.setState({
          chandelCities: newArr,
        });
      });
  }
}

export default DList;
