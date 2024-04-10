import { useState } from 'react';
import styled from 'styled-components';

interface ToggleButtonInterface {
    isActive: boolean;
}

const ToggleButtonSection = styled.div`
    display: flex;
    margin: 32px 0 32px;
    justify-content: center;
    align-items: flex-start;
    gap: -1px;
`;

const ToggleButton = styled.button<ToggleButtonInterface>`
    width: 108px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 0px 100px 100px 0px;
    background-color: ${(props) => (props.isActive ? '#046AD0' : '#FFF')};
    border: 1px solid var(--Neutral-neutral-30, #c2c7d0);
    padding: 10px 12px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    color: ${(props) => (props.isActive ? '#FFF' : '#046AD')};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
`;

const LinkedinButton = styled(ToggleButton)`
    justify-content: flex-end;
    border-radius: 100px 0px 0px 100px;
`;
const CurriculoButton = styled(ToggleButton)`
    justify-content: flex-start;
    border-radius: 0px 100px 100px 0px;
    border-left: 0;
`;

const ToggleLinkedinCurriculoButton = () => {
    const [activeButton, setActiveButton] = useState('linkedinButton');

    return (
        <ToggleButtonSection>
            <LinkedinButton
                isActive={activeButton === 'linkedinButton'}
                onClick={() => setActiveButton('linkedinButton')}
            >
                Lindedin
            </LinkedinButton>

            <CurriculoButton
                isActive={activeButton === 'curriculoButton'}
                onClick={() => setActiveButton('curriculoButton')}
            >
                Currículo
            </CurriculoButton>
        </ToggleButtonSection>
    );
};

export default ToggleLinkedinCurriculoButton;