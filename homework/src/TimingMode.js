import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {Container} from "react-bootstrap";
import Input from "./InputGroup";

function TimingMode() {
    return (
        <div>
            <Container className="text-center">
                <Input isTimeOrChance={false}></Input>
            </Container>
        </div>
    );
}

export default TimingMode;
