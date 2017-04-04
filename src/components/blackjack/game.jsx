import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Button, Well, Col, Row, Grid } from 'react-bootstrap';
import styles from './styles.js';

const startState = {
  err: false,
  deckId: "",
  dealerInfo:{
    dealerCards: [],
    dealerScore: 0,
  },
  playerInfo:{
    chips: 100,
    playerCards: [],
    playerScore: 0,
  },
  gameInfo:{
    deckId: "",
    roundLost: false,
    roundTied: false,
    roundWon: false,
  },
  bettingInfo:{
    pot: 0,
    bettingAllowed:  false,
    bettingTime: 0
  }
}

export default class extends Component {
  state = startState

  hardReset = () => {
    this.setState(startState)
  }

  resetPlayingArea = () => {
    this.setState({
      dealerInfo:{
        dealerCards: [],
        dealerScore: 0,
      },
      playerInfo:{
        chips: this.state.playerInfo.chips,
        playerCards: [],
        playerScore: 0,
      },
      gameInfo:{
        roundLost: false,
        roundTied: false,
        roundWon: false,
      },
      bettingInfo:{
        pot: 0,
        bettingAllowed:  false,
        bettingTime: 0
      }
    })
  }

  checkIfCanBet = () => {
    return new Promise(function(resolve,reject){
      if(this.state.playerInfo.chips > 0){
        resolve(true)
      }else{
        reject(false)
      }
    })
  }

  bet = () => {
    const that = this
    return this.checkIfCanBet()
    .then( (r) => {
      that.setState({
        bettingInfo:{
          pot: this.state.bettingInfo.pot,
          bettingAllowed: true,
          bettingTime: 10
        }
      })
      setTimeout(()=>{
        that.setState({
          bettingInfo:{
            pot: this.state.bettingInfo.pot,
            bettingAllowed: false,
            bettingTime: 0
          }
        })
        return r
      }, this.state.bettingInfo.bettingTime)
    })
    .catch(function(err){
      console.log('no muneh', err);
      that.setState({
        err: true
      })
    })
  }

  newDeck = () => {
    const that = this
    this.hardReset()
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    .then(res => res.json())
    .then(function(res){
      console.log(res.deck_id);
      that.setState({
        deckId: res.deck_id
      })
    })
    .catch(function(err){
      console.log(err,'newdeck error');
      that.setState({
        err: true
      })
    })
  }

  newGame = () => {
    const that = this;
    const {gameInfo, dealerInfo, playerInfo, bettingInfo, deckId} = this.state
    this.resetPlayingArea()
    this.bet()
    .then(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
      .then(res => res.json())
      .then(function(res){
        let tempScore = this.computeScore([res.cards[1], res.cards[3]]);
        that.setState({
          dealerInfo:{
            dealerCards: [res.cards[0], res.cards[2]],
            dealerScore: "?",
          },
          playerInfo:{
            chips: playerInfo.chips,
            playerCards: [res.cards[1], res.cards[3]],
            playerScore: tempScore,
          },
          gameInfo:{
            roundLost: false,
            roundTied: false,
            roundWon: tempScore === 21 ? true : false
          }
        })
      })
      .catch(function(err){
        console.log(err,'newHAND');
        that.setState({
          err: true
        })
      })
    })
  }

  computeScore = (cards) => {
    let hasAce = false;
    let score = cards.reduce(function(accu,el,indx){
      if(el.value === '0' || el.value === 'JACK' || el.value === 'QUEEN' || el.value === 'KING'){
        accu += 10;
      }else if(el.value === 'ACE'){
        hasAce = true;
        accu += 1;
      }else{
        accu+= Number(el.value);
      }
      return accu
    },0)
    return (hasAce && score < 12) ? score + 10 : score;
  }

  componentWillMount(){
    this.newDeck()
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Well style={styles.gameWell}>
              <div style={styles.card}>

              </div>
              <div style={styles.card}>

              </div>
              <hr />
              <div style={styles.card}>

              </div>
              <div style={styles.card}>

              </div>
              <hr/>
                {this.state.deckId}
              <hr/>

            </Well>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Grid>
    )
  }
}
