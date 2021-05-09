import React from 'react';
import DrNorman from "../components/DrNorman";
import RandomQuoteMachine from "../components/RandomQuoteMachine";
import JavascriptCalculator from "../components/JavascriptCalculator";
import MapDataAcross from "../components/MapDataAcross";
import WikipediaViewer from "../components/WikipediaViewer";
import TicTac from "../components/TicTac";
import {CardGrid} from "../styles/CardStyled";
import CardButton from "../components/CardButton";

const Cards = () => {
    return (
        <>
            <CardGrid>
                <DrNorman />
                <RandomQuoteMachine />
                <JavascriptCalculator />
                <MapDataAcross />
                <WikipediaViewer />
                <TicTac />
            </CardGrid>
            <CardButton />
        </>
    )
};

export default Cards;