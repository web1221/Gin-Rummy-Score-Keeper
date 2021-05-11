import React, {useState} from 'react';
import styles from '../styles/NameForms.module.css'
import {Container, Form, Button, Row, Col} from 'react-bootstrap';


export default function NameForms(props) {
    const onSubmit = (event) => {
        event.preventDefault()
        props.setShowNameInputs(false)
    }
    return (
    <Container>
      <div className={styles.container}>
        <header><h1>Welcome to the Gin Rummy Counter!</h1></header>
            <h3>Enter the Names of Players</h3> 
            
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Player 1</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={(event) => props.setPlayer1Name(event.target.value)} type="text" placeholder="Enter name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Player 2</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={(event) => props.setPlayer2Name(event.target.value)} type="text" placeholder="Enter name" />
                    </Col>
                </Form.Group>
                <Button onClick={onSubmit} variant="primary" type="submit">
                    Let's Play!
                </Button>
            </Form>
            </div>
    </Container>
    );
  }