import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import basicq from "./db/basicq.js"
import "./GamePreview.css"
import mainLayout from "./mainLayout.js";

class GamePreview extends Component {

  render() {
    return (
      <div>
      <div className = "previewdesc">
        <h2 className = 'previewtitle' style={{ textDecoration: 'underline black' }}> pick a set that suits you best! </h2>
      </div>
      <div className = "level">
        <h3> conversations starter, perceptive, thoughtful </h3>
        <h3> just starting to get to know someone better </h3>
        <Link to="/Lite">
        <button className = "play-button">LITE</button>
        </Link>
      </div>
      <div className = "level">
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
