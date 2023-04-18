import './App.css';
import React from 'react';
import Register from './components/Register';
import { Component } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import GameLauncher from './containers/GameLauncherContainer';

class App extends Component{
  state = {
    status: 'registering',
    players: [],
  }

  handleAddPlayer = (name) => {
    let errors=this.state.errors;
    if (this.state.players.find((p) => p === name) === name){
      return 'name already exist! please insert a diffrent name';
    }
    let players = this.state.players;
    players.push(name);
    this.setState({players});
    return '';
  }

  handleRemovePlayer = (name) => {
    let players = this.players.filter(name);
    this.setState({players});
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
            <GameLauncher
            players={this.state.players}/>}
      </Container>);
    }
}

export default App;
