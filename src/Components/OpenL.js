import React, { useState } from 'react'
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

import OpenStandings from './OpenStandings';
import OpenFormat from './OpenFormat';
import OpenRules from './OpenRules';
import OpenSchedule from './OpenSchedule';

class OpenL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      setIsOpen: false,
    };
  }

  toggle() {
  	this.setState({ setIsOpen: true })
  }

  render() {
    return <div style={{backgroundColor: 'white', paddingTop:'-27px'}}>
    <BrowserRouter>
		<div className="Nested-header">
		<Navbar style={{backgroundColor: 'white', borderRadius: '10px', position:'absolute', marginTop:'-20px'}} light expand="md">
		  <NavbarToggler onClick={this.toggle} />
		  <Collapse isOpen={this.isOpen} navbar>
		    <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle style={{borderRight:'solid 1px black', color: 'black'}} nav caret>
              Standings
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink tag={RRNavLink} exact to="/Open">All</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={RRNavLink} exact to="/Open">Server Standings</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={RRNavLink} exact to="/Open">Class Standings</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink style={{borderRight:'solid 1px black', color: 'black'}} tag={RRNavLink} exact to="/Open/Schedule">&nbsp; Schedule &nbsp;</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{borderRight:'solid 1px black', color: 'black'}} tag={RRNavLink} exact to="/Open/Format">&nbsp; Format &nbsp; </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{borderRight:'solid 1px black', color: 'black'}} tag={RRNavLink} exact to="/Open/Rules">&nbsp; Rules &nbsp; </NavLink>
          </NavItem>
		      <UncontrolledDropdown nav inNavbar>
		        <DropdownToggle style={{color: 'black'}} nav caret>
		          &nbsp; Seasons
		        </DropdownToggle>
		        <DropdownMenu right>
		          <DropdownItem>
		            <NavLink tag={RRNavLink} exact to="/Open">Season 0</NavLink>
		          </DropdownItem>
		        </DropdownMenu>
		      </UncontrolledDropdown>
		    </Nav>
		  </Collapse>
		</Navbar>
    </div>
      <div style={{marginTop:'50px'}}>
        <h1>WCL Open</h1>
        <p>Open League Begins November 20th</p>
        <br/>
        <br/>
      </div>
    <Route path="/Open/Standings" component={OpenStandings} />
    <Route path="/Open/Format" component={OpenFormat} />
    <Route path="/Open/Rules" component={OpenRules} />
    <Route path="/Open/Schedule" component={OpenSchedule} />
    </BrowserRouter>
    </div>
  }
}
export default OpenL