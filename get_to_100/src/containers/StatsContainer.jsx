import React, { Component } from "react";
import { Container, Button, Card, Table } from 'react-bootstrap';

/**
 * @property players
 */
class Stats extends Component{
    state = {}

    constructor(props){
        super(props);
    }

    generateTable = (players) => {
        var table = [];
        for (let p of players){
            for (let s of p.scores){
                table.push([p.name, s])
            }
        }
        table.sort((a, b) => a[0] < b[0]);
        return table;
    }

    render(){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">Steps</th>
                    </tr>
                </thead>
                <tbody>
                    {this.generateTable(this.props.players).map((p, idx) => (
                        <tr key={p}>
                            <th scope="row">{idx+1}</th>
                            <td>{p[0]}</td>
                            <td>{p[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Stats;