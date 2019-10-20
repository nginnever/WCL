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
    return <div>
		<div className="Nested-header">
		<Navbar style={{backgroundColor: 'white', borderRadius: '10px', position:'absolute', marginTop:'-27px'}} light expand="md">
		  <NavbarToggler onClick={this.toggle} />
		  <Collapse isOpen={this.isOpen} navbar>
		    <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{borderRight:'solid 1px black', color: 'black'}} tag={RRNavLink} exact to="/Register">Standings &nbsp;</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{borderRight:'solid 1px black', color: 'black'}} tag={RRNavLink} exact to="/Register">&nbsp; Rules &nbsp; </NavLink>
          </NavItem>
		      <UncontrolledDropdown nav inNavbar>
		        <DropdownToggle style={{color: 'black'}} nav caret>
		          &nbsp; Seasons
		        </DropdownToggle>
		        <DropdownMenu right>
		          <DropdownItem>
		            <NavLink tag={RRNavLink} exact to="/Open">Season 0</NavLink>
		          </DropdownItem>
		          <DropdownItem>
		            <NavLink tag={RRNavLink} exact to="/Main">Season 1</NavLink>
		          </DropdownItem>
		          <DropdownItem>
		            <NavLink tag={RRNavLink} exact to="/Invite">Season 2</NavLink>
		          </DropdownItem>
		        </DropdownMenu>
		      </UncontrolledDropdown>
		    </Nav>
		  </Collapse>
		</Navbar>
		</div>
    <div style={{marginTop:'50px'}}>
      <h1>WCL Open</h1>
      <br/>
      <p>Open League Begins November 20th</p>
      <br/>
      <br/>
    </div>
    </div>
  }
}
export default OpenL