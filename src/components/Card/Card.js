import React from 'react'
import { CardContainer, ImageContainer, ImageWrapper, TextWrapper, ContactWrapper, FBIcon, INIcon, GHIcon, TextContainer, Name, Position, Idea12, Idea22 } from './Card.elements'

const Card = ({myname, position, idea12, idea22}) => {
    return (
        <CardContainer>
            <TextContainer>
                <TextWrapper>
                    <Name> {myname} </Name>
                    <Position > {position} </Position>
                    <Idea12> {idea12} </Idea12>
                    <Idea22> {idea22} </Idea22> 
                </TextWrapper>
            </TextContainer>
            <ImageContainer>
                <ImageWrapper >
                    <ContactWrapper>
                        <FBIcon />
                        <INIcon />
                        <GHIcon />
                    </ContactWrapper>
                </ImageWrapper>
            </ImageContainer>
        </CardContainer>
    )
}

export default Card
