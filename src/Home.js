import React, { Component } from "react";
import "./Home.css";
import lines from './img/lines.png'
import { Link } from "react-router-dom";
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
// get our fontawesome imports
import '../node_modules/font-awesome/css/font-awesome.min.css';

const items = [
<SidebarItem>
    <Link to="/Play" className ="link" >
    Home
    </Link>
</SidebarItem>,
<SidebarItem>
  <Link to="/Play" className ="link" >
  Play
  </Link>
</SidebarItem>,
<SidebarItem>
  <Link to="/" className ="link" >
  Team
  </Link>
</SidebarItem>,
];

class Home extends Component{


  render(){
    return(
      <div>
          <h1 className='title'> honestly.
          <div className='icons'>
          <Link to="/" className='link'>
            <i class="fa fa-home" id='home'></i>
          </Link>
          <Link to="/Play" className='link'>
            <i class="fa fa-magnet" id = 'game'></i>
          </Link>
          <Link to="/" className='link'>
            <i class="fa fa-users" id = 'team'></i>
          </Link>
          </div>
          </h1>

          <div className ='textblock'>
            <div className = "description">
              <h2 className="desctext"> honest conversations. </h2>
              <h2 className="desctext"> deeper relationships. </h2>
              <h2 className="desctext"> real connections. </h2>
            </div>
          <Link to="/Play">
          <button className = "playbutton">Play</button>
          </Link>
          </div>

      </div>
    );
  }
}

export default Home;
