import React, { Component } from "react";
import "./Home.css";
import lines from './img/lines.png'
class Home extends Component{

  render(){
    return(
      <div className="imageContainer">
        <img src={lines} className="backgroundImg"/>
        <div className ='textblock'>
          <h1 className='title'> honestly. </h1>
          <div className = "description">
            <h2 className="desctext"> honest conversations. </h2>
            <h2 className="desctext"> deeper relationships. </h2>
            <h2 className="desctext"> real connections. </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
