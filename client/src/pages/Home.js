import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/Home.css';
import Hiwtest from '../styles/howitworksmock3.png';

export default function Homepage(props) {
  return (    
<div class="main-container">
  <div id="menu">
    <div id="menu-items">
      <a><div class="menu-item" id='big-title'>ProPairs</div></a>
      {/* In the future, I'd like to make a ProPairs logo and just put it where ProPairs is right now. */}
      <div class="menu-item">How it Works</div>
      <div class="menu-item">Our Team</div>
      <a href="/signup"><div class="menu-item">
        Get Started
        </div></a>
    </div>
    <div id="menu-background-image"></div>
  </div>	
  <div class="descriptionContainer1">
  <h1 id="title1">We get it.</h1>
    <h2 id="description1">Group cohesion is everything in projects. We evaluate users based on their personality type and generate a rating of how well they will work with one another.</h2>
  </div>
  <div class="imageContainer">
    <img src={Hiwtest} alt="How it Works" id="hiwImg"/>
    <div class="raffContainer">
      <h2 id="desc1"><a id="myersHyper" rel="noreferrer" target="_blank" href="https://www.16personalities.com/free-personality-test">Test.</a></h2>
      <h2 id="desc2">Pair.</h2>
      <h2 id="desc3">Work.</h2>
    </div>
  </div>
  <div class="ourTeamContainer">
    <div class="teamTitleContainer">
      <h2 id="teamTitle">Meet Our<span id="redTeam"> Team</span></h2>
  </div>
  <div id="sidescrollContainer">
    <a href="#" id="scrollItem1">JOSH PICTURE</a>
    <a href="#" id="scrollItem2">DOM PICTURE</a>
    <a href="#" id="scrollItem3">ANITA PICTURE</a>
    <a href="#" id="scrollItem4">MAG PICTURE</a>
   </div>
  </div>
  <div class="buttonContainer">
    <button>Get Started</button>
  </div>
</div>
);
}

//         <div class="descriptionContainer">
//         <h2>
//             Group cohesion is everything in projects. We get it. ProPairs evaluates users based on their personality type and generates a rating of how well they will work with one another. The website aims to help users find compatible project partners based on their personality traits.
//         </h2>
//         </div>
