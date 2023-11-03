import React, {useState} from 'react';
import {Container, Row} from "react-bootstrap";
import Input from "./InputGroup";

function ClassicMode() {
    const [count, setCount] = useState(5);
    const [messages, setMessages] = useState("");
    const [bar, setBar] = useState(50);
    const [variant, setVariant] = useState("");
    return (
        <div>
            <Container>
                <Row><Input isTimeOrChance={true}></Input></Row>
            </Container>
        </div>
    );
}

export default ClassicMode;
