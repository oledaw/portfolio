import React from 'react';
import { HomeSection, SkillsSection, PorfolioSection, TimelineSection } from '../../components';
import FooterSection from '../../components/FooterSection/FooterSection';
import {homeObject} from './Data'

const Home = () => {
    return (
        <>
            <HomeSection {...homeObject}/>
            <SkillsSection {...homeObject}/>
            <PorfolioSection {...homeObject}/>
            <TimelineSection />
            <FooterSection />
        </>
    );
};

export default Home;
