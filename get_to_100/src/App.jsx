import './App.css';
import React from 'react';
import Register from './components/Register';
import { Component } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import GameLauncher from './containers/GameLauncherContainer';
import Stats from './containers/StatsContainer'

class App extends Component{
  state = {
    status: 'registering',
    players: [],
  }

  handleAddPlayer = (name) => {
    if (this.state.players.find((p) => p.name === name) !== undefined){
      return 'name already exist! please insert a diffrent name';
    }
    let players = this.state.players;
    players.push({name, scores: []});
    this.setState({players});
    return '';
  }

  handleAddScore = (name, score) => {
    var players = this.state.players;
    players.find((p) => p.name === name).scores.push(score);
    this.setState({players});
  }
  
  handleRemovePlayer = (name) => {
    var players = this.state.players;
    players = players.filter(p => p.name !== name);
    var status = players.length > 0? 'game': 'registering';
    this.setState({players, status});
  }

  handleDoneRegistering = () => {
    this.setState({status: 'game'})
  }
  
  render(){
    return (
      <Container className='mt-5'>
          {this.state.status === 'registering' &&
           <Register
            handleAddPlayer={(name) => this.handleAddPlayer(name)}
            handleDoneRegistering={this.handleDoneRegistering}/>}
          {this.state.status === 'game' &&
          <div style={{display:'flex', flexDirection: 'column'}}>
            <div>
              <GameLauncher
              players={this.state.players.map(p => p.name)}
              handleAddScore={this.handleAddScore}
              handleLeave={this.handleRemovePlayer}/>
            </div>
            <div>
              <Stats
              players={this.state.players}/> 
            </div>
          </div>}
      </Container>);
    }
}

export default App;
