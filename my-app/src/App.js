import React, { Component } from "react";
import PictureCard from "./components/PictureCard"
import Nav from "./components/Nav"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import pictures from "./pictures.json"
import './App.css';
import Container from "./Container"
import Row from "./Row"
import Column from "./Column"

function randomPicture(elements) {
  for (let i = elements.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return elements;
};

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    clickedPic: [],
    message: "Click an image to begin"
  }

  handleClick = id => {
    if (this.state.clickedPic.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clickedPic: this.state.clickedPic.concat(id) });
    } else {
      this.handleReset();
    }
  }
  
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: "You guessed correctly, you got a point."
    });
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore,
        message: "You guessed correctly, you got a high score."
      })
    }
    this.handleRandom();
  }
  
  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      message: "You guessed wrong, try again!",
      clickedPic : []
    });
    this.handleRandom();
  }
  
  handleRandom = () => {
    let randomPic = randomPicture(pictures);
    this.setState({ pictures: randomPic})
  }
  
  render() {
    return (
      <Wrapper>
        <Nav
          title = "Clicky Game"
          score = {this.state.score}
          topScore = {this.state.topScore}
          message = {this.state.message}
        />
  
        <Title>
          Click on an image to earn points, but do not click on any more than once!
        </Title>
        <Container>
          <Row>
            {this.state.pictures.map(picture => (
              <Column size = "md-3 sm-6">
                <PictureCard
                  key = {picture.id}
                  handleClick = {this.handleClick}
                  handleIncrement = {this.handleIncrement}
                  handleReset = {this.handleReset}
                  handleRandom = {this.handleRandom}
                  id = {picture.id}
                  image = {picture.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    )
  }
}



// clickedPictures = prop => {
//   if(this.state.clickedPic.includes(props.id) === false) {
//     this.state.clickedPic.push(prop.id);
//     this.setState({
//       score: this.state.score + 1,
//     });
//     if(this.state.score >= this.state.topScore) {
//       this.state((prevState) => ({
//         topScore: prevState.score,
//         message: "You guessed correctly, you got a point."
//       }));
//     }
//   }
//   else {
//     this.setState({
//       score: 0,
//       clickedPic: [],
//       message: "You guessed wrong, try again."
//     })
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
