import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/StartPage.module.css'
import Link from 'next/link'

export default function NameForms(props) {
    const onSubmit = (event) => {
        event.preventDefault()
        props.setShowNameInputs(false)
    }
    return (
      <div className={styles.container}>
        <header><h1>Welcome to the Gin Rummy Counter!</h1></header>
        <section>
            <h3>Enter the Names of Players</h3>
            <form className={styles.formContainer}>
                <label className={styles.label}>
                    Player 1:
                    <input type="text" name="name" onChange={(event) => props.setPlayer1Name(event.target.value)}/>
                </label>
                <label className={styles.label}>
                    Player 2:
                    <input onChange={(event) => props.setPlayer2Name(event.target.value)} type="text" name="name" />
                </label>
                <button onClick={onSubmit} type='submit'>Let Play!</button>
            </form>
        </section>
      </div>
    );
  }