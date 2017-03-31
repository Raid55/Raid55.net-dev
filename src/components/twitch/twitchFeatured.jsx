import React, { Component } from 'react';
import { Link } from 'react-router';

import { Button, Well, Form, FormGroup, FormControl, Col, Row, Grid } from 'react-bootstrap';
import { twitch } from '../../css/jsCSS.js';



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

  render() {
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
                  <div style={twitch.featBox.online}>
                    <img src="https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" align="top" alt="lol" style={twitch.picThatFits} />
                  </div>
                  {/* <div style={twitch.featBox.grey}>
                    <p> yeallow </p>
                    <p> does not exists on the twitch...</p>
                  </div> */}
                </Col>
              </Row>
            </Well>
          </Col>
          <Col lg={8}>
            <Well>
              <p>Search for a Twitch user person thing: </p>
              <FormControl
                type="text"
                ref="username"
                placeholder="Enter text"
                value={this.state.username}
                onChange={this.maxChars}
              />
              <Link to={`/twitch/${this.state.username}`}>
                <Button style={twitch.link} bsStyle="info">
                  Search
                </Button>
              </Link>
              <div>
                {/* {this.props.children} */}
                <p>lol</p>
              </div>
            </Well>
          </Col>
        </Row>
      </Grid>
    )
  }
}

// style={twitch.container}
// { this.state.featured.slice(0, 3).map((el) =>
//
// ) }
