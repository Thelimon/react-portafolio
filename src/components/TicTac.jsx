import React from 'react';
import {CardAstyle, CardParaph, CardSize} from "../styles/CardStyled";

const TicTac = (props) => (
    <CardAstyle href="https://codepen.io/freeCodeCamp/full/KzXQgy">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png" alt="img"/>
            <CardParaph>Tic Tac</CardParaph>
        </article>
    </CardAstyle>
);

export default TicTac;