import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ScoreBoard(props) {
    return (
      <div>
          {/* <h1>{props.player1Name}</h1>
          <h1>{props.player2Name}</h1> */}
          <Container>
            <Row>
                <Col>{props.player1Name}</Col>
                <Col>{props.player2Name}</Col>
            </Row>
          </Container>
      </div>
    );
  }