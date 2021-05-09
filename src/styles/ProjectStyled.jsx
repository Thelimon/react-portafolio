import styled from 'styled-components';

export const ProjectBgColor =  styled.main`
  padding: 10rem 2rem;
  background-color: #45567d;
`
const ProjectTitleStyled = styled.h2`
  text-align: center;
  max-width: 40rem;
  margin: 0 auto 6rem auto;
  border-bottom: 0.2rem solid #f0f0f0;
  font-size: 2.5rem;
  color: #f0f0f0;
`

export const TitleStiled =({name}) => <ProjectTitleStyled>{name}</ProjectTitleStyled>
