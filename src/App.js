
import React, { useState } from 'react';
import logo from './WCL_Logo.svg';
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
  DropdownItem,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button } from 'reactstrap';

import Register from './Components/Register';
import OpenL from './Components/OpenL';
import MainL from './Components/MainL';
import InviteL from './Components/InviteL';
import Confirmation from './Components/Confirmation';

function App() {
  // initialize our state

  var state = {
    isLoggedIn: false
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggle2 = () => setIsOpen(isOpen2);
  const isOpen2 = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div>
            <Navbar style={{backgroundColor: '#282c34'}} light expand="md">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem style={{marginRight: '10px'}} >
                    <NavLink style={{color: '#f1f1f1'}} href="/">Home</NavLink>
                  </NavItem>
                  <NavItem style={{marginRight: '10px'}}>
                    <NavLink style={{color: '#f1f1f1'}} href="https://discord.gg/tNxtvQe">Discord</NavLink>
                  </NavItem>
                  <UncontrolledDropdown style={{marginRight: '10px'}} nav inNavbar>
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
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem style={{marginRight: '10px'}}>
                    <NavLink style={{color: '#f1f1f1'}} tag={RRNavLink} exact to="/Register">Register</NavLink>
                  </NavItem>

              </Nav>
              </Collapse>    



                <Nav className="ml-auto" navbar>

                  <UncontrolledDropdown>
                    <DropdownToggle style={{color: '#f1f1f1'}} nav caret>
                      Login
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                    <Form className="form" style={{height:'75px', width:'500px'}}>
                      <Col>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                          />
                        </FormGroup>
                      </Col>
                      <Button>Submit</Button>
                    </Form>
                    </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                </Nav>

            </Navbar>
          </div>
          <br/>
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p style={{fontSize:'19px'}}>
            World of Warcraft Classic Dueling League <br/> 
            Season 0 Coming Soon
          </p>
          <p style={{fontSize:'15px'}}>
            Site still under construction. Please provide feedback in Discord as we prepare for Season 0
          </p>
          <br/>
          <br/>
          <br/>
        </header>
        <Route path="/Register" component={Register} />
        <Route path="/Open" component={OpenL} />
        <Route path="/Main" component={MainL} />
        <Route path="/Invite" component={InviteL} />
        <Route path="/Register/Confirmation" component={Confirmation} />

        <footer className="App-footer">
          <br/>
          <p style={{marginBottom:'0px', color:'white'}}>FREE HONK KONG <br/>
          Contact information: <a href="mailto:coming@soon.com">
          coming@soon.com</a>.</p>
          <br/>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
