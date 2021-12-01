import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResultComponent({formData}) {

    let servicesList = ["Email", "Phone", "Facebook", "Twitter", "Surface Mail", "Personal Visit"];

    let addressCheck = () => {
        
        return (formData.address && formData.state && formData.zipCode);
    }

  return (
    <div>
        <h2>Results Verification Page Thomas Abadines</h2>
        <p>Name:<br />{formData.firstName} {formData.lastName}</p>
        {formData.title != "" && <p>Title:<br />{formData.title}</p>}
        {formData.heightFeet != 0 && <p>Feet: {formData.heightFeet} Feet</p>}
        {formData.heightInches != 0 && <p>Inches: {formData.heightInches} Inches</p>}
        {formData.phoneNumber != "" && <p>Phone Number:<br />{formData.phoneNumber}</p>}
        {formData.email != "" && <p>Email:<br />{formData.email}</p>}
        {addressCheck() && <p>Address:<br />{formData.address}, {formData.state} {formData.zipCode}</p>}
        <p>Services Required:</p>
        <ul>
        {formData.service0 && <li>{servicesList[0]}</li>}
        {formData.service1 && <li>{servicesList[1]}</li>}
        {formData.service2 && <li>{servicesList[2]}</li>}
        {formData.service3 && <li>{servicesList[3]}</li>}
        {formData.service4 && <li>{servicesList[4]}</li>}
        {formData.service5 && <li>{servicesList[5]}</li>}
        </ul>
        {formData.budget != "" && <p>Budget:<br />{formData.budget}</p>}
    </div>
  );
}

export default ResultComponent;