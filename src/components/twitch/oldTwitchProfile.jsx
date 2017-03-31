import React, { Component } from 'react';
// import { Link } from 'react-router'

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
      fetch(`https://wind-bow.glitch.me/twitch-api/streams/${username}`)
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
          this.setState({
            userInfo: {
              status: null
            }
          })
        }else if(gitJsonStream.stream === null){
          this.setState({
            userInfo: {
              id: gitJsonChannel._id,
              stream: null,
              channel: gitJsonChannel
            }
          })
        }else{
          // console.log(gitJsonStream);
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

  render(){
    const {err, userInfo} = this.state
    if(err === false && userInfo ){
      return userInfo.status === null ?
      <div>
        <div className="profileBox">
          <p>User not found :(</p>
        </div>
      </div>
      :
      <div>
        <div className="profileBox">
          <img className={ userInfo.stream === null ? "userpic offlineCirclePic largerPic" :
            "userpic onlineCirclePic largerPic" }
            src={ userInfo.channel.logo } alt={ userInfo.channel.name }/>
          <div className="profileInfo">
            <div className={ userInfo.stream === null ? "username offlineUsername" :
              "username onlineUsername"}>{ userInfo.channel.name }
            </div>
            <div className="contentGit gameText">{ userInfo.stream === null ? `(ー。ー)` :
              userInfo.channel.game }
            </div>
            <div className="contentGit statusText">{ userInfo.stream === null ? `Offline` :
              userInfo.channel.status }
            </div>
            <a target="_blank" href={ userInfo.channel.url } className="contentGit">{ userInfo.channel.url }</a>
          </div>
          <div className="profileStats">
            <div>
              <div className="redBold">Language</div>
              <p>{ userInfo.channel.broadcaster_language }</p>
            </div>
            <div>
              <div className="redBold">Views</div>
              <p>{ userInfo.channel.views }</p>
            </div>
            <div>
              <div className="redBold">Followers</div>
              <p>{ userInfo.channel.followers }</p>
            </div>
          </div>
        </div>
      </div>
    }else if(err === true){
      return (
        <div className="profileBox">
          <div>ERROR 55...HUNDRED pls consult a consultant and then the manual and then check that reality is still glued together</div>
        </div>
      )
    }else{
      return (
        <div className="profileBox">
          <div>Loading...</div>
        </div>
      )
    }
  }
}
