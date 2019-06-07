import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

// function randomPicture(elements) {

// }

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    clickedPic: [],
    message: "Click an image to begin"
  }
}

clickedPictures = prop => {
  if(this.state.clickedPic.includes(props.id) === false) {
    this.state.clickedPic.push(prop.id);
    this.setState({
      score: this.state.score + 1,
    });
    if(this.state.score >= this.state.topScore) {
      this.state((prevState) => ({
        topScore: prevState.score,
        message: "You guessed correctly, you got a point."
      }));
    }
  }
  else {
    this.setState({
      score: 0,
      clickedPic: [],
      message: "You guessed wrong, try again."
    })
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
