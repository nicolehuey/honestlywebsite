import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import mainLayout from "./mainLayout.js";
import './Team.css'

class Team extends Component {

  render() {
    return (
      <div>
      <div className = "previewdesc">
      <h2 className = 'previewtitle'> behind honestly. </h2>
      </div>
      <p className = 'team-name'> Nicole Tan </p>
      </div>
    );
  }
}

export default mainLayout(Team);
