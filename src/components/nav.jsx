import React, { Component } from 'react';

import { Link } from 'react-router';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


export default class extends Component {
  state ={
  };

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              Raid55
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/about">About me</Link>
            </NavItem>
            <NavItem>
              <Link to="https://registry.jsonresume.org/Raid55">
              Cv
            </Link>
            </NavItem>
            <NavDropdown  title="freeCodeCamp" id="basic-nav-dropdown">
              <MenuItem >
                <Link to="/calculator">Calculator</Link>
              </MenuItem>
              <MenuItem >Twitch Api</MenuItem>
              <MenuItem >Weather</MenuItem>
              <MenuItem divider />
              <MenuItem >tribute page</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
