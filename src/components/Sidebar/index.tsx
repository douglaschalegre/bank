import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarRoute
} from './SidebarElements'

interface SidebarProps{
  isOpen: Boolean;
  toggle: any;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggle
}) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='discover'>Discover</SidebarLink>
          <SidebarLink to='services'>Services</SidebarLink>
          <SidebarLink to='signup'>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
