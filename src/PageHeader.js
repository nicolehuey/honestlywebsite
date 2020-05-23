import React, { Component } from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import "./Home.css"
import logo from "./img/logo.png"
import Image from 'react-bootstrap/Image'

class PageHeader extends Component {
  render() {
    return (
      <div>
        <div className = 'icon-container'>

          <h1 className='title'>
           <Link to="/" className="link">
           <Image src={logo} fluid id = 'logo'/>
            </Link>
          </h1>
          <div className='icons'>
          <Link to="/" className='link'>
            <i className="fa fa-home" id='home'></i>
          </Link>
          <Link to="/Level" className='link'>
            <i className="fa fa-magnet" id = 'game'></i>
          </Link>
          <Link to="/Team" className='link'>
            <i className="fa fa-users" id = 'team'></i>
          </Link>
          </div>
          </div>
      </div>
    );
  }
}
export default PageHeader;
