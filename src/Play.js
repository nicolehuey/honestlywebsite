import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import basicq from "./db/basicq.js"
import { slide as Menu } from 'react-burger-menu'

class Play extends Component {
  state = {
    dataQuestion:[]
  };

  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 0.3,
      justifyContent: "center",
      borderColor: '#FFFF00',
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "420px",
      width: "350px",
      paddingTop: "100px",
      paddingBottom: "80px",
      paddingLeft: "100px",
      paddingRight: "100px",
      textAlign: "center",
      color: "#000000",
      background: "#FFFF00",
      fontFamily: "avenir-black",
      fontSize: "30px",
      borderRadius: "10px",
      borderColor: 'red',
      boxSizing: "border-box"
    };
  }

  setStatefunction = () => {
    //  use reactjs setState
    this.setState({
      dataQuestion: basicq
    });
  };


  componentDidMount() {
    this.setStatefunction();
  }

  render() {
    return (
      <div>
      <Link to="/" className="link">
      <h1 className='title' style = {{'textDecoration': 'none'}}> honestly. </h1>
      </Link>
      <div style={Play.CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
      {this.state.dataQuestion.map(data => {
        return(
          <div style={Play.CARD_STYLE}>{data.question}</div>
        );
      })}
      </ReactCardCarousel>
      </div>

      </div>
    );
  }
}

export default Play;
