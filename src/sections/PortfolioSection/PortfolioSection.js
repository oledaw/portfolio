import React from "react";
import { InfoSec } from "./PortfolioSection.elements";
import CardCarousel from "../../components/CardCarusel/CardCarousel";

const PortfolioSection = (props) => {
  console.log(props);
  return (
    <InfoSec id="portfolio">
      <CardCarousel />
    </InfoSec>
  );
};

export default PortfolioSection;
