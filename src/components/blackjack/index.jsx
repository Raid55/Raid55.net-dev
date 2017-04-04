import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Button, Well, Col, Row, Grid } from 'react-bootstrap';
import styles from './styles.js';
import Game from './game.jsx';


export default class extends Component {
  state = {
    gameStart: false
  }

  handleButton = () => {
    this.setState({
      gameStart: true
    })
  }

  render() {
    return(
      this.state.gameStart === true ?
      <Game />
      :
      <Grid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Well style={styles.welcomeWell}>
              <h3>Welcome to Blackjack</h3>
              <p>This is the first version of a blackjack game writen to work with react states</p>
              <Button onClick={this.handleButton}>
                Click here to generate a deck
              </Button>
            </Well>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Grid>
    )
  }
}
