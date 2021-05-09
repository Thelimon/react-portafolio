import styled from "styled-components";

export const HeaderBackground = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%)
`

const H1styled = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: #f0f0f0;
`

const PStyled = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 100;
  font-style: italic;
  color: #be3144;
`

export const HeaderH1 =  ({name}) => <H1styled>{name}</H1styled>;
export const HeaderP = ({name}) => <PStyled>{name}</PStyled>;