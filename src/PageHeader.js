import React, { Component } from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import "./Home.css"
class PageHeader extends Component {
  render() {
    return (
      <div>

          <h1 className='title'> <Link to="/" className="link">honestly.
    </Link>
          <div className='icons'>
          <Link to="/" className='link'>
            <i class="fa fa-home" id='home'></i>
          </Link>
          <Link to="/Level" className='link'>
            <i class="fa fa-magnet" id = 'game'></i>
          </Link>
          <Link to="/Team" className='link'>
            <i class="fa fa-users" id = 'team'></i>
          </Link>
          </div>
          </h1>
      </div>
    );
  }
}
export default PageHeader;
