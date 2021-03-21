import React from 'react';
import { InfoSec } from './HomeSection.elements';
import  Card  from '../Card/Card'

const HomeSection = (props) => {
    console.log(props);
    return (
            <InfoSec id="home">   
                <Card {...props}/>
            </InfoSec>
    );
};

export default HomeSection;
