import React from 'react';
import {CardFooter, CardParaph, CardSize} from "../styles/CardStyled";

const TicTac = (props) => (
    <a href="https://codepen.io/freeCodeCamp/full/KzXQgy">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png" alt="img"/>
            <CardFooter>
                <CardParaph>Tic Tac</CardParaph>
            </CardFooter>
        </article>
    </a>
);

export default TicTac;