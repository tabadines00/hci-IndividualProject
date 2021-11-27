import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="center">
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="data.lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="data.firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Label>Preferred Title</Form.Label>
        <div className="mb-3">
          <Form.Check 
            inline
            type="radio"
            id="inline-radio-1"
            label="None"
            name="group1"
          />

          <Form.Check
            inline
            type="radio"
            id="inline-radio-2"
            label="Student"
            name="group1"
          />

          <Form.Check 
            inline
            type="radio"
            id="inline-radio-3"
            label="Professor"
            name="group1"
          />

          <Form.Check 
            inline
            type="radio"
            id="inline-radio-4"
            label="Staff"
            name="group1"
          />

          <Form.Check 
            inline
            type="radio"
            id="inline-radio-5"
            label="Retired"
            name="group1"
          />
        </div>

        <Form.Label>Height</Form.Label>

        <Form.Label>Phone Number</Form.Label>

        <Form.Group className="mb-3" controlId="data.address">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="data.city">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="data.state">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

    <Form.Group as={Col} controlId="data.zip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

        <Form.Label>Check all services you require</Form.Label>
        <div className="mb-3">
          <Form.Check 
            inline
            type="checkbox"
            id="inline-checkbox-1"
            label="None"
            name="group2"
          />

          <Form.Check
            inline
            type="checkbox"
            id="inline-checkbox-2"
            label="Student"
            name="group2"
          />

          <Form.Check 
            inline
            type="checkbox"
            id="inline-checkbox-3"
            label="Professor"
            name="group2"
          />

          <Form.Check 
            inline
            type="checkbox"
            id="inline-checkbox-4"
            label="Staff"
            name="group2"
          />

          <Form.Check 
            inline
            type="checkbox"
            id="inline-checkbox-5"
            label="Retired"
            name="group2"
          />

          <Form.Check 
            inline
            type="checkbox"
            id="inline-checkbox-5"
            label="Retired"
            name="group2"
          />
        </div>

        <Form.Label>Your monthly budget for services</Form.Label>
        <div className="mb-3">
          <Form.Check 
            inline
            type="radio"
            id="inline-radio-5"
            label="Less than $50"
            name="group3"
          />

          <Form.Check
            inline
            type="radio"
            id="inline-radio-6"
            label="Between $50 and $100"
            name="group3"
          />

          <Form.Check 
            inline
            type="radio"
            id="inline-radio-7"
            label="Above $100"
            name="group3"
          />
        </div>

        <Form.Group className="mb-3" controlId="data.email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

      </Form>
      </div>
    </div>
  );
}

export default App;
