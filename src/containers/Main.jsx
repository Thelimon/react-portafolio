import React from 'react';
import Navbar from "../components/Navbar";
import HeaderMain from "../components/HeaderMain";
import {Normalize} from "styled-normalize";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "../components/Footer";


const Main = ({children}) => {
    return(
        <>
            <Normalize />
            <Navbar />
            <HeaderMain />
            <Projects />
            <ContactMe />
            <Footer />
        </>

    )
};

export default Main;