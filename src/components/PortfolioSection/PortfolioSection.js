import React from 'react';
import { InfoSec } from './PortfolioSection.elements';
import  CardP  from '../CardP/CardP'

const PortfolioSection = (props) => {
    console.log(props);
    return (
            <InfoSec id="portfolio">   
                <CardP {...props}/>
            </InfoSec>
    );
};

export default PortfolioSection;
