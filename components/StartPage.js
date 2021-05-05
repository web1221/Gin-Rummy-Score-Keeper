import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/StartPage.module.css'

export default function StartPage() {
    return (
      <div className={styles.container}>
        <header><h1>Welcome to the Gin Rummy Counter!</h1></header>
        <section>
            <h3>Enter the Names of Players</h3>
            <form className={styles.formContainer}>
                <label>
                    Player 1:
                    <input type="text" name="name" />
                </label>
                <label>
                    Player 2:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </section>
      </div>
    );
  }