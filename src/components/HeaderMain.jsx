import React from 'react';
import {HeaderBackground, HeaderH1, HeaderP} from "../styles/HeaderStyled.jsx";

const HeaderMain= (props) =>{
    return (
        <HeaderBackground>
            <HeaderH1 name="Hey I am Mimic"/>
            <HeaderP name="a web developer" />
        </HeaderBackground>
    );
}

export default HeaderMain;