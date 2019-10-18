
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Register from './Components/Register';
import OpenL from './Components/OpenL';
import MainL from './Components/MainL';
import InviteL from './Components/InviteL';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div>
            <Navbar style={{backgroundColor: '#282c34'}} light expand="md">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink style={{color: '#f1f1f1'}} href="/">WoW Classic League</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{color: '#f1f1f1'}} tag={RRNavLink} exact to="/Register">Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{color: '#f1f1f1'}} href="https://github.com/reactstrap/reactstrap">Discord</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={{color: '#f1f1f1'}} nav caret>
                      Leagues
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink tag={RRNavLink} exact to="/Open">Open</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink tag={RRNavLink} exact to="/Main">Main</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink tag={RRNavLink} exact to="/Invite">Invite</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink tag={RRNavLink} exact to="/Register">Season 0</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            World of Warcraft Classic Dueling League Season ZERO Coming Soon.
          </p>
          <p>
            FREE HONG KONG
          </p>

        </header>
        <Route path="/Register" component={Register} />
        <Route path="/Open" component={OpenL} />
        <Route path="/Main" component={MainL} />
        <Route path="/Invite" component={InviteL} />
      </BrowserRouter>
    </div>
  );
}

export default App;
