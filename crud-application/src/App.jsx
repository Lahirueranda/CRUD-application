import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <div className='App'>

      <form action="" method=''>

        <h1 className='formname'>Registration Form</h1>

        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text id="inputGroup-sizing-default">
            <i class='bx bxs-user'></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            type="text"
            placeholder='Username'
            aria-describedby="inputGroup-sizing-default"
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <i class='bx bxl-gmail'></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            type="email"
            placeholder='E-mail'
            aria-describedby="inputGroup-sizing-default"
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <i class='bx bx-world'></i>
          </InputGroup.Text>
          <Form.Select>
            <option>Select Your Country</option>
            <option>Sri Lanka</option>
            <option>India</option>
            <option>Japan</option>
          </Form.Select>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <i class='bx bxs-calendar'></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            type="date"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <i class='bx bxs-key'></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            type="password"
            placeholder='Password'
            aria-describedby="inputGroup-sizing-default"
            required
          />
        </InputGroup>

        <input type="radio" id="Married" name="state" value="Married" className='RadioButton' />
        <label className='LableName'>Married</label>

        <input type="radio" id="Unmarried" name="state" value="Unmarried" className='RadioButton' />
        <label className='LableName'>Unmarried</label>

        <div className="d-grid mt-3 mb-3">
          <Button variant="primary" size="md">Register Now</Button>
        </div>

      </form>
    </div>
  )
}

export default App;
