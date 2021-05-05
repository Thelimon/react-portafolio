import React from 'react';
import styled from "styled-components";

const Navbar = () => {
    return(
        <NavbarStyle>
            <NavbarLiItems>
                <NavbarListStyle>About</NavbarListStyle>
                <NavbarListStyle>Work</NavbarListStyle>
                <NavbarStyle>Contact</NavbarStyle>
            </ NavbarLiItems>
        </ NavbarStyle>
    )
};

export default Navbar;

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #be3144;
`

const NavbarLiItems = styled.ul`
  display: flex;
  justify-content: space-around; 
`

const NavbarListStyle = styled.li `
  list-style: none;
`
