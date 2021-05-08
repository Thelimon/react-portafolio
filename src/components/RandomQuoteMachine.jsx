import React from 'react';
import {CardFooter, CardParaph, CardSize} from "../styles/CardStyled";

const RandomQuoteMachine = (props) => (
    <a href="https://codepen.io/freeCodeCamp/full/qRZeGZ">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="img"/>
            <CardFooter>
                <CardParaph>Random Quote Machine</CardParaph>
            </CardFooter>
        </article>
    </a>
);

export default RandomQuoteMachine;