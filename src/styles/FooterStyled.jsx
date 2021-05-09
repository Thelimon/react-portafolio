import styled from 'styled-components';

export const FooterBgColor = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 300;
  padding: 2rem;
  background-color: #303841;
  border-top: 4px solid #be3144;
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`

const FooterMainP = styled.p`
  margin: 2rem;
  color: #f0f0f0;
  font-size: 1.2rem;
  @media (min-width: 768px){
    font-size: 1.6rem;
  }
  @media (min-width: 1024px){
    font-size: 1.4rem;
  }
`

const FooterSecondaryP = styled.p`
  margin: 0;
  color: #f0f0f0;
  font-size: 1.2rem;
  @media (min-width: 768px){
    font-size: 1.6rem; 
  }
  @media (min-width: 1024px){
    font-size: 1.4rem;
  }
`

export const FooterMainPstyled = ({name})=> <FooterMainP>{name}</FooterMainP>
export const FooterSecondaryPstyles = ({name})=> <FooterSecondaryP>{name}</FooterSecondaryP>
