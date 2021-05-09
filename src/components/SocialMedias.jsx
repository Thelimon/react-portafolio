import React from 'react';
import {CallIcon, EmailIcon, FacebookIcon, GithubIcon, StyledAnchorTagIcon, StyledSocialMediaIcons, TwitterIcon} from "../styles/IconStyled";

const SocialMedias = () => {
    return (
        <>
            <StyledSocialMediaIcons>
                <StyledAnchorTagIcon href="https://facebook.com/freecodecamp">
                    <span>
                        <FacebookIcon />
                    </span>
                        Facebook
                </StyledAnchorTagIcon>
                <StyledAnchorTagIcon href="https://github.com/Thelimon">
                    <span>
                        <GithubIcon />
                    </span>
                        Github
                </StyledAnchorTagIcon>
                <StyledAnchorTagIcon href="https://twitter.com">
                    <span>
                        <TwitterIcon />
                    </span>
                        Twitter
                </StyledAnchorTagIcon>
                <StyledAnchorTagIcon href="https://gmail.com">
                    <span>
                        <EmailIcon />
                        Send an email
                    </span>
                </StyledAnchorTagIcon>
                <StyledAnchorTagIcon href="https://claro.com.co">
                    <span>
                        <CallIcon />
                    </span>
                        Call me
                </StyledAnchorTagIcon>
            </StyledSocialMediaIcons>
        </>
    )
};

export default SocialMedias;

