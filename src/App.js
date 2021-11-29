import React from "react";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let unitedStatesList = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado",
                        "Connecticut", "District of Columbia", "Delaware","Florida","Georgia","Guam",
                        "Hawaii","Iowa","Idaho", "Illinois", "Indiana","Kansas","Kentucky", "Louisiana",
                        "Massachusetts","Maryland", "Maine","Michigan", "Minnesota", "Missouri", "Mississippi",
                        "Montana", "North Carolina","North Dakota","Nebraska","New Hampshire",
                        "New Jersey", "New Mexico", "Nevada", "New York","Ohio", "Oklahoma", "Oregon", "Pennsylvania",
                        "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota","Tennessee","Texas", "Utah",
                        "Virginia","Virgin Islands","Vermont", "Washington", "Wisconsin", "West Virginia","Wyoming"];

let titlesList = ["None", "Student", "Professor", "Staff", "Retired"];
let servicesList = ["Email", "Phone", "Facebook", "Twitter", "Surface Mail", "Personal Visit"];
let budgetList = ["Less than $50", "Between $50 and $100", "Above $100"];

let nameRegex = /^[a-zA-Z]{1,40}/;
let addressRegex = /^[a-zA-Z0-9]{1,40}/;
let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
let zipRegex = /^[0-9]{5}/;
let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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

  const [isValid, setValid] = React.useState({
    lastNameValid: true,
    firstNameValid: true,
    phoneNumberValid: true,
    addressValid: true,
    zipCodeValid: true,
    emailValid: true,
    termAgreeValid: true,
    captchaValid: true
  });

  let validateData = () => {
    // Last name: Alphabet 40
    let temp = { lastNameValid: (nameRegex.test(formData.lastName)),
    // First name: Alphabet 40
    firstNameValid: (nameRegex.test(formData.firstName)),
    // Phone: Numbers 10 (check Regex)
    phoneNumberValid: (phoneRegex.test(formData.phoneNumber)),
    // Address: AlphaNumeric 40
    addressValid: (addressRegex.test(formData.address)),
    // Zip: abs() Number 5
    zipCodeValid: (zipRegex.test(formData.zipCode)),
    // Email: Regex
    emailValid: (emailRegex.test(formData.email)),
    // Check is clicked
    termAgreeValid: (formData.termAgree),
    // Captcha
    captchaValid: (formData.captcha)
    };

    setValid(temp);

    console.log(phoneRegex.test(formData.phoneNumber));

    for(let i in temp) {
      if(temp[i] === false)
        return false;
    }
    return true;
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if(validateData()) {
      //submit and go to next page
      alert("Everything is good!");
    } else {
      //dont go
      alert("Not everything is good!");
    }
  }

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
/*
  let handleServices = (e) => {
    var value = e.target.checked;
    setFormData({
      ...formData,
      services[e.target.name]: value
    });
    console.log(e.target.name + " is now " + value);
    console.log(formData);
  }
*/
  return (
    <div className="App">
      <div className="center">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" onChange={handle}  />
                {!isValid.lastNameValid && <Form.Text muted>
                  Please enter a valid Last Name (under 40 characters, letters only)
                </Form.Text>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" onChange={handle}  />
                {!isValid.firstNameValid && <Form.Text muted>
                  Please enter a valid First Name (under 40 characters, letters only)
                </Form.Text>}
            </Form.Group>
          </Col>
        </Row>

        <Form.Label>Preferred Title</Form.Label>
        <Form.Group className="mb-3" >
          {titlesList.map((t) => (
            <Form.Check key={t}
              inline
              type="radio"
              label={t}
              value={t}
              name="title"
              onChange={handle}
            />
          ))}
        </Form.Group>

        <Row>
          <Form.Label>Height</Form.Label>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Feet" name="heightFeet" onChange={handle}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Inches" name="heightInches" onChange={handle} />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="(***)***-****" name="phoneNumber" onChange={handle} />
          {!isValid.phoneNumberValid && <Form.Text muted>
            Please enter a valid Phone Number (10 digits)
          </Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="address" onChange={handle} />
          {!isValid.addressValid && <Form.Text muted>
            Please enter a valid Address (Alphanumeric only)
          </Form.Text>}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control  />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." name="state" onChange={handle}  >
            <option>Choose...</option>
              {unitedStatesList.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Form.Select>
          </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zipCode" onChange={handle} />
          {!isValid.zipCodeValid && <Form.Text muted>
            Please enter a valid Zip Code (5 digits)
          </Form.Text>}
        </Form.Group>
      </Row>

        <Form.Label>Check all services you require</Form.Label>
        <Form.Group className="mb-3">
          {servicesList.map((s, index) => (
            <Form.Check key={s}
              inline
              type="checkbox"
              checked={formData["service" + index]}
              label={s}
              name={"service" + index}
              onChange={handle}
            />
          ))}
        </Form.Group>

        <Form.Label>Your monthly budget for services</Form.Label>
        <Form.Group className="mb-3">
          {budgetList.map((b) => (
            <Form.Check key={b}
              inline
              type="radio"
              label={b}
              value={b}
              name="budget"
              onChange={handle}
            />
          ))}
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@email.com" name="email" onChange={handle} />
          {!isValid.emailValid && <Form.Text muted>
            Please enter a valid Email (i. e. *****@***.com)
          </Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>By clicking "I Agree", you are agreeing to the <a href="#" target="_blank">Terms</a></Form.Label>
          <Form.Check
              type="checkbox"
              checked={formData.termAgree}
              label="I Agree"
              name="termAgree"
              onChange={handle}
            />
            {!isValid.termAgree && <Form.Text muted>
            Accepting the Terms and Conditions is required.
          </Form.Text>}
        </Form.Group>
        <Form.Label>Captcha</Form.Label>
          <Form.Check
              type="checkbox"
              checked={formData.captcha}
              label="I Am Not A Robot"
              name="captcha"
              onChange={handle}
            />
          {!isValid.captchaValid && <Form.Text muted>
            Completing the Captcha is required.
          </Form.Text>}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </div>
    </div>
  );
}

export default App;
