import React, { Component,useState } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import deepq from "./db/deepq.js"
import mainLayout from "./mainLayout.js";
import "./Play.css"
import TinderCard from './react-tinder-card/index'

class Play extends Component {

  state = {
    dataQuestion:[],
  };


  setStatefunction = () => {
    //  use reactjs setState
    let shuffled = deepq.sort( () => Math.random() - 0.5)
    this.setState({
      dataQuestion: shuffled
    });
  };

  swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
  }

  outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  componentDidMount() {
    this.setStatefunction();
    window.scrollTo(0, 0);
  }

  submitfeedback(){
    const url = 'https://forms.gle/JmZPNgm5pLA4VY75A';
    window.open(url, '_blank');
  }

  render() {
    return (
      <div className='main-preview'>
      <div className = "previewdesc">
        <h2 className = 'previewtitle'>  take it slow. </h2>
        <h3> (disclaimer: emotions at your own risk) </h3>
      </div>
        <div className='cardContainer'>
          {this.state.dataQuestion.map((character) =>
            <TinderCard className='swipe' key={character.question} onSwipe={(dir) => this.swiped(dir, character.question)} onCardLeftScreen={() => this.outOfFrame(character.question)}>
              <div className='card' >
                <h3 className='ques'>{character.question}</h3>
                <h3 className = 'logoname'> honestly. </h3>
              </div>
            </TinderCard>
          )}
        </div>
        <button className = "feedback-button" onClick={this.submitfeedback}>FEEDBACK US</button>
      </div>
    );
  }
}

export default mainLayout(Play);
