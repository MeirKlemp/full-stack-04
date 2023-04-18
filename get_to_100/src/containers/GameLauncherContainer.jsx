import React, { Component, useState } from "react";
import { Container, Button, Card } from 'react-bootstrap';
import Board from "./BordContainer";


/**
 * @property players
 */
class GameLauncher extends Component{
    state = {
        numOfGmaes: 0,
        enabledGame: 0
    }
    constructor(){
        super();
    }

    handleStep = () => {
        let n = this.props.players.length;
        this.setState({enabledGame: (this.state.enabledGame+1) % n})
    }
    playerToBoard = (p) => {
        const pred = () => p !== this.props.players[this.state.enabledGame]
        return (
            <div style={{backgroundColor: !pred()? 'red': 'white'}}>
                <Board 
                    playerName={p}
                    disabled={pred()}
                    onStep={this.handleStep}/>
            </div>
        )
    }
    render(){
        return(
            <Container>
                <Card>
                    {this.props.players.map(this.playerToBoard)}
                </Card>
                <Card>
                    <h1>stat</h1>
                </Card>
            </Container>
            
        )
    }
}

export default GameLauncher;