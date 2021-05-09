import React from 'react';
import {FooterBgColor, FooterMainPstyled, FooterSecondaryPstyles} from "../styles/FooterStyled";

const Footer = () => {
    return (
        <>
            <FooterBgColor>
                <FooterMainPstyled name= "**This is just a fake portfolio. All the projects and contact details given
                    are not real."/>
                <FooterSecondaryPstyles name="© Created for Juan D - Freecodecamp"/>
            </FooterBgColor>
        </>
    )
};

export default Footer;