import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <div>
          {this.props.nav}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
