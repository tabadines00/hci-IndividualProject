import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from "./FormComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultComponent from "./ResultComponent";

function App() {

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    title: "",
    heightFeet: 0,
    heightInches: 0,
    phoneNumber: "",
    address: "",
    state: "",
    zipCode: "",
    service0: false,
    service1: false,
    service2: false,
    service3: false,
    service4: false,
    service5: false,
    budget: "",
    email: "",
    termAgree: false,
    captcha: false
  });

  const [redirect, setRedirect] = React.useState({
    ready: false
  });

  let handle = (e) => {
    var value = e.target.value;
    if(e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setFormData({
      ...formData,
      [e.target.name]: value
    });
    console.log(e.target.name + " is now " + value);
    console.log(formData);
  }

  return (
    <div classname="background">
    <div className="App">
      <div className="header">
        <h1>Form Demo</h1>
      </div>
      <div className="center">
        {redirect.ready ? <ResultComponent formData={formData} /> : <FormComponent handle={handle} formData={formData} setRedirect={setRedirect} />}
      </div>
    </div>
    </div>
  );
}

export default App;
