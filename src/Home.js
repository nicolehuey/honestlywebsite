import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import mainLayout from "./mainLayout.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import about from "./img/people.png"
import main from "./img/main.png"
import Image from 'react-bootstrap/Image'

class Home extends Component{

  render(){
    return(
      <div>
        <body>
          <div className ='textblock'>
            <div className = "description">
              <h2 className="desctext"> honest conversations. </h2>
              <h2 className="desctext"> deeper relationships. </h2>
              <h2 className="desctext"> real connections. </h2>
            <Link to="/Level">
            <button className = "playbutton">Play</button>
            </Link>
            </div>
          </div>
          <Image src={about} fluid className='imagecover'/>
        </body>
      </div>
    );
  }
}

export default mainLayout(Home);
