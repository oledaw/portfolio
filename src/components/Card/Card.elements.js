import styled from "styled-components";
import img from "./img.png";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./fonts.css";

export const CardContainer = styled.div`
  margin: 50px 0 50px;
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 1000px;
  min-height: 500px;
  max-height: 80vh;

  @media screen and (max-width: 768px) {
    min-height: 400px;
    max-height: 500px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    min-height: 600px;
    height: 80vh;
    min-width: 280px;
    max-width: 400px;
  }
`;

export const TextContainer = styled.div`
  flex: 50%;
  background: #fff;
  display: flex;
  border-radius: 50px;

  @media screen and (max-width: 600px) {
    flex: 30%;
  }
`;

export const ImageContainer = styled.div`
  flex: 50%;
  display: flex;
  background: #fff;
  border-radius: 0px 50px 50px 0px;

  @media screen and (max-width: 600px) {
    border-radius: 0px 0px 15px 15px;
    flex: 70%;
  }
`;

export const ImageWrapper = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${img});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: cover;
  flex: 100%;
  border-radius: 0px 50px 50px 0px;
  position: relative;

  @media screen and (max-width: 768px) {
    border-radius: 0px 40px 40px 0px;
  }

  @media screen and (max-width: 600px) {
    background-image: linear-gradient(
        rgba(255, 255, 255, 1) 1%,
        rgba(255, 255, 255, 0) 10%
      ),
      url(${img});
    border-radius: 0px 0px 15px 15px;
  }
`;

export const TextWrapper = styled.div`
  background: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 100%;
  border-radius: 50px 0px 0px 50px;

  @media screen and (max-width: 768px) {
    border-radius: 40px 0px 0px 40px;
  }

  @media screen and (max-width: 600px) {
    border-radius: 15px 15px 0px 0px;
  }
`;

export const ContactWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: -5px;
  transform: matrix(0.99, -0.13, 0.14, 0.99, 0, 0);

  @media screen and (max-width: 1030px) {
    bottom: 25px;
    right: -15px;
  }

  @media screen and (max-width: 800px) {
    bottom: 18px;
    right: -5px;
  }

  @media screen and (max-width: 475px) {
    bottom: 15px;
    right: -15px;
  }

  @media screen and (max-width: 300px) {
    bottom: 10px;
    right: -15px;
  }
`;

export const FBIcon = styled(FaFacebook)`
  transform: scale(2.5);
  color: blue;
  margin-right: 50px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    transform: scale(1.8);
    margin-right: 30px;
  }

  @media screen and (max-width: 600px) {
    transform: scale(1.6);
    margin-right: 30px;
  }
`;

export const INIcon = styled(FaLinkedin)`
  transform: scale(2.5);
  color: blue;
  margin-right: 50px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    transform: scale(1.8);
    margin-right: 30px;
  }

  @media screen and (max-width: 600px) {
    transform: scale(1.6);
    margin-right: 30px;
  }
`;

export const GHIcon = styled(FaGithub)`
  transform: scale(2.5);
  color: black;
  margin-right: 50px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    transform: scale(1.8);
    margin-right: 30px;
  }

  @media screen and (max-width: 600px) {
    transform: scale(1.6);
    margin-right: 30px;
  }
`;

export const Name = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 30px;
  border-bottom: 2px solid #f8a88b;

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const Position = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
`;

export const Idea12 = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 30px;
  font-style: italic;
  margin: 25px 0 0 0;
`;

export const Idea22 = styled.span`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: 200;
`;
