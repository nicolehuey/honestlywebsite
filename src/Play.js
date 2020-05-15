import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import basicq from "./db/basicq.js"
import mainLayout from "./mainLayout.js";
import "./Play.css"

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
      paddingTop: "80px",
      paddingBottom: "80px",
      paddingLeft: "80px",
      paddingRight: "80px",
      textAlign: "center",
      color: "black",
      background: "white",
      fontFamily: "avenir-medium",
      fontSize: "25px",
      borderRadius: "10px",
      borderColor: 'black',
      borderTopStyle:'solid',
      borderRightStyle:'solid',
      borderLeftStyle:'solid',
      borderBottomStyle:'solid',
      boxSizing: "border-box"
    };
  }



  setStatefunction = () => {
    //  use reactjs setState
    let shuffled = basicq.sort( () => Math.random() - 0.5)
    this.setState({
      dataQuestion: shuffled
    });
  };


  componentDidMount() {
    this.setStatefunction();
  }

  render() {
    return (
      <div>
      <div className = "previewdesc">
        <h2 className = 'previewtitle'> call a friend. grab a coffee. start your conversation! </h2>
      </div>
      <div style={Play.CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
      {this.state.dataQuestion.map(data => {
        return(
          <div style={Play.CARD_STYLE}>
          {data.question}
          <p id = 'name'> honestly. </p>
          </div>

        );
      })}
      </ReactCardCarousel>
      </div>

      </div>
    );
  }
}

export default mainLayout(Play);
