import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/StartPage.module.css'
import Link from 'next/link'
import NameForms from './NameForms'
import ScoreBoard from './ScoreBoard'

export default function StartPage() {
    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')
    const [roundScore, setRoundScore] = useState([])
    const [player1TotalScore, setPlayer1TotalScore] = useState(0)
    const [player2TotalScore, setPlayer2TotalScore] = useState(0)
    const [showNameInputs, setShowNameInputs] = useState(true)

    return (
      <div className={styles.container}>
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
            />
          }
      </div>
    );
  }