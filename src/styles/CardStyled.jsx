import styled from "styled-components";

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const CardSize = styled.img`
  height: 20.6rem;
  width: 20.3rem;
  object-fit: cover;
`

export const CardFooter = styled.footer`
  background-color: #303841;
  padding: 0;
  max-width: 20.3rem;
`

export const CardParaph = styled.p`
  text-decoration: none;
  color: white;
`