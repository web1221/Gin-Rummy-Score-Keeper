import React, {useState, useEffect} from 'react';
import NameForms from './NameForms'
import ScoreBoard from './ScoreBoard'

export default function StartPage() {
    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')
    const [player1TotalScore, setPlayer1TotalScore] = useState(0)
    const [player2TotalScore, setPlayer2TotalScore] = useState(0)
    const [showNameInputs, setShowNameInputs] = useState(true)

    useEffect(() => {
      getSavedScores()
    }, [])
    const getSavedScores = () => {
      const savedScores = localStorage.getItem("gameScores");
      if (savedScores === null){
          return
      } else {
        setShowNameInputs(false);
      }
  }

    return (
      <div>
        {showNameInputs && 
            <NameForms 
                setPlayer1Name={setPlayer1Name} 
                setPlayer2Name={setPlayer2Name}
                player1Name={player1Name}
                player2Name={player2Name}
                setShowNameInputs={setShowNameInputs}
            />
          }
          {!showNameInputs && 
            <ScoreBoard 
                player1Name={player1Name}
                player2Name={player2Name}
                setPlayer1Name={setPlayer1Name}
                setPlayer2Name={setPlayer2Name}
                player1TotalScore={player1TotalScore}
                player2TotalScore={player2TotalScore}
                setPlayer1TotalScore={setPlayer1TotalScore}
                setPlayer2TotalScore={setPlayer2TotalScore}
            />
          }
      </div>
    );
  }