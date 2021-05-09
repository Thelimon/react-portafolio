import React from 'react';
import {CallIcon, EmailIcon, FacebookIcon, GithubIcon, TwitterIcon} from "../styles/IconStyled";

const SocialMedias = () => {
    return (
        <>
            <section>
                <a href="https://facebook.com/freecodecamp">
                <span>
                    <FacebookIcon />
                </span>
                    Facebook
                </a>
                <a href="https://github.com/Thelimon">
                <span>
                    <GithubIcon />
                </span>
                    Github
                </a>
                <a href="https://twitter.com">
                <span>
                    <TwitterIcon />
                </span>
                    Twitter
                </a>
                <a href="https://gmail.com">
                <span>
                    <EmailIcon />
                    Send an email
                </span>
                </a>
                <a href="https://claro.com.co">
                <span>
                    <CallIcon />
                </span>
                    Call me
                </a>
            </section>
        </>
    )
};

export default SocialMedias;

