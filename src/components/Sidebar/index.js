import React from 'react'
import { SidebarContainer,CloseIcon, Icon, SidebarBtnWrap, SidebarRoute, SidebarWrapper, SidebarLink, SidebarMenu} from './SidebarElements'

function Sidebar() {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="Discover">
                Discover
                </SidebarLink>
                <SidebarLink to="Services">
                Services
                </SidebarLink>
                <SidebarLink to="Sign Up">
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