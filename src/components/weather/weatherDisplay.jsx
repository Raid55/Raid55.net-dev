import React, { Component } from 'react';
import Forecast from 'react-forecast';
// import { Link } from 'react-router'

export default class extends Component {
  state={
    err: false,
  }

  fetchInfo = () => {
  var CORS = 'https://crossorigin.me/';
  const GOOGLE_MAPS_API_KEY = "AIzaSyAulehec9LJQ7r9rQlyVvZT-Joo3m_ZD5o";
  const { city } = this.props.params
  const that = this;

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_MAPS_API_KEY}`)
    .then(res => res.json())
    .then(data => data.results[0].geometry.location)
    .then((cords) => {
      that.setState({
        cords: cords,
        city: this.props.params.city
      })
    })
    .catch((err) => {
      console.log("lol", err);
      that.setState({
        err:true
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.params.city !== this.props.params.city){
      this.fetchInfo()
    }
  }

  componentDidMount(){
    this.fetchInfo()
  }

  render(){
    const { city, cords } = this.state
    if(!cords){
      return (
        <div>
          LOADING...
        </div>
      )
    }else if(this.state.err === true){
      return (
        <div>
          TWAS THE NIGHT BEFORE X-MAS AND AN ERROR WAS FOUND UNDER THE MISTELTOES... yea the misteltoes...
        </div>
      )
    }else{
      return (
        <Forecast latitude={cords.lat} longitude={cords.lng} name={city} />
      )
    }
  }
}

// cityWeather.innerText = 'Current temperature: ' + weather.temperature
// Loading...Please hold on to your pants.
playcacakebet
