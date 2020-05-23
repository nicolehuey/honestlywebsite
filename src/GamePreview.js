import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import basicq from "./db/basicq.js"
import "./GamePreview.css"
import mainLayout from "./mainLayout.js";
import boy from "./img/online-boy.png"
import girl from "./img/online-girl.png"
import Image from 'react-bootstrap/Image'

class GamePreview extends Component {

  componentDidMount() {
        window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div>
      <h2 > 1. HOW TO PLAY? </h2>
      <div className='explain'>
        <h3> we have compiled great questions for you to start your conversations with your friends or family</h3>
        <h3> to know them better, in a deeper level. </h3>
        <h3> simply pick a desired set of questions which suits you best, as easy as that! </h3>
      </div>
      <div className = "previewdesc">
        <h2 className = 'previewtitle'> 2. PICK A SET </h2>
      </div>
      <div className = "level">
        <Image src={boy} fluid className='boycover'/>
        <h3> conversations starter, perceptive, thoughtful </h3>
        <h3> just starting to get to know someone better </h3>
        <Link to="/Lite">
        <button className = "play-button">LITE</button>
        </Link>
      </div>
      <div className = "level">
        <Image src={girl} fluid className='girlcover'/>
        <h3> raw, soul-baring, emotions-provoking </h3>
        <h3> to know someone you already know, deeper </h3>
        <Link to="/Deep">
        <button className = "play-button">DEEP</button>
        </Link>
      </div>

      </div>
    );
  }
}

export default mainLayout(GamePreview);
