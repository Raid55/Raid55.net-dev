import React, { Component } from 'react';
import { Link } from 'react-router';

const feat = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "brunofin", "habathcx", "RobotCaleb", "noobs2ninjas"];

//@TODO: finish up the featured component and start working on search component for this and for github search

export default class extends Component {
  state ={
    err: false,
    featured: [],
    maxChar: 39,
    username: "",
    reload: false
  }

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
        fetch(`https://wind-bow.glitch.me/twitch-api/streams/${el}`)
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
          // console.log(finalArr);
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

  handleChange = () => {
    this.setState({username: this.refs.username.value.substr(0, this.state.maxChar)})
  }

  render() {

    if(this.state.err === true){
      return (
        <p> SOUND THE ALARM, WE HAVE A PROBLEM</p>
      )
    }else{
      // console.log("lol,",this.state.featured);
      return(
        <Well style={twitch.container}>
          <p>Pardon this horible CSS, Im not really good at styling. P.s. User Photoes are squished just click on any tab away and then back to this page to fix. Im still trying to find what makes that bug happen.</p>
          <Grid>
            <Row>
              { this.state.featured.slice(0, 3).map((el) =>

              ) }
            </Row>
            <Row>
              { this.state.featured.slice(3, 6).map((el) =>

              ) }
            </Row>
          </Grid>
        </Well>
      )
    }
  }
}
<div className="featTwitchBoxHolder">
  <p>Pardon this horible CSS, Im not really good at styling. P.s. User Photoes are squished just click on any tab away and then back to this page to fix. Im still trying to find what makes that bug happen.</p>
  { this.state.featured.map((el) => {
    return el.status === null ?
    <div className="twitchBox">
      <p> { el.username } </p>
      <p> does not exists on the twitch...</p>
    </div>
    :
    <a target="_blank" key={el.id} href={el.channel.url}>
      <div className="twitchBox">
        <img className={ el.stream === null ? "offlineCirclePic" : "onlineCirclePic" }
          src={ el.channel.logo }
          alt={ el.channel.name } />
        <div>
          <p className={ el.stream === null ? "offlineUsername" :"onlineUsername"}>{ el.channel.name }</p>
          <p className="gameText">{ el.stream === null ? `(ー。ー)` : el.channel.game }</p>
          <p className="statusText">{ el.stream === null ? `Offline` : el.channel.status }</p>
        </div>
      </div>
    </a>
  }) }
  <p>Search for a Twitch user person thing: </p>
  <input className="twitchSearchBox" type="text" value={this.state.username} ref="username" onChange={this.handleChange}/>
  <Link to={`/twitch/${this.state.username}`}>
    <input className="searchBtn" type='button' value="Search"/>
  </Link>
  <div>
    {this.props.children}
  </div>
</div>
