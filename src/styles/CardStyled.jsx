import styled from "styled-components";

export const CardGrid = styled.section`
  display: grid;
  
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
  width: 20.3rem;
  object-fit: cover;
`

export const CardParaph = styled.p`
  background-color: #303841;
  text-decoration: none;
  color: white;
  height: 2rem;
`
export const CardAstyle = styled.a`
  box-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
  border-radius: 2px;    
`

export const CardArticle = styled.article`
    text-decoration: none;
`

