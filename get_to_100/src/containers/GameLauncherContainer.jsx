import React, { Component, useState } from "react";
import { Container, Button, Card } from 'react-bootstrap';
import Board from "./BordContainer";


/**
 * @property players
 * @property handleAddScore(playerName, newScore)
 * @property handleLeave(playerName)
 */
class GameLauncher extends Component{
    state = {
        numOfGmaes: 0,
        enabledGame: 0
    }
    constructor(props){
        super(props);
        console.log(this.props.players)
    }

    handleStep = () => {
        let n = this.props.players.length;
        this.setState({enabledGame: (this.state.enabledGame+1) % n})
    }

    playerToBoard = (p) => {
        const pred = () => p !== this.props.players[this.state.enabledGame]
        return (
            <div key={p} id={p} style={{backgroundColor: !pred()? 'red': 'white'}}>
                <Board 
                    playerName={p}
                    disabled={pred()}
                    onStep={this.handleStep}
                    handleEndGame={this.handleEndGame}
                    handleLeave={this.handleLeave}/>
            </div>
        )
    }

    handleEndGame = (player, results) => {
        this.props.handleAddScore(player, results)
    }

    handleLeave = (player) => {
        //this.setState({boards: this.state.boards.filter((b) => b.id === player)});
        this.props.handleLeave(player);
        var n = this.props.players.length;
        this.setState({enabledGame: this.state.enabledGame%n})
    }

    render(){
        return(
            <Card>
                {this.props.players.map(this.playerToBoard)}
            </Card>
        )
    }
}

export default GameLauncher;