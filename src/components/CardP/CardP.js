import React, { useState } from "react";
import {
  CardContainer,
  ImageContainer,
  Button,
  BulletContainer,
  BulletWrapper,
  ButtonContainer,
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
} from "./CardP.elements";

const CardP = ({ portfolioTitle, portfolioQuote }) => {
  const [project, setProject] = useState(false);
  const [click, setClick] = useState(false);

  let contentProjects = (
    <div className="content">
      <li>example Leader</li>
      <li>example Leader</li>
      <li>example Leader</li>
      <li>example Leader</li>
      <li>example Leader</li>
      <li>example Leader</li>
    </div>
  );

  let contentPMProjects = (
    <div className="content">
      <li>example Tech</li>
      <li>example Tech</li>
      <li>example Tech</li>
      <li>example Tech</li>
      <li>example Tech</li>
      <li>example Tech</li>
    </div>
  );

  return (
    <CardContainer>
      <TextContainer>
        <TextWrapper>
          <Name onClick={() => setClick(!click)}> {portfolioTitle} </Name>
          <Idea12> {portfolioQuote} </Idea12>
          <ButtonContainer>
            <Button
              onClick={() => {
                setProject(!project);
              }}
            >
              {project
                ? "Realized 7 projects as PM"
                : "Contributed in 10 projects"}
            </Button>
          </ButtonContainer>
        </TextWrapper>
      </TextContainer>
      <ImageContainer>
        <ImageWrapper>
          <BulletContainer click={click}>
            <BulletWrapper>
              {project ? contentProjects : contentPMProjects}
            </BulletWrapper>
          </BulletContainer>
        </ImageWrapper>
      </ImageContainer>
    </CardContainer>
  );
};

export default CardP;
