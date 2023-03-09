import React from "react";
import '../styles/Home.css';
import Hiwtest from '../styles/howitworksmock3.png';
import { Link } from 'react-scroll';

export default function Homepage(props) {
  return (    
<div class="main-container">
  <div class="homepageNav">
    <Link to="raffContainer" smooth={true} duration={1000}>How it Works</Link>
    <Link to="ourTeamContainer" smooth={true} duration={1000}>Our Team</Link>
    <a href="/signup" id="getStartedNav">Get Started</a>
  </div>
  <div id="menu">
    <div id="menu-items">
    <Link to="descriptionContainer" smooth={true} duration={1000} className="menu-item"><div id='big-title'>ProPairs</div></Link>
  <Link to="raffContainer" smooth={true} duration={1000} className="menu-item"><div>How it Works</div></Link>
  <Link to="ourTeamContainer" smooth={true} duration={1000} className="menu-item"><div>Our Team</div></Link>
      <a href="/signup" id="getStarted" class="menu-item"><div>
        Get Started
        </div></a>
    </div>
    <div id="menu-background-image"></div>
  </div>	
  <div id="descriptionContainer" class="descriptionContainer1">
  <h1 id="title1">We get it.</h1>
    <h2 id="description1">Group cohesion is everything in projects. We evaluate users based on their personality type and generate a rating of how well they will work with one another.</h2>
  </div>
  <div id="imageContainer" class="imageContainer">
    <img src={Hiwtest} alt="How it Works" id="hiwImg"/>
    <div id="raffContainer" class="raffContainer">
      <div class="testBox1">
      <h2 id="desc1">Test.</h2>
      <p id="testDescription">Take an <a id="myersHyper" rel="noreferrer" target="_blank" href="https://www.16personalities.com/free-personality-test">MBTI personality test</a> to discover your MBTI personality type.</p>
      </div>
      <div class="pairBox1">
      <h2 id="desc2">Pair.</h2>
      <p id="pairDescription">Search by pair name, personality type, or email.</p>
      </div>
      <div class="workBox1">
      <h2 id="desc3">Work.</h2>
      <p id="workDescription">Get your work compatibility rating, join a team, and work better. All in one place.</p>
      </div>
    </div>
  </div>
  <div class="ourTeamContainer">
    <div id="teamTitleContainer" class="teamTitleContainer">
      <h2 id="teamTitle">Meet Our<span id="redTeam"> Team</span></h2>
  </div>
  <div id="sidescrollContainer">
    <a href="#" id="scrollItem1">JOSH PICTURE</a>
    <a href="#" id="scrollItem2">DOM PICTURE</a>
    <a href="#" id="scrollItem3">ANITA PICTURE</a>
    <a href="#" id="scrollItem4">MAG PICTURE</a>
   </div>
  </div>
  <div class="startedContainer">
  <a href="/signup" class="getStarted" id="getStarted1"><div>
        Get Started
        </div></a>
  </div>
</div>
);
}

//         <div class="descriptionContainer">
//         <h2>
//             Group cohesion is everything in projects. We get it. ProPairs evaluates users based on their personality type and generates a rating of how well they will work with one another. The website aims to help users find compatible project partners based on their personality traits.
//         </h2>
//         </div>
