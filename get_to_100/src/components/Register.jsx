import React, { Component } from "react";
import { Container, Button, Card } from 'react-bootstrap';

/**
 * simple form to enter new player ditails
 * @property handleRegister
 * @property handleDoneRegistering
 */
class Register extends Component{ // no need for container-component pattern - to simple
    state = {
        name: '',
        error: '',
        nPlayers: 0
    }

    handleRegister = () => {
        let error = this.props.handleAddPlayer(this.state.name);
        if (error === ''){
            this.state.nPlayers += 1
            this.setState({error: error, name: ''})
        }
        else{
            this.setState({error: error})
        }
    }

    handleDoneRegistering = () => {
        if (this.state.nPlayers === 0){
            this.setState({error: 'no players added! please register alist one player'})
        }
        else{
            this.props.handleDoneRegistering();
        }
    }

    render(){
        return (
        <Card className="text-center mt-5">
            <Card.Title>enter name</Card.Title>
            <Card.Body>
                <input 
                    type='text'
                    value={this.state.name}
                    onChange={(event)=>this.setState({name: event.target.value})}/>
                <Button onClick={this.handleRegister}>insert</Button>
                <Button onClick={this.handleDoneRegistering}>continue to game</Button>
            </Card.Body>
            {this.state.error !== '' && (<Card.Text>{this.state.error}</Card.Text>)}
        </Card>);
    }
    
}

export default Register;