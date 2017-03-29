import React, { Component } from 'react';
import Layout from './components/layout.jsx';
import Navbar from './components/nav.jsx';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Layout
        nav={ <Navbar /> }
        >
          { this.props.children }
        </Layout>
    );
  }
}

export default App;
