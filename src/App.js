import React, { Component } from "react";
import "./App.css";

const res =
  "https://indian-cities-api.herokuapp.com/cities/search?State=Manipur";
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

const imphalRes =
  "https://indian-cities-api.herokuapp.com/cities/search?City=Imphal";
const samurouRes =
  "https://indian-cities-api.herokuapp.com/cities/search?City=Samurou";
const nambolRes =
  "https://indian-cities-api.herokuapp.com/cities/search?City=Nambol";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDistricts: [],
      allCites: [],
      imphalEastCities: [],
      bishnupurCities: [],
      thoubalCities: [],
      imphalWestCities: [],
      chandelCities: [],
      imphalCity: [],
      nambolCity: [],
      SamurouCity: [],
    };
  }

  render() {
    return (
      <div className="appBody">
        <div className="top">
          <p className="topTitle">
            Cities of Indian State: Manipur
            <span>From Anthony Maddox's Indian Cities api</span>
          </p>
        </div>
        <div className="App">
          <div className="accordianDiv">
            <button>Hello World!</button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(res, options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res[3]);

        this.setState({
          allCities: res,
        });
      });
    fetch(imphalEastRes, options)
      .then((imphalEastRes) => {
        return imphalEastRes.json();
      })
      .then((imphalEastRes) => {
        console.log(imphalEastRes);
        this.setState({
          imphalEastCities: imphalEastRes,
        });
      });
    fetch(bishnupurRes, options)
      .then((bishnupurRes) => {
        return bishnupurRes.json();
      })
      .then((bishnupurRes) => {
        console.log(bishnupurRes);
        this.setState({
          bishnupurCities: bishnupurRes,
        });
      });
    fetch(thoubalRes, options)
      .then((thoubalRes) => {
        return thoubalRes.json();
      })
      .then((thoubalRes) => {
        console.log(thoubalRes);
        this.setState({
          thoubalCities: thoubalRes,
        });
      });
    fetch(imphalWestRes, options)
      .then((imphalWestRes) => {
        return imphalWestRes.json();
      })
      .then((imphalWestRes) => {
        console.log(imphalWestRes);
        this.setState({
          imphalWestCities: imphalWestRes.push(res[3]),
        });
      });
    fetch(samurouRes, options)
      .then((samurouRes) => {
        return samurouRes.json();
      })
      .then((samurouRes) => {
        console.log(samurouRes);
        this.setState({
          samurouCity: samurouRes,
        });
      });
      fetch(nambolRes, options)
      .then((nambolRes) => {
        return nambolRes.json();
      })
      .then((nambolRes) => {
        console.log(nambolRes);
        this.setState({
          imphalCity: nambolRes,
        });
      });
      fetch(imphalRes, options)
      .then((imphalRes) => {
        return imphalRes.json();
      })
      .then((imphalRes) => {
        console.log(imphalRes);
        this.setState({
          chandelCities: imphalRes,
        });
      });
      fetch(chandelRes, options)
      .then((chandelRes) => {
        return chandelRes.json();
      })
      .then((chandelRes) => {
        console.log(chandelRes);
        this.setState({
          chandelCities: chandelRes,
        });
      });
  }
}

export default App;
