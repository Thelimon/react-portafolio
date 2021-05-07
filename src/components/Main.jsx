import React from 'react';
import Navbar from "./Navbar";
import HeaderMain from "./HeaderMain";
import {Normalize} from "styled-normalize";

const Main = ({children}) => {
    return(
        <>
            <Normalize />
            <Navbar />
            <HeaderMain />
        </>

    )
};

export default Main;