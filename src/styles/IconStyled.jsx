import styled from "styled-components";
import {Facebook, Github, Twitter} from '@styled-icons/boxicons-logos'
import {MarkEmailUnread} from '@styled-icons/material/MarkEmailUnread';
import {CallConnecting} from '@styled-icons/fluentui-system-filled/CallConnecting';

export const FacebookIcon = styled(Facebook)`
  height: 1.8rem;
  width: 1.8rem;
  color: #f0f0f0;
`

export const GithubIcon = styled(Github)`
  height: 1.8rem;
  width: 1.8rem;
  color: #f0f0f0;
`

export const TwitterIcon = styled(Twitter)`
  height: 1.8rem;
  width: 1.8rem;
  color: #f0f0f0;
`

export const EmailIcon = styled(MarkEmailUnread)`
  height: 1.8rem;
  width: 1.8rem;
  color: #f0f0f0;
`

export const CallIcon = styled(CallConnecting)`
  height: 1.4rem;
  width: 1.4rem;
  color: #f0f0f0;
`

export const StyledSocialMediaIcons = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  margin: 2rem;
`

export const StyledAnchorTagIcon = styled.a`
  font-size: 1.4rem;
  text-shadow: 2px 2px 1px #1f1f1f;
  transition: transform 0.3s ease-out;
  text-decoration: none;
  color: #f0f0f0;
  @media (min-width: 768px){
    margin-right: 1.2rem;
    font-size: 1.5rem;
  }
`
