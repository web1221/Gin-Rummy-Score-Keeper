import React, {useState} from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function ScoreBoard(props) {
    let testArray = [
        {
            round: 1,
            score1: 10,
            score2: 12
        },
        {
            round: 2,
            score1: 50,
            score2: 30
        },
        {
            round: 3,
            score1: 30,
            score2: 100
        }
    ]
    return (
      <div>
          <Container>
              <div >
                <h1>Score Board</h1>
              </div>
            {/* <Row>
                <Col>
                    {props.player1Name}
                    {testArray.map((score) => {
                        return (
                            <div key={score.round} style={divStyle}>
                                <p>{score.round})</p>
                                <p style={{paddingRight: 10}}>{score.score1}</p>
                            </div>
                        )
                    })}
                    
                </Col>
                <Col>
                    {props.player2Name}
                    {testArray.map((score) => {
                        return (
                            <div key={score.round}>
                                <p>{score.score2}</p>
                            </div>
                        )
                    })}
                </Col>
            </Row> */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Round</th>
                    <th>{props.player1Name}</th>
                    <th>{props.player2Name}</th>
                    </tr>
                </thead>
       
                {testArray.map((score) => {
                        return (
                            <>
                           
                                     <tbody key={score.round}>
                                     <tr>
                                     <td>{score.round}</td>
                                     <td>{score.score1}</td>
                                     <td>{score.score2}</td>
                                     </tr>
                                 </tbody>
                             </>
                        )
                    })}
            </Table>
          </Container>
      </div>
    );
  }

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }
