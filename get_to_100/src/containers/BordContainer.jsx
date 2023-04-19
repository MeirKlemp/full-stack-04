import React, { Component } from "react";
import BoardComponent from "../components/BoardComponent";


/**
 * @property disabled
 * @property onStep
 * @property playerNmae
 * @property handleEndGame
 * @property handleLeave
 */
class Board extends Component{
    state={
        n: 50,
        steps: 0,
        status: 'playing'
    };

    handleStep = (type) => {
        let n = this.state.n;
        let steps = this.state.steps + 1
        switch (type) {
            case 'add':
                n += 1
                break;
            case 'sub':
                n -= 1
                break;
            case 'mult':
                n <<= 1
                break;
            case 'div':
                n >>= 1
                break;
            default:
                break;
        }
        
        this.setState({n, steps});
        if (n === 100) {
            this.handleEndGame(this.props.playerName, steps);
            return;
        }
        this.props.onStep();
    }

    handleEndGame = () => {
        this.setState({status: 'end_game'});
        this.props.handleEndGame(this.props.playerName, this.state.steps);
    }

    handleRestart = () => {
        this.setState({n: 0, steps: 0, status:'playing'});
        this.props.onStep();
    }

    handleLeave = () => {
        this.props.handleLeave(this.props.playerName);
    }
    
    render(){
        return (<BoardComponent 
                disabled={this.props.disabled}
                playerName={this.props.playerName}
                handleAdd={() => this.handleStep('add')}
                handleSub={() => this.handleStep('sub')}
                handleMult={() => this.handleStep('mult')}
                handleDiv={() => this.handleStep('div')}
                handleRestart={(this.handleRestart)}
                handleLeave={(this.handleLeave)}
                {...this.state}/>); 
    }
}

export default Board;