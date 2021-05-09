import styled from "styled-components";

export const ContactStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  height: 60vh;
  background-color: #303841;
`

export const ContactH2Styled = styled.h2`
  font-size: 2.6rem;
  margin: 6rem 0 2rem 0;
  color: #f0f0f0;
  @media(min-width: 768px) {
    font-size: 4rem;
  }
`

export const ContactPstyled = styled.p`
  font-style: italic;
  color: #f0f0f0;
`