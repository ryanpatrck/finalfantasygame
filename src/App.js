import React, { Component } from "react";
import "./App.css";
import fighters from "./fighters.json";
import Wrapper from "./components/Wrapper";
import Nav from './components/Nav'
import Title from "./components/Title";
import FighterCard from "./components/FighterCard";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    fighters: fighters,
    unselectedFighters: fighters
  };

  componentDidMount() {

  }
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


  selectFighter = fighter => {
    const findFighter = this.state.unselectedFighters.find(item => item.fighter === fighter)
    if(findFighter === undefined) {
      // failure to select a new fighter
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        fighters: fighters,
        unselectedFighters: fighters
      })
  } 
  else {
    // success to select a new fighter
    const newFighters = this.state.unselectedFighters.filter(item => item.fighter !== fighter)

    this.setState({
      message: "You guessed correctly!",
      curScore: this.state.curScore + 1,
      fighters: fighters,
      unselectedFighters: newFighters
    })
  }
  this.shuffleArray(fighters)
  }
  
// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
       <Nav
        message={this.state.message}
        curScore={this.state.curScore}
        topScore={this.state.topScore}
        />
        <Title />
        {
                    this.state.fighters.map(player => (
                        <FighterCard
                            fighter={player.fighter}
                            image={player.image}
                            selectFighter={this.selectFighter} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
      </Wrapper>
    );
  }
}

export default App;
