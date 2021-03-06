import React, { Component } from 'react';

import { Link } from 'react-router';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import nav from './styles.js';

export default class extends Component {


  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={nav.linkDecoration}>
              Raid55
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/about" style={nav.linkDecoration} >About me</Link>
            </NavItem>
            <NavItem>
              <a target="_blank"  href='https://registry.jsonresume.org/Raid55' style={{ textDecoration: 'none' }}>
                Cv
              </a>
              {/* <a href="www.lol.com" style={nav.linkDecoration}>
              Cv
            </a> */}
            </NavItem>
            <NavDropdown  title="freeCodeCamp" id="basic-nav-dropdown">
              <MenuItem >
                <Link to="/calculator" style={nav.linkDecoration}>Calculator</Link>
              </MenuItem>
              <MenuItem >
                <Link to="/twitch">Twitch Api</Link>
              </MenuItem>
              {/* <MenuItem >
                <Link to="/weather" style={nav.linkDecoration}>Live Weather</Link>
              </MenuItem>
              <MenuItem >
                <Link to="/github">Github Search</Link>
              </MenuItem> */}
              <MenuItem divider />
              <MenuItem >tribute page</MenuItem>
            </NavDropdown>
            <NavItem>
              <Link to="/blackjack" style={nav.linkDecoration} >BlackJack</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
