import {Nav, NavbarContainer, NavLogo, Drawer, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink} from './navbarElements'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>vBank</NavLogo>
              <Drawer>
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
