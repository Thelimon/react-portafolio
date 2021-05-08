import React from 'react';
import * as Header from '../styles/HeaderStyled.jsx';

const HeaderMain= (props) =>{
    return (
        <Header.HeaderBackground>
            <Header.H1styled>Hey I am Mimic</Header.H1styled>
            <Header.PStyled>a web developer</Header.PStyled>
        </Header.HeaderBackground>
    );
}

export default HeaderMain;