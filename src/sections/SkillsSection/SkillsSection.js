import React, { useState } from "react";
import {
  InfoSec,
  TextContainer,
  ButtonContainer,
  Text,
  Button,
  CardContainer,
  SkillsContainer,
  CardWrapper,
  CardFront,
  CardBack,
} from "./SkillsSection.elements";

const SkillsSection = (props) => {
  console.log(props);

  const [show, setShow] = useState(true);

  let contentLeader = (
    <div className="content" style={{}}>
      <span style={{ fontSize: "30px", lineHeight: "60px" }}>
        Leadership skills:
      </span>
      <ul
        style={{
          lineHeight: "30px",
          textAlign: "left",
          paddingLeft: "40px",
          paddingRight: "10px",
        }}
      >
        <li>
          <b>RAID</b> Project Management
        </li>
        <li>
          Developing <b>Product Delivery</b> Process
        </li>
        <li>
          Keeping up-to-date <b>Roadmaps</b> for each project
        </li>
        <li>
          <b>Agile Development</b> with <b>Project Increments</b> and{" "}
          <b>Scrumban</b> Methodology
        </li>
        <li>
          <b>PRINCE2</b> during Project Stages
        </li>
      </ul>
    </div>
  );

  let contentTech = (
    <div className="content" style={{}}>
      <span style={{ fontSize: "30px", lineHeight: "60px" }}>
        Technical skills:
      </span>
      <ul
        style={{
          fontSize: "15px",
          lineHeight: "30px",
          textAlign: "left",
          paddingLeft: "40px",
          paddingRight: "10px",
        }}
      >
        <li>
          <b>AWS</b> - Simple API for Stock Exchange Rate with <b>Lambda</b>
        </li>
        <li>
          <b>Java</b> - Microservices Web App with <b>Spring</b>
        </li>
        <li>
          <b>React.js</b> - Portfolio Website
        </li>
        <li>MS Word/Powerpoint/Office 365/Teams - advanced</li>
        <li>
          <b>JIRA / Big Picture</b> - advanced
        </li>
        <li>
          <b>MS Excel</b> - intermediate
        </li>
        <li>Design Patterns & Algorithms - basic</li>
        <li>Python - basic</li>
      </ul>
    </div>
  );

  let aaa = "rotateY(180deg)";

  return (
    <InfoSec id="skills">
      <SkillsContainer>
        <TextContainer>
          <h1>Skills</h1>
          <Text>
            As Project Manager I combine Leadership & Technical skills
          </Text>
          <ButtonContainer>
            <Button onClick={() => setShow(!show)}>
              {show ? "Check Tech Skills" : "Check Leader Skills"}
            </Button>
          </ButtonContainer>
        </TextContainer>

        <CardContainer>
          <CardWrapper show={show}>
            <CardFront>{contentLeader}</CardFront>
            <CardBack>{contentTech}</CardBack>
          </CardWrapper>
        </CardContainer>
      </SkillsContainer>
    </InfoSec>
  );
};

export default SkillsSection;
