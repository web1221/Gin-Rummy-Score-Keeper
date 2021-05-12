import React, {useEffect, useState} from 'react';
import { Container, Table} from 'react-bootstrap';
import styles from '../styles/ScoreBoard.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function ScoreBoard(props) {
    const [roundAndScoreObj, setRoundAndScoreObj] = useState([])
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

    const addRoundsAndPoints = () => {
        // Need to find way to push up correct round 
        // How do we make the round increase? 
        // Do you need to add a round state? 
        // round, setRound = useState(0) round + 1 every time this runs.
        // might think of adding addTotalScore to this function too? 
        roundAndScoreObj.push({round: 3, score1: 10, score2: 40})
    }

    const addTotalScore = () => {
         props.setPlayer1TotalScore(testArray.reduce((accum,item) => accum + item.score1, 0))
         props.setPlayer2TotalScore(testArray.reduce((accum,item) => accum + item.score2, 0))
    }

    return (
      <div>
          <Container>
              <div className={styles.header}>
                <h1>Score Board</h1>
              </div>
            <Table striped bordered variant="dark" size="lg">
                <thead className={styles.tableHeader} key={30}>
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
