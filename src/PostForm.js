import React, { Component } from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

//  export default function Create() {

//    const formik = useFormik({
//      initialValues: {
//        City: "",
//        State: "",
//        District: ""
//      },
//      onSubmit: (values) => {
//        // alert(JSON.stringify(values, null, 2));
//        fetch({
//          method: "post",
//          url: "https://indian-cities-api.herokuapp.com/cities",
//          data: {
//            City: values.City,
//            State: values.State,
//            District: values.District,
//          },
//        });
//      },
//    });

const res = "https://indian-cities-api.herokuapp.com/cities";

class PostForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("help im posting");
    let city =
      document.getElementById("city").value.charAt(0).toUpperCase() +
      document.getElementById("city").value.slice(1);
    let state =
      document.getElementById("state").value.charAt(0).toUpperCase() +
      document.getElementById("state").value.slice(1);
    let district =
      document.getElementById("district").value.charAt(0).toUpperCase() +
      document.getElementById("district").value.slice(1);
    console.log(city);
    //let data = new FormData(e.target);
    fetch(res, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        City: city,
        State: state,
        District: district,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
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

        <button className="dButton">Add City</button>
      </form>
    );
  }
}

export default PostForm;
