import React from 'react';
import {CardAstyle, CardParaph, CardSize} from "../styles/CardStyled";

const RandomQuoteMachine = (props) => (
    <CardAstyle href="https://codepen.io/freeCodeCamp/full/qRZeGZ">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="img"/>
            <CardParaph>Random Quote Machine</CardParaph>
        </article>
    </CardAstyle>
);

export default RandomQuoteMachine;