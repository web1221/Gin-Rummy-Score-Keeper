import React, { useState, useEffect } from "react";
import NameForms from "./NameForms";
import ScoreBoard from "./ScoreBoard";

export default function StartPage() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player3Name, setPlayer3Name] = useState("");
  const [player1TotalScore, setPlayer1TotalScore] = useState(0);
  const [player2TotalScore, setPlayer2TotalScore] = useState(0);
  const [player3TotalScore, setPlayer3TotalScore] = useState(0);
  const [showNameInputs, setShowNameInputs] = useState(true);

  useEffect(() => {
    getSavedScores();
  }, []);
  const getSavedScores = () => {
    const savedScores = localStorage.getItem("gameScores");
    if (savedScores === null) {
      return;
    } else {
      setShowNameInputs(false);
    }
  };

  return (
    <div>
      {showNameInputs && (
        <NameForms
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
          setPlayer3Name={setPlayer3Name}
          player1Name={player1Name}
          player2Name={player2Name}
          player3Name={player3Name}
          setShowNameInputs={setShowNameInputs}
        />
      )}
      {!showNameInputs && (
        <ScoreBoard
          player1Name={player1Name}
          player2Name={player2Name}
          player3Name={player3Name}
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
          player1TotalScore={player1TotalScore}
          player2TotalScore={player2TotalScore}
          player3TotalScore={player3TotalScore}
          setPlayer1TotalScore={setPlayer1TotalScore}
          setPlayer2TotalScore={setPlayer2TotalScore}
          setPlayer3TotalScore={setPlayer3TotalScore}
        />
      )}
    </div>
  );
}
