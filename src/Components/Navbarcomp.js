import React, { useState } from 'react';
import {NavLink as ReactLink} from 'react-router-dom'
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
  NavbarText,
} from 'reactstrap';

 const Navbarcomp=(args)=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        {/* <NavbarBrand >MYblog</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  tag={ReactLink} to="/Register">
                Register
              </NavLink>
            </NavItem>
          
          </Nav>
      
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomp;