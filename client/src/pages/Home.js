import React from "react";
import '../styles/Home.css';
import Hiwtest from '../styles/howitworksmock3.png';
import Head from '../styles/head.png'
import Profile from '../styles/Profile.png'
import Puzzle from '../styles/Puzzle.png'
import { Link } from 'react-scroll';
import { Avatar } from "@mui/material";
import anitaFace from '../styles/assets/teampics/AnitaFace.jpg';
import domFace from '../styles/assets/teampics/DomFace.jpeg';
import jerHair from '../styles/assets/teampics/JerHair.jpg';
import joshFace from '../styles/assets/teampics/JoshFace.jpg';
import magFace from '../styles/assets/teampics/MagFace.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Homepage() {
  AOS.init();

  const navigate = useNavigate();
  //redirect the user to signup page when they click "Get Started"
  const handleGetStarted = () => {
    navigate("/")
  }


  return (
    <div className="main-container">
      <div data-aos="zoom-in" data-aos-duration="700" id="menu">
        <div data-aos="zoom-in" data-aos-delay="700" id="menu-items">
          <Link to="descriptionContainer" smooth={true} duration={1000} className="menu-item"><div id='big-title'>ProPairs</div></Link>
          <Link to="raffContainer" smooth={true} duration={1000} className="menu-item"><div>How it Works</div></Link>
          <Link to="ourTeamContainer" smooth={true} duration={1000} className="menu-item"><div>Our Team</div></Link>
          <Link to="/" id="getStarted" className="menu-item" onClick={handleGetStarted}>
            <div>Get Started</div>
          </Link>
        </div>
        <div id="menu-background-image"></div>
      </div>
      <div id="descriptionContainer" className="descriptionContainer1">
        <div data-aos="slide-right" data-aos-duration="700" id="homeTitleContainer"><h1 id="title1">We get it.</h1></div>
        <div data-aos="slide-left" data-aos-duration="700" id="homeDescContainer"><h2 id="description1">Group cohesion is everything in projects. We evaluate users based on their personality type and generate a rating of how well they will work with one another.</h2></div>
      </div>
      {/* <div id="imageContainer" className="imageContainer"> */}
      <div id="raffContainer" className="raffContainer">
        <img src={Head} alt="How it Works" id="hiwImg" />
        <div data-aos="slide-left" data-aos-duration="700" className="testBox1">
          <h2 id="desc1">Test.</h2>
          <p id="testDescription">Take an <a id="myersHyper" rel="noreferrer" target="_blank" href="https://www.16personalities.com/free-personality-test">MBTI personality test</a> to discover your MBTI personality type.</p>
        </div>
      </div><div id="raffContainer" className="raffContainer">
        <img src={Profile} alt="How it Works" id="hiwImg" />
        <div data-aos="slide-left" data-aos-duration="700" className="pairBox1">
          <h2 id="desc2">Pair.</h2>
          <p id="pairDescription">Search by pair name, personality type, or email.</p>
        </div></div>
      <div id="raffContainer" className="raffContainer">
        <img src={Puzzle} alt="How it Works" id="hiwImg" />
        <div data-aos="slide-left" data-aos-duration="700" className="workBox1">
          <h2 id="desc3">Work.</h2>
          <p id="workDescription">Get your work compatibility rating, join a team, and work better. All in one place.</p>
        </div>
      </div>
      {/* </div> */}
      <div className="ourTeamContainer">
        <div id="teamTitleContainer" className="teamTitleContainer">
          <h2 data-aos="slide-left" data-aos-duration="700" id="teamTitle">Meet Our<span id="redTeam"> Team</span></h2>
        </div>
        <div id="sidescrollContainer">
        <a href="https://www.linkedin.com/in/joshuagoeke/" target="_blank" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200" className="creator-box" >
          
            <Avatar className="creator-avatar"
              src={joshFace}
              sx={{ width: 112, height: 112 }}>
              JG
            </Avatar>
            
            <h2 className="creator-name">Josh Goeke</h2>
            <p className="creator-type">ENTP</p>
          </a>
          
          <a href="https://www.linkedin.com/in/dominique-nix-152361263/" target="_blank" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400" className="creator-box">
            <Avatar className="creator-avatar"
              src={domFace}
              sx={{ width: 112, height: 112 }}>
              DN
            </Avatar>
            
            <h2 className="creator-name">Dominique Nix</h2>
            <p className="creator-type">INTJ</p>
          </a>
          
          <a href="https://www.linkedin.com/in/anitabanh/" target="_blank" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600" className="creator-box">
            <Avatar className="creator-avatar"
              src={anitaFace}
              sx={{ width: 112, height: 112 }}>
              AB
            </Avatar>
            
            <h2 className="creator-name">Anita Banh</h2>
            <p className="creator-type">ISTP</p>
          </a>
          
          <a href="https://www.linkedin.com/in/jcrouthamel05/" target="_blank" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="800" className="creator-box">
            <Avatar className="creator-avatar"
              src={jerHair}
              sx={{ width: 112, height: 112 }}>
              JC
            </Avatar>
            
            <h2 className="creator-name">Jeremy Crouthamel</h2>
            <p className="creator-type">INFP</p>
          </a>
          <a href="https://www.linkedin.com/in/mzernick/" target="_blank" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="creator-box">
            <Avatar className="creator-avatar"
              src={magFace}
              sx={{ width: 112, height: 112 }}>
              MZ
            </Avatar>
            
            <h2 className="creator-name">Magdalene Zernick</h2>
            <p className="creator-type">ENFJ</p>
            
          </a>
        </div>
      </div>
      <div className="startedContainer">
        <Link to="/" className="getStarted" id="getStarted1" onClick={handleGetStarted}><div>
          Get Started
        </div></Link>
      </div>
    </div>
  );
}


