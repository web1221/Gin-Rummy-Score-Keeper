import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/StartPage.module.css'
import Link from 'next/link'

export default function StartPage() {
    let [player1Name, setPlayer1Name] = useState('')
    let [player2Name, setPlayer2Name] = useState('')
    return (
      <div className={styles.container}>
        <header><h1>Welcome to the Gin Rummy Counter!</h1></header>
        <section>
            <h3>Enter the Names of Players</h3>
            <form className={styles.formContainer}>
                <label className={styles.label}>
                    Player 1:
                    <input type="text" name="name" />
                </label>
                <label className={styles.label}>
                    Player 2:
                    <input type="text" name="name" />
                </label>
                <button type='submit'><Link href="/CounterPage">Let Play!</Link></button>
            </form>
        </section>
      </div>
    );
  }