import styled from 'styled-components'
import { Container } from '../../globalStyles'
import './fonts.css';

export const InfoSec = styled.div`
color: #fff;
background-color: white;
display: flex;
flex-direction: row;
justify-content: center;
`

export const SkillsContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;

display: flex;
flex-direction: row;
width: 90%;
max-width: 1000px;
min-height: 500px;
max-height: 80vh;


@media screen and (max-width: 768px){
        min-height: 400px;
        max-height: 500px;
}

@media screen and (max-width: 600px){
        flex-direction: column;
        min-height: 600px;
        height: 80vh;
        min-width: 280px;
        max-width: 400px;

}


`

export const TextContainer = styled.div`
color: black;
display: flex;
flex-direction: column;
justify-content: center;
flex: 50%;
align-items: center;

@media screen and (max-width: 600px){
        flex:40%;

}
`

export const ButtonContainer = styled.div`
color: #fff;
display: flex;
flex-direction: row;
justify-content: center;
width: auto;
height: auto;
margin-top: 30px;
`

export const CardContainer = styled.div`
color: #123;
text-align: center;
background-color: white ;
border-radius: 20px;
display: flex;
flex-direction: column;
position:relative;
justify-content: center;
flex: 50%;

@media screen and (max-width: 600px){
        flex:60%;
}


`

export const CardWrapper = styled.div`
position: absolute;
width: 100%;
height: 100%;
justify-content: center;
text-align: center;
transform-style: preserve-3d;
transition: all 0.5s ease;
transform: ${({show})=>!show ? 'rotateY(180deg)': 'rotateY(0deg)'}; 

`

export const CardFront = styled.div`
position: absolute;
text-align: center;
width: 100%;
height: 100%;
backface-visibility: hidden;
display: flex;
flex-direction: column;
justify-content: center;
color: black; 
border-radius: 20px;
background-color: white ;
filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));

.content{
        background-color: gray;
}
`

export const CardBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
display: flex;
flex-direction: column;
justify-content: center;
color: black; 
transform: rotateY(180deg);
border-radius: 20px;
background-color: white ;
filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));

.content{
        background-color: gray;
}
`





export const Header = styled.h1`
text-align: center;
font-size: 30px;
font-family: 'Montserrat', sans-serif;
`

export const Text = styled.h2`
text-align: center;
font-size: 20px;
font-family: 'Montserrat', sans-serif;
padding: 10px
`

export const Button = styled.button`
  border-radius: 20px;
  background: coral;
  white-space: nowrap;
  padding: 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: orange;
  }
`
