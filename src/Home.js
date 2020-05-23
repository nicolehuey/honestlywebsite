import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import mainLayout from "./mainLayout.js";
import about from "./img/desc.png"
import main from "./img/main2.png"
import Image from 'react-bootstrap/Image'
import './font-awesome/css/font-awesome.min.css';

class Home extends Component{

  render(){
    return(
      <div>
        <div>
        <Image src={main} fluid className='imagecover'/>
        </div>
        <div className='play-div'>
        <Link to="/Level" className='link'>
          <button className = "playbutton">PLAY</button>
        </Link>
        </div>
        <Image src={about} fluid className='imagecover'/>
        </div>
    );
  }
}

export default mainLayout(Home);
