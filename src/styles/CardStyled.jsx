import styled from "styled-components";

export const CardGrid = styled.section`
  display: grid;
  place-items: center;
  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    place-items: center;
    text-align: center;
  }
  @media (min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    text-align: center;
  }
`

export const CardSize = styled.img`
  height: 20.6rem;
  width: 19.4rem;
  object-fit: cover;
  @media(min-width: 768px){
    height: 20.6rem;
    width: 20.6rem;
  }
`

export const CardParaph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303841;
  color: white;
  height: 2rem;
  margin: 0 0 2rem;
  font-size: 1.2rem;
`
export const CardAstyle = styled.a`
  border-radius: 2px;    
  text-decoration: none;
`

export const CardArticle = styled.article`
    text-decoration: none;
`

