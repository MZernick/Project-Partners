import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
// import '../styles/hometest.css';
import Hiwtest from '../styles/howitworksmock1.png';

export default function Homepage(props) {
  return (    
<div class="main-container">
  <div id="menu">
    <div id="menu-items">
      <div class="menu-item" id='big-title'>ProPairs</div>
      {/* In the future, I'd like to make a ProPairs logo and just put it where ProPairs is right now. */}
      <div class="menu-item">How it Works</div>
      <div class="menu-item">Our Team</div>
      <div class="menu-item">Get Started</div>
    </div>
    <div class="descriptionContainer">
    <h2 id="description1">Group cohesion is everything in projects. We get it. ProPairs evaluates users based on their personality type and generates a rating of how well they will work with one another. The website aims to help users find compatible project partners based on their personality traits.</h2>
  </div>
  <div class="container">
    <a href="#">Menu </a>
    <a href="#">pages </a>
    <a href="#">study</a>
    <a href="#">contact </a>
  </div>
    <div id="menu-background-image"></div>
  </div>	

</div>
);
}

//         <div class="descriptionContainer">
//         <h2>
//             Group cohesion is everything in projects. We get it. ProPairs evaluates users based on their personality type and generates a rating of how well they will work with one another. The website aims to help users find compatible project partners based on their personality traits.
//         </h2>
//         </div>
