import React from 'react';
import * as Nav from '../styles/navbarStyled'

const Navbar = () => {
    return(
       <Nav.Style>
           <Nav.UlItems>
               <Nav.LiStyle><a href={'#id'}>About</a></Nav.LiStyle>
               <Nav.LiStyle><a href={'#id2'}>Work</a></Nav.LiStyle>
               <Nav.LiStyle><a href={'#id3'}>Contact</a></Nav.LiStyle>
           </Nav.UlItems>
       </Nav.Style>
    )
};

export default Navbar;


