import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './App.css';

function App() {
  return (
    <div className='App'>

      <InputGroup className="mb-3 mt-2">
        <InputGroup.Text id="inputGroup-sizing-default">
          <i class='bx bxs-user'></i>
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          type="text"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          <i class='bx bxl-gmail'></i>
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          type="email"
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
          aria-describedby="inputGroup-sizing-default"
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
        <option>Select Your Country</option>
        <option>Select Your Country</option>
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


    </div>
  )
}

export default App
