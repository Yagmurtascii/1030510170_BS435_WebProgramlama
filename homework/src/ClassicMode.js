import React from 'react';
import {Container, Row} from "react-bootstrap";
import Input from "./InputGroup";

function ClassicMode() {
    return (
        <div>
            <Container>
                <Row><Input isTimeOrChance={true}></Input></Row>
            </Container>
        </div>
    );
}

export default ClassicMode;
