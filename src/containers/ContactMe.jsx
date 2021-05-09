import React from 'react';
import ContactPhrase from "../components/ContactPhrase";
import {ContactStyled} from "../styles/SectionStyled";
import SocialMedias from "../components/SocialMedias";

const ContactMe = () => {
    return (
        <>
            <ContactStyled>
                <ContactPhrase />
                <SocialMedias />
            </ContactStyled>
        </>
    )
};

export default ContactMe;