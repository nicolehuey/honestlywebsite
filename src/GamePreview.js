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
        <h2 className = 'previewtitle'> call a friend. grab a coffee. start playing! </h2>
      </div>

      </div>
    );
  }
}

export default mainLayout(GamePreview);
