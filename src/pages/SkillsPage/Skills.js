import React from 'react';
import { SkillsSection } from '../../components';
import {homeObject} from './Data'

const Skills = () => {
    return (
        <>
            <SkillsSection {...homeObject}/>
        </>
    );
};

export default Skills;
