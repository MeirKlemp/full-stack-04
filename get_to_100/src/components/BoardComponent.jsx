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
              <Button variant="primary mt-5" className="me-2" disabled={props.disabled} onClick={props.handleAdd}>
                Add 1
              </Button>
              <Button variant="primary mt-5" className="me-2" disabled={props.disabled} onClick={props.handleSub}>
                Subtract 1
              </Button>
              <Button variant="primary mt-5" className="me-2" disabled={props.disabled} onClick={props.handleMult}>
                Multiply by 2
              </Button>
              <Button variant="primary mt-5" className="me-2" disabled={props.disabled} onClick={props.handleDiv}>
                Divide by 2
              </Button>
            </>
          )}
          {props.status === 'end_game' &&
          <>
            <Card.Text>you get to 100 with {props.steps} steps</Card.Text>
            <Button onClick={props.handleRestart} className='primary mt-5'>start a new game</Button>
            <Button onClick={props.handleLeave} className='primary mt-5'>leave</Button>
          </>}
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
