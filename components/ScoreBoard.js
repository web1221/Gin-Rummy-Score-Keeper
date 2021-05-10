import React, {useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function ScoreBoard(props) {
    let testArray = [
        {
            round: 1,
            score1: 10,
        },
        {
            round: 2,
            score1: 50,
        },
        {
            round: 3,
            score1: 30,
        }
    ]
    return (
      <div>
          <Container>
              <div >
                <h1>Score Board</h1>
              </div>
            <Row>
                <Col>
                    {props.player1Name}
                    {testArray.map((score) => {
                        return (
                            <div key={score.round} style={divStyle}>
                                <p style={{paddingRight: 10}}>{score.round})</p>
                                <p>{score.score1}</p>
                            </div>
                        )
                    })}
                    
                </Col>
                <Col>{props.player2Name}</Col>
            </Row>
          </Container>
      </div>
    );
  }

  const divStyle = {
    display: 'flex',
    justifyContent: 'center'
  }
