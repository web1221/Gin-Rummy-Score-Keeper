import React, { useEffect, useState } from "react";
import { Container, Table, Form, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/ScoreBoard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ScoreBoard(props) {
  const [round, setRound] = useState(1);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [roundAndScore, setRoundAndScore] = useState([]);

  useEffect(() => {
    getSavedScores();
  }, []);

  useEffect(() => {
    addTotalScore();
  }, [roundAndScore]);

  const getSavedScores = () => {
    const savedScores = JSON.parse(localStorage.getItem("gameScores"));
    if (savedScores === null) {
      return;
    } else {
      setRoundAndScore(savedScores);
    }
  };

  const saveGameScores = () => {
    localStorage.setItem("gameScores", JSON.stringify(roundAndScore));
  };

  const clearGame = () => {
    localStorage.clear();
    location.reload(false);
  };

  const onFormSubmit = () => {
    setRound(round + 1);
    // Need to find a way to store name on it's own
    roundAndScore.push({
      round: round,
      score1: score1,
      score2: score2,
      score3: score3,
    });
    document.getElementById("formId").reset();
    addTotalScore();
    saveGameScores();
  };

  const addTotalScore = () => {
    console.log(props.player1TotalScore);
    props.setPlayer1TotalScore(
      roundAndScore.reduce((accum, item) => accum + item.score1, 0)
    );
    props.setPlayer2TotalScore(
      roundAndScore.reduce((accum, item) => accum + item.score2, 0)
    );
    props.setPlayer3TotalScore(
      roundAndScore.reduce((accum, item) => accum + item.score3, 0)
    );
  };

  return (
    <div>
      <Container>
        <div className={styles.header}>
          <h1>Score Board</h1>
        </div>
        <div style={{ overflow: "scroll" }}>
          <Table striped bordered variant="dark" size="lg">
            <thead className={styles.tableHeader} key={30}>
              <tr>
                <th>Round</th>
                <th>{props.player1Name}</th>
                <th>{props.player2Name}</th>
                <th>{props.player3Name}</th>
              </tr>
            </thead>

            <tbody>
              {roundAndScore.map((score) => {
                return (
                  <>
                    <tr key={score.round}>
                      <td>{score.round}</td>
                      <td>{score.score1}</td>
                      <td>{score.score2}</td>
                      <td>{score.score3}</td>
                    </tr>
                  </>
                );
              })}
              <tr>
                <td>Total</td>
                <td>{props.player1TotalScore}</td>
                <td>{props.player2TotalScore}</td>
                <td>{props.player3TotalScore}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Form id="formId">
          <Form.Group className={styles.formGroup} as={Row}>
            <Form.Label className={styles.labelText} column sm="2">
              Enter {props.player1Name}'s Score
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(event) => setScore1(parseInt(event.target.value))}
                type="number"
                placeholder="Enter Score"
              />
            </Col>
          </Form.Group>
          <Form.Group className={styles.formGroup} as={Row}>
            <Form.Label className={styles.labelText} column sm="2">
              Enter {props.player2Name}'s Score
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(event) => setScore2(parseInt(event.target.value))}
                type="number"
                placeholder="Enter Score"
              />
            </Col>
          </Form.Group>
          <Form.Group className={styles.formGroup} as={Row}>
            <Form.Label className={styles.labelText} column sm="2">
              Enter {props.player3Name}'s Score
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(event) => setScore3(parseInt(event.target.value))}
                type="number"
                placeholder="Enter Score"
              />
            </Col>
          </Form.Group>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => onFormSubmit()}
              className={styles.buttonStyle}
              variant="primary"
            >
              Enter Score
            </Button>
            <Button
              onClick={clearGame}
              className={styles.buttonStyle}
              variant="primary"
            >
              Clear Game
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
};
