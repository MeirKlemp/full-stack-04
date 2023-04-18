import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BoardComponent(props) {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">{props.playerName}</h1>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Current Number:</Card.Title>
          <Card.Text>{props.n}</Card.Text>
          {props.status === 'playing' && (
            <>
              <Button variant="primary" className="me-2" disabled={props.disabled} onClick={props.handleAdd}>
                Add 1
              </Button>
              <Button variant="primary" className="me-2" disabled={props.disabled} onClick={props.handleSub}>
                Subtract 1
              </Button>
              <Button variant="primary" className="me-2" disabled={props.disabled} onClick={props.handleMult}>
                Multiply by 2
              </Button>
              <Button variant="primary" className="me-2" disabled={props.disabled} onClick={props.handleDiv}>
                Divide by 2
              </Button>
            </>
          )}
          {props.status === 'win' && (
            <Card.Text className="text-success">You won in {props.steps} moves!</Card.Text>
          )}
          {props.status === 'lose' && (
            <Card.Text className="text-danger">You lost. Try again!</Card.Text>
          )}
        </Card.Body>
      </Card>
      {/* <div className="text-center mt-3">
        <Button variant="secondary" onClick={props.handleReset}>
          Restart
        </Button>
      </div> */}
    </Container>
  );
}

export default BoardComponent;
