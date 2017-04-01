import React, { Component } from 'react';
import { Link } from 'react-router';

import { Well } from 'react-bootstrap';
import { searchBox } from '../../css/jsCSS.js';



export default class extends Component {
  state={
    err: false,
  }

  fetchInfo = () => {
    const username = this.props.params.username
    fetch(`https://wind-bow.glitch.me/twitch-api/streams/${username}`)
    .then((response) => {
      if (response.status === 200) {
        return response;
      }else{
        throw new Error(response.statusText);
      }
    })
    .then(result => result.json())
    .then((gitJsonStream) => {
      fetch(`https://wind-bow.glitch.me/twitch-api/channels/${username}`)
      .then(function(response) {
        if (response.status === 200) {
          return response;
        }else{
          throw new Error(response.statusText);
        }
      })
      .then(result => result.json())
      .then((gitJsonChannel) => {
        if(gitJsonChannel.status === 404){
          console.log('it gets here');
          this.setState({
            err:true
          })
        }else if(gitJsonStream.stream === null){
          console.log('it gets here2');
          this.setState({
            userInfo: {
              id: gitJsonChannel._id,
              stream: null,
              channel: gitJsonChannel
            }
          })
        }else{
          // console.log(gitJsonStream);
          console.log('it gets here4');
          this.setState({
            userInfo: {
              id: gitJsonChannel._id,
              stream: gitJsonStream,
              channel: gitJsonChannel
            }
          })
        }
      })
      .catch(function(err1){
        console.log("lol", err1);
        this.setState({err: true})
      })
    })
    .catch(function(err2){
      console.log("lolzz", err2);
      this.setState({err: true})
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.params.username !== this.props.params.username){
      this.fetchInfo()
    }
  }

  componentDidMount(){
    this.fetchInfo()
  }


  render() {
    const  {err, userInfo} = this.state;
    if(err === false && userInfo){
      return(
        <div>
          <hr />
          {  !userInfo  ?
          <div style={searchBox.featBox.grey} >
            <p> {this.props.params.username} </p>
            <p> does not exists on the searchBox...</p>
          </div>
          :
          <a target="_blank" key={userInfo.id} href={userInfo.channel.url} style={searchBox.link}>
            <div style={ userInfo.stream === null ? searchBox.featBox.offline : searchBox.featBox.online}>
              <img
                src={ userInfo.channel.logo }
                alt={ userInfo.channel.name }
                style={searchBox.featBox.picThatFits}
              />
              <div style={searchBox.featBox.boxInfo.box}>
                <h5 style={searchBox.featBox.boxInfo.username}>{ userInfo.channel.name }</h5>
                <h6 style={searchBox.featBox.boxInfo.status}>{userInfo.stream === null ? `(ー。ー)` : userInfo.channel.game}</h6>
              </div>
            </div>
          </a> }
        </div>
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
