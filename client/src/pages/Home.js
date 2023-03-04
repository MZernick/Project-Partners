import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/Home.css';
import Hiwtest from '../styles/howitworksmock1.png';

export default function Homepage(props) {
  return (
  <div>
     <div class="headingContainer">
      <div class="propairsContainer">
        <h1>
          ProPairs
        </h1>
      </div>
        <div class="descriptionContainer">
        <h2>
            Group cohesion is everything in projects. We get it. ProPairs evaluates users based on their personality type and generates a rating of how well they will work with one another. The website aims to help users find compatible project partners based on their personality traits.
        </h2>
        </div>
      </div>
      <button class="button-front">Get Started</button>
    <div class="imgContainer">
      <img src={Hiwtest} alt="how it works"/>
    </div>
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
