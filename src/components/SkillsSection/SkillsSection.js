import React, { useState } from 'react';
import { InfoSec, TextContainer, ButtonContainer, Header, Text, Button, CardContainer, SkillsContainer, CardWrapper, CardFront, CardBack } from './SkillsSection.elements';

const SkillsSection = (props) => {
    console.log(props);

    const [show, setShow] = useState(true)



    let contentLeader = <div className="content">
        <li>example Leader</li>
        <li>example Leader</li>
        <li>example Leader</li>
        <li>example Leader</li>
        <li>example Leader</li>
        <li>example Leader</li>
    </div>;


    let contentTech = <div className="content">
        <li>example Tech</li>
        <li>example Tech</li>
        <li>example Tech</li>
        <li>example Tech</li>
        <li>example Tech</li>
        <li>example Tech</li>
    </div>;

    let aaa='rotateY(180deg)';

    return (
        <InfoSec id="skills">
            <SkillsContainer>
                <TextContainer>
                    <Header>Skills</Header>
                    <Text>As Project Manager I combining leadership & technical skills</Text>
                    <ButtonContainer>
                        <Button onClick={() => setShow(!show)}>{show?"leader":"Technology"}</Button>
                    </ButtonContainer>
                </TextContainer>

                <CardContainer>
                    <CardWrapper show={show}>
                        <CardFront>
                            {contentLeader}
                        </CardFront>
                        <CardBack>
                            {contentTech}
                        </CardBack>
                    </CardWrapper>
                </CardContainer>

            </SkillsContainer>
        </InfoSec>
    );
};

export default SkillsSection;
