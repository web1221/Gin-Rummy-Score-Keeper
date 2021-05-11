import React, {useEffect} from 'react';
import { Container, Table} from 'react-bootstrap';

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
        },
        {
            round: 4,
            score1: 65,
            score2: 100
        }
    ]
    useEffect(() => {
        addTotalScore()
    }, [props.player1TotalScore])

    const addTotalScore = () => {
         props.setPlayer1TotalScore(testArray.reduce((accum,item) => accum + item.score1, 0))
         props.setPlayer2TotalScore(testArray.reduce((accum,item) => accum + item.score2, 0))
    }
    return (
      <div>
          <Container>
              <div >
                <h1>Score Board</h1>
              </div>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                    <th>Round</th>
                    <th>{props.player1Name}</th>
                    <th>{props.player2Name}</th>
                    </tr>
                </thead>
       
                <tbody>
                {testArray.map((score) => {
                        return (
                            <>
                                <tr key={score.round}>
                                <td>{score.round}</td>
                                <td>{score.score1}</td>
                                <td>{score.score2}</td>
                                </tr>
                             </>
                        )
                    })}
                    <tr>
                        <td>
                            Total
                        </td>
                        <td>
                            {props.player1TotalScore}
                        </td>
                        <td>
                            {props.player2TotalScore}
                        </td>
                    </tr>
                    </tbody>

            </Table>
          </Container>
      </div>
    );
  }

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }
