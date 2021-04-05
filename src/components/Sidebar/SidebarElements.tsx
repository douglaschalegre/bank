import styled from 'styled-components'
import theme from '../../theme'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa'

interface ContainerProps{
  isOpen: Boolean;
  toggle: void;
}

export const SidebarContainer = styled.aside<ContainerProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${theme.primaryDark};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${ ( props ) => (props.isOpen ? '100%' : '0')};
  top: ${ ( props ) => (props.isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: ${theme.primaryLight};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
color: ${theme.primaryLight};
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width:480px){
    grid-template-rows: repeat(6, 60px)
  }
`
export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: ${theme.primaryLight};
cursor: pointer;

&:hover{
  color:${theme.primaryHover};
  transition: 0.2s ease-in-out;
}
`
export const SidebarBtn = styled.div`
display: flex;
justify-content: center;

`
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${theme.primaryHover};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${theme.textHover};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
  background: ${theme.textHover};
  transition: 0.2s ease-in-out;
}

`
