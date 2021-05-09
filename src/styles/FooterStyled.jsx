import styled from 'styled-components';

export const FooterBgColor = styled.footer`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  padding: 2rem;
  background-color: #303841;
`

const FooterMainP = styled.p`
  margin: 0;
`

const FooterSecondaryP = styled.p`
  margin: 0;
`

export const FooterMainPstyled = ({name})=> <FooterMainP>{name}</FooterMainP>
export const FooterSecondaryPstyles = ({name})=> <FooterSecondaryP>{name}</FooterSecondaryP>
