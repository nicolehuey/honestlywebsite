import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import mainLayout from "./mainLayout.js";
import './Team.css'
import nicole from "./img/nicole.png"
import alexa from "./img/alexa.png"
import Image from 'react-bootstrap/Image'


class Team extends Component {


    submitfeedback(){
      const url = 'https://forms.gle/JmZPNgm5pLA4VY75A';
      window.open(url, '_blank');
    }
    
  render() {
    return (
      <div>
      <div className = "previewdesc">
      <h2 className = 'previewtitle' style={{ textDecoration: 'underline black' ,fontStyle:'oblique'}}> behind honestly. </h2>
      </div>
      <div className = 'team'>
        <Image src={nicole} fluid className='imagecover'/>
        <Image src={alexa} fluid className='imagecover'/>
      </div>
      <button className = "feedback-button" onClick={this.submitfeedback}>FEEDBACK US</button>
      </div>
    );
  }
}

export default mainLayout(Team);
