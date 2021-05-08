import React from 'react';
import {CardFooter, CardParaph, CardSize} from "../styles/CardStyled";

const WikipediaViewer = () => (
    <a href="https://codepen.io/freeCodeCamp/full/mVEJag">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png" alt="img"/>
            <CardFooter>
                <CardParaph>Wikipedia Viewer</CardParaph>
            </CardFooter>
        </article>
    </a>
);

export default WikipediaViewer;