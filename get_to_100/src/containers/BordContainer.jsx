import React, { Component } from "react";
import BoardComponent from "../components/BoardComponent";


/**
 * @property disabled
 * @property onStep
 * @property playerNmae
 */
class Board extends Component{
    state={
        n: 0,
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
        if (n === 100) {
            this.props.handleEndGame()
            return;
        }
        this.setState({n, steps});
        this.props.onStep();
    }

    handleReset = () => {
        this.setState({n: 0, steps: 0, status:'playing'})
    }

    
    render(){
        return (<BoardComponent 
                disabled={this.props.disabled}
                playerName={this.props.playerName}
                handleAdd={() => this.handleStep('add')}
                handleSub={() => this.handleStep('sub')}
                handleMult={() => this.handleStep('mult')}
                handleDiv={() => this.handleStep('div')}
                handleReset={(this.handleReset)}
                {...this.state}/>); 
    }
}

export default Board;