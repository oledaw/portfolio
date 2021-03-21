import React from 'react';
import { InfoSec } from './FooterSection.elements';
import Footer from '../Footer/Footer';

const FooterSection = (props) => {
    console.log(props);
    return (
            <InfoSec>   
                <Footer/>
            </InfoSec>
    );
};

export default FooterSection;
