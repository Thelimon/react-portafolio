import React from 'react';
import {CardArrow, CardBtn} from "../styles/ButtonStyled";
import {RightArrowAlt} from "@styled-icons/boxicons-regular/RightArrowAlt";

const CardButton = () => {
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <CardBtn href="https://codepen.io/FreeCodeCamp/" target="_blank">Show all <CardArrow /></CardBtn>
    )
};

export default CardButton;