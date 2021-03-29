import React from "react";
import {
  CardContainer,
  ImageContainer,
  ImageWrapper,
  TextWrapper,
  ContactWrapper,
  FBIcon,
  INIcon,
  GHIcon,
  TextContainer,
  Name,
  Position,
  Idea12,
  Idea22,
} from "./Card.elements";
import { data } from "./data";

const Card = () => {
  return (
    <CardContainer>
      <TextContainer>
        <TextWrapper>
          <Name> {data.name} </Name>
          <Position> {data.position} </Position>
          <Idea12> {data.quote12} </Idea12>
          <Idea22> {data.quote22} </Idea22>
        </TextWrapper>
      </TextContainer>
      <ImageContainer>
        <ImageWrapper>
          <ContactWrapper>
            <a target="_blank" href={data.facebook}>
              <FBIcon />
            </a>
            <a target="_blank" href={data.linkedin}>
              <INIcon />
            </a>
            <a target="_blank" href={data.github}>
              <GHIcon />
            </a>
          </ContactWrapper>
        </ImageWrapper>
      </ImageContainer>
    </CardContainer>
  );
};

export default Card;
