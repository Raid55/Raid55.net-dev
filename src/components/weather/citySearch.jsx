import React, { Component } from 'react';
import { Link } from 'react-router'


export default class extends Component {
  state ={
    city:"",
    maxChar: 39
  }

  handleChange= () => {
    this.setState({city: this.refs.city.value.substr(0, this.state.maxChar)})
  }

  render() {
    return (
      <div>
        <h3>Live weather by city</h3>
        <input className="searchBox" type="text" value={this.state.city} ref="city" onChange={this.handleChange}/>
        <Link to={`/weather/${this.state.city}`}>
          <input className="searchBtn" type='button' value="Search"/>
        </Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
