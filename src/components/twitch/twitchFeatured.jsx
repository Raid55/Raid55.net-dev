import React, { Component } from 'react';
import { Link } from 'react-router';

import { Button, Well, Form, FormGroup, FormControl, Col, Row, Grid } from 'react-bootstrap';
import { twitch } from '../../css/jsCSS.js';

import Search from '../search/searchBox.jsx';

const feat = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "brunofin", "habathcx", "RobotCaleb", "noobs2ninjas", "summit1g"];

export default class extends Component {
  state ={
    err: false,
    featured: [],
    maxChar: 39,
    username: ""
  }

  maxChars = () => {
    this.setState({username: this.refs.username.value.substr(0, this.state.maxChar)})
  }

  //TWITCH api is down and not currently working

  componentWillMount(){
    // const username = this.props.params.username;
    const that = this;
    let finalArr = [];
    // https://wind-bow.gomix.me/twitch-api/channels/
    feat.map((el) => {
      fetch(`https://wind-bow.glitch.me/twitch-api/streams/${el}`)
      .then(function(response) {
        if (response.status === 200) {
          return response;
        }else{
          throw new Error(response.statusText);
        }
      })
      .then(result => result.json())
      .then((gitJsonStream) => {
        fetch(`https://wind-bow.glitch.me/twitch-api/channels/${el}`)
        .then(function(response) {
          if (response.status === 200) {
            return response;
          }else{
            throw new Error(response.statusText);
          }
        })
        .then(result => result.json())
        .then((gitJsonChannel) => {
          if(gitJsonChannel.error){
            finalArr.push({
              username: el,
              status: null
            })
          }else if(gitJsonStream.stream === null){
            finalArr.push({
              id: gitJsonChannel._id,
              stream: null,
              channel: gitJsonChannel
            })
          }else{
            // console.log(gitJsonStream);
            finalArr.push({
              id: gitJsonChannel._id,
              stream: gitJsonStream,
              channel: gitJsonChannel
            })
          }
          console.log(finalArr);
          // console.log("top",finalArr[0].channel.logo);
          that.setState({featured: that.state.featured.concat(finalArr)})
          finalArr = [];
        })
        .catch(function(err1){
          console.log("lol", err1);
          that.setState({err: true})
        })
      })
      .catch(function(err2){
        console.log("lolzz", err2);
        that.setState({err: true})
      })
    })
  }

  render() {
    const {err} = this.state
    if(err === false ){
      return(
        <Grid>
          <Row>
            <Col lg={4}>
              <Well style={twitch.well}>
                <Row>
                  <Col lg={3}></Col>
                  <Col lg={6}>
                    <h3 style={twitch.featured}>Featured</h3>
                  </Col>
                  <Col lg={3}></Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h1>{this.props.location.query.user}</h1>
                    { this.state.featured.map((el,indx) =>
                      el.status === null ?
                      <div style={twitch.featBox.grey} key={indx}>
                        <p> { el.username } </p>
                        <p> does not exists on the twitch...</p>
                      </div>
                      :
                      <a target="_blank" key={el.id} href={el.channel.url} style={twitch.boxInfo.a}>
                        <div style={ el.stream === null ? twitch.featBox.offline : twitch.featBox.online}>
                          <img
                            src={ el.channel.logo }
                            alt={ el.channel.name }
                            style={twitch.picThatFits}
                          />
                          <div style={twitch.boxInfo.box}>
                            <h5 style={twitch.boxInfo.username}>{ el.channel.name }</h5>
                            <h6 style={twitch.boxInfo.status}>{el.stream === null ? `(ー。ー)` : el.channel.game}</h6>
                          </div>
                        </div>
                      </a>
                    ) }
                  </Col>
                </Row>
              </Well>
            </Col>
            <Col lg={8}>
              <Search
                maxChar={39}
                whatSearch="What is the Twitch Streamer you are looking for"
                link="/twitch/"
                >
                {this.props.children}
              </Search>
            </Col>
          </Row>
        </Grid>
      )
    }else if(err === true){
      return (
        <Well>
          <div>ERROR 55...HUNDRED pls consult a consultant and then the manual and then check that reality is still glued together</div>
        </Well>
      )
    }else{
      return (
        <Well>
          <div>Loading...</div>
        </Well>
      )
    }
  }
}

// style={twitch.container}
// { this.state.featured.slice(0, 3).map((el) =>
//
// ) }
