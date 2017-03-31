import React, { Component } from 'react';
import { Link } from 'react-router';

import { Button, Well, FormControl } from 'react-bootstrap';
// import {  } from '../css/jsCSS.js';

//ALL PROPS
//maxChar - maximum character allowed for search box
//whatSearch - text that will explain what is being searched
//link - link that will rederect the user. LINK MUST be writen like so /whatever
//it will automaticly attach the /:usernameorid to it



export default class extends Component {
  state ={
    maxChar: this.props.maxChars,
    text: ""
  }

  maxChars = () => {
    this.setState({text: this.refs.text.value.substr(0, this.state.maxChar)})
  }


  render() {
    return(
      <Well>
        <p>{ this.props.whatSearch }</p>
        <FormControl
          type="text"
          ref="text"
          value={this.state.text}
          onChange={this.maxChars}
        />
        <Link to={this.props.link + this.state.text } style={{ textDecoration: 'none' }}>
          <Button bsStyle="info">
            Search
          </Button>
        </Link>
        <div>
          {this.props.children}
        </div>
      </Well>
    )
  }
}
