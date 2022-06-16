import React from 'react'
import { SidebarContainer,CloseIcon, Icon, SidebarBtnWrap, SidebarRoute, SidebarWrapper, SidebarLink, SidebarMenu} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen= {isOpen} onClck={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClck={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="Discover" onClck={toggle}>
                Discover
                </SidebarLink>
                <SidebarLink to="Services" onClck={toggle}>
                Services
                </SidebarLink>
                <SidebarLink to="Sign Up" onClck={toggle}>
                Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to ="/signin">Sign In</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar