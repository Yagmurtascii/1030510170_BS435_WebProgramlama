import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {Container} from "react-bootstrap";
import Input from "../GeneralAlgorithm/InputGroup";

function TimingMode({ time,endValue,startValue }) {

    const finalTime = time !== undefined ? time : 20;
    const finalEndValue = endValue !== undefined ? endValue : 100;
    const finalStartValue = startValue !== undefined ? startValue : 1;
    return (
        <div>
            <Container className="text-center">
                <Input isTimeOrChance={1} times={finalTime} startvalues={finalStartValue} endvalues={finalEndValue}></Input>
            </Container>
        </div>
    );
}

export default TimingMode;
