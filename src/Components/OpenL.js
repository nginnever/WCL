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
    return <div className="Reg">
    	<h1>WCL Open</h1>
    	<br/>
    	<p>Open League Begins November 20th</p>
    	<br/>
    	<br/>
		<div>
		<Navbar style={{backgroundColor: '#282c34'}} light expand="md">
		  <NavbarToggler onClick={this.toggle} />
		  <Collapse isOpen={this.isOpen} navbar>
		    <Nav className="ml-auto" navbar>
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
    </div>
  }
}
export default OpenL