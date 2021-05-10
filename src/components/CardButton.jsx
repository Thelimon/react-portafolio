import React from 'react';
import {CardArrow, CardBtn} from "../styles/ButtonStyled";

const CardButton = () => {
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <CardBtn href="https://codepen.io/FreeCodeCamp/" target="_blank">Show all <CardArrow /></CardBtn>
    )
};

export default CardButton;