import React, { Component } from 'react';

import { Col, Row, Grid } from 'react-bootstrap';

export default class extends Component {

  render() {
    return (
      <div>
        <div>
          {this.props.nav}
        </div>
        <div>
          <Grid>
            <Row>
              <Col lg={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
