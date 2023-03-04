import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Homepage(props) {
  return (
    <div>
      <h1> ProPairs/ Project Partners</h1>
      <p> Find a partner</p>
      <Form>
        <>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Email</Dropdown.Item>
              <Dropdown.Item href="#">Personality</Dropdown.Item>
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search"
              id="search"
            />
            <button
              onClick={props.handleFormSubmit}
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
          </InputGroup>
        </>
      </Form>
    </div>
  );
}
