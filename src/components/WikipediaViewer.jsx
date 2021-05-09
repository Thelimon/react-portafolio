import React from 'react';
import {CardAstyle, CardParaph, CardSize} from "../styles/CardStyled";

const WikipediaViewer = () => (
    <CardAstyle href="https://codepen.io/freeCodeCamp/full/mVEJag">
        <article>
            <CardSize src="https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png" alt="img"/>
            <CardParaph>Wikipedia Viewer</CardParaph>
        </article>
    </CardAstyle>
);

export default WikipediaViewer;