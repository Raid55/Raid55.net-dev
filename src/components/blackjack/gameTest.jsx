import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Button, Well, Col, Row, Grid } from 'react-bootstrap';
import styles from './styles.js';


const startState = {
  err: false,
  deckId: "",
  playerChips: 100,
  pot: 0,
  playerCards: [],
  playerScore: 0,
  dealerCards: [],
  dealerScore: 0,
  roundLost: false,
  roundTied: false,
  roundWon: false,
  bettingAllowed:  false,
  noMoney: false
}

export default class extends Component {
  state = startState

  hardReset = () => {
    this.setState(startState)
  }

  betAmount = (amount) => {
    const { pot, playerChips, bettingAllowed } = this.state;
    if(bettingAllowed && (playerChips-amount >= 0)){
      this.setState({
        pot: pot + amount
        playerChips: playerChips - amount
      })
    }
  }

  resetPlayingArea = () => {
    this.setState({
      dealerCards: [],
      dealerScore: 0,
      playerCards: [],
      playerScore: 0,
      roundLost: false,
      roundTied: false,
      roundWon: false,
      bettingAllowed:  false
    })
  }

  checkIfCanBet = () => {
    return new Promise((resolve,reject) => {
      if(this.state.playerChips > 0){
        resolve(true)
      }else{
        reject(false)
      }
    })
  }

  // bet = () => {
  //   let that = this
  //   return this.checkIfCanBet()
  //   .then( (r) => {
  //     that.setState({
  //       bettingAllowed: true
  //     })
  //   })
  //   .catch(function(err){
  //     console.log('no muneh', err);
  //     that.setState({
  //       err: true
  //     })
  //   })
  // }

  newDeck = () => {
    let that = this
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
    let that = this;
    const { deckId } = this.state;
    this.bet()
    .then(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
      .then(res => res.json())
      .then((res) => {
        let tempPlayerScore = that.computeScore([res.cards[1], res.cards[3]])
        that.setState({
          dealerCards: [res.cards[0], res.cards[2]],
          playerCards: [res.cards[1], res.cards[3]],
          dealerScore: that.computeScore([res.cards[2]]),
          playerScore: tempPlayerScore,
          roundWon: tempPlayerScore === 21 ? true : false
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

  // dealCard = (target) => {
  //   const {  }
  //   fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
  //   .then(res => res.json())
  // }

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

  endGame = () => {
    const { roundLost, roundTied, roundWon } = this.state
    let that = this
    if(){
      setTimeout()
      that.resetPlayingArea()
    }
  }

  componentWillMount(){
    this.newDeck()
  }

  componentDidUpdate(prevProps, prevState){
    const { roundLost, roundTied, roundWon } = this.state
    if( roundLost !== prevState.roundLost ||
      roundTied !== prevState.roundTied ||
      roundWon !== prevState.roundWon ) {
      //calling the endgame function if a round state is changed
      this.endGame()
    }
  }



  render() {
    const {
    dealerCards,
    dealerScore,
    playerCards,
    playerScore,
    roundLost,
    roundTied,
    roundWon,
    bettingAllowed } = this.state
    return(
      <Grid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Well style={styles.gameWell}>
              <h3>Dealer Cards</h3>
              <div style={styles.cardContainer}>
                {/* <img src="https://deckofcardsapi.com/static/img/KH.png" alt="lol" style={styles.card}/>
                <img src="https://deckofcardsapi.com/static/img/KH.png" alt="lol" style={styles.card}/> */}
                { dealerCards.map((el,indx) =>
                  <img src={el.image} alt={el.code} key={indx} style={styles.card}/>
                ) }
              </div>
              <hr />
              <h3>Player Cards</h3>
              <div style={styles.cardContainer}>
                { playerCards.map((el,indx) =>
                  <img src={el.image} alt={el.code} key={indx} style={styles.card}/>
                ) }
              </div>
              <hr/>
              <div style={styles.actionContainer}>
                <Button style={styles.actionButton} >Hit me</Button>
                <Button style={styles.actionButton} >Stand</Button>
              </div>
              <hr/>
              <Button onClick={this.newGame}>
                Play
              </Button>
              <
              <div style={styles.chipsContainer}>
                <Button style={styles.chips.white} onClick={() => this.betAmount(1) } >1</>
                <Button style={styles.chips.bleu} onClick={() => this.betAmount(25) } >25</>
                <Button style={styles.chips.green} onClick={() => this.betAmount(50) } >50</>
                <Button style={styles.chips.purple} onClick={() => this.betAmount(100) } >100</>
              </div>
            </Well>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Grid>
    )
  }
}
