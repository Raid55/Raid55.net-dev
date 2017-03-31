import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Button, Col, Row, Grid, Jumbotron } from 'react-bootstrap';
import { home } from '../css/jsCSS.js';



export default class extends Component {
  state = {

  }

  example = () => {

  }


  render() {
    return(
      <Jumbotron style={home.jumbatron}>
        <div>
          <h1 >Hello</h1>
          <p>This site is not done yet</p>
        </div>
      </Jumbotron>
    )
  }
}
