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
              <text>Raid55</text>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem  href="#">About me</NavItem>
            <NavItem  href="/lol">Cv</NavItem>
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
