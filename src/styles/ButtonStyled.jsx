import styled from 'styled-components';
import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt';

export const CardArrow = styled(RightArrowAlt)`
  height: 1.1rem; 
  width: 1.3rem; 
`

export const CardBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 33%;
  background-color: #be3144;   
  text-decoration: none;
  color: #f0f0f0;
  @media (min-width: 768px){
    display: grid;
    place-items: center;
  }
`


