import React from 'react';
import {CardFooter, CardParaph, CardSize} from "../styles/CardStyled";

const JavascriptCalculator = (props) => (
    <a href="https://codepen.io/freeCodeCamp/full/wgGVVX">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="img"/>
            <CardFooter>
                <CardParaph>Javascript Calculator</CardParaph>
            </CardFooter>
        </article>
    </a>
);

export default JavascriptCalculator;