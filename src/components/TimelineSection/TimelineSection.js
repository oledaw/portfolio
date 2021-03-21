import React from 'react';
import { InfoSec } from './TimelineSection.elements';
import Timeline from '../Timeline/Timeline';

const TimelineSection = (props) => {
    console.log(props);
    return (
            <InfoSec id="career">   
                <Timeline/>
            </InfoSec>
    );
};

export default TimelineSection;
