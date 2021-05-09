import React from 'react';
import Navbar from "../components/Navbar";
import HeaderMain from "../components/HeaderMain";
import {Normalize} from "styled-normalize";
import Projects from "./Projects";
import ContactMe from "./ContactMe";


const Main = ({children}) => {
    return(
        <>
            <Normalize />
            <Navbar />
            <HeaderMain />
            <Projects />
            <ContactMe />
        </>

    )
};

export default Main;