import styled from 'styled-components'
import img from './img.jpg'
import './fonts.css';

export const CardContainer = styled.div`
margin-top: 50px;
margin-bottom: 50px;
filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
display: flex;
flex-direction: row;
width: 90%;
max-width: 1000px;
height: 450px;

@media screen and (max-width: 768px){
        height: 400px;
}

@media screen and (max-width: 600px){
        flex-direction: column;
        height: 700px;
        min-width: 280px;
        max-width: 400px;
}
`

export const TextContainer = styled.div`
flex: 50%;
background: #fff;
width: 100%;
display: flex;
border-radius: 50px;

@media screen and (max-width: 600px){
        flex: 40%;
}
`

export const ImageContainer = styled.div`
flex: 50%;
display: flex;
background: #fff;
border-radius: 0px 50px 50px 0px;


@media screen and (max-width: 600px){
        border-radius: 0px 0px 15px 15px;
        flex: 50%;
}
`

export const ImageWrapper = styled.div`
        background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0) 80% ,rgba(255, 255, 255, 1) 100%),
        url(${img});
        background-position: center top;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position:cover;
        flex: 100%;
        border-radius: 0px 50px 50px 0px;

        
   
@media screen and (max-width: 992px){
        border-radius: 0px 50px 50px 0px;
        
}

@media screen and (max-width: 768px){
        border-radius: 0px 40px 40px 0px;
       
}

@media screen and (max-width: 600px){
        background-image:
    linear-gradient(rgba(255, 255, 255, 1) 1% ,rgba(255, 255, 255, 0) 10%),
    url(${img});
        border-radius: 0px 0px 15px 15px;
}

`

export const TextWrapper = styled.div`
        background: #fff;
        color: black;
        text-align: center;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex: 100%;
        border-radius: 50px 0px 0px 50px;
        
        @media screen and (max-width: 768px){
                border-radius: 40px 0px 0px 40px;
        }

        @media screen and (max-width: 600px){
                border-radius: 15px 15px 0px 0px;
        }
`


export const Name = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 30px;
text-align: left;
/* background-color: #888111; */
border-bottom: 2px solid #F8A88B;

@media screen and (max-width: 600px){
        margin-top: 10px;

}
`

export const Position = styled.span`
font-family: 'Roboto', sans-serif;
font-weight: 300;
font-size: 20px;
text-align: left;
/* background-color: #999888; */


`

export const Idea12 = styled.span`
font-family: 'Roboto', sans-serif;
font-weight: 200;
font-size: 30px;
font-style: italic;
text-align: center;
/* background-color: #888111; */
margin-top: 25px;

`

export const Idea22 = styled.span`
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
font-weight: 200;
/* background-color: #888; */
`

export const ButtonContainer = styled.div`
color: #fff;
display: flex;
flex-direction: row;
justify-content: center;
width: 90%;
height: auto;
margin-top: 30px;
`

export const Button = styled.button`
  border-radius: 20px;
  background: #00D1FF;
  white-space: nowrap;
  padding: 15px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  list-style-type: none;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: orange;
  }
`;

export const BulletContainer = styled.div`
height:100%;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);  
    border-radius: 0px 50px 50px 0px;
    display: flex;
visibility: ${({click})=>click ? 'hidden': '0'};
opacity: ${({click})=>click ? '0': '1'};
transition: opacity 600ms, visibility 1000ms;
    align-items: center;
    justify-content: center;

       
@media screen and (max-width: 992px){
        border-radius: 0px 50px 50px 0px;
}

@media screen and (max-width: 768px){
        border-radius: 0px 40px 40px 0px;
}

@media screen and (max-width: 600px){
        border-radius: 0px 0px 15px 15px;
}
`

export const BulletWrapper = styled.div`

`