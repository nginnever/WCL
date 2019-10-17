
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
                        <NavItem>
                          <NavLink tag={RRNavLink} exact to="/Register">Open</NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink tag={RRNavLink} exact to="/Register">Main</NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink tag={RRNavLink} exact to="/Register">Invite</NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavItem>
                          <NavLink tag={RRNavLink} exact to="/Register">Season 0</NavLink>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            World Of Warcraft Classic Dueling Leagues Coming Soon.
          </p>

        </header>
        <Route path="/Register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
