import React from 'react';
import Navbar from "./Navbar";
import HeaderMain from "./HeaderMain";
import {Normalize} from "styled-normalize";
import Projects from "../containers/Projects";


const Main = ({children}) => {
    return(
        <>
            <Normalize />
            <Navbar />
            <HeaderMain />
            <Projects />
        </>

    )
};

export default Main;