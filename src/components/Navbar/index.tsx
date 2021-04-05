import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  Drawer, 
  NavMenu, 
  NavItem, 
  NavLink, 
  NavBtn, 
  NavBtnLink 
} from './navbarElements'

interface NavbarProps{
  toggle: any;
}
const Navbar: React.FC<NavbarProps> = ({toggle}) => {
    return (
        <>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>vBank</NavLogo>
              <Drawer onClick={toggle}>
                <FaBars/>
              </Drawer>
              <NavMenu>
                <NavItem>
                  <NavLink to="about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="signup">Sign Up</NavLink>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
