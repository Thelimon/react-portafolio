import styled from 'styled-components';
import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt';

export const CardArrow = styled(RightArrowAlt)`
  height: 1.1rem; 
  width: 1.3rem; 
  @media (min-width: 768px){
    height: 1.3rem;
  }
`

export const CardBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.2rem;
  width: 33%;
  border-radius: 2px;
  background-color: #303841;   
  text-decoration: none;
  color: #f0f0f0;
  margin-top: 3rem;
  transition: transform 0.3s ease-out;
  &&:hover{
    transition: background 0.3s ease-out;
    ${CardArrow}{
      transform: translateX(2px);
      transition: transform 0.3s ease-out;
    }
    background-color: #be3144;
  }
  @media (min-width: 768px){
    display: flex;
    width: 20%;
    height: 2.5rem;
    font-size: 1.3rem;
  }
  @media (min-width: 1024px){
    width: 10%;
  }
`
export const CardDivBtnContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`


