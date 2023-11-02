import React, {useState} from 'react';
import {Button, Col, Container, InputGroup, ProgressBar, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Generate from "./GenerateRandom";



function ClassicMode() {
    const [randomNumber, setRandomNumber] = useState(Generate);
    const [guessNumber, setGuessNumber] = useState('');
    const [count, setCount] = useState(5);
    const [messages, setMessages] = useState("");
    const [bar,setBar]=useState(50);
    const [variant,setVariant]=useState("");
    const handleGuessChange = (event) => {
        setGuessNumber(document.getElementById('inputGroup').value);
    };

    const check = () => {

        if (count >= 0) {
            setCount(prevCount => prevCount - 1);
            if (guessNumber <= 100 && guessNumber >= 0) {
                if (guessNumber < randomNumber) {
                    setMessages("ARTTIR");
                    setBar(prevbar => prevbar + 10)
                    setVariant("danger");
                } else if (guessNumber > randomNumber) {
                    setMessages("AZALT");
                    setBar(prevbar => prevbar - 10)
                    setVariant("warning");
                } else {
                    setMessages("BULDUN!");

                    setBar(50);
                    setVariant("success");
                }
            } else {
                setMessages("Girdiğiniz sayı istenilen aralıkta değil.")

            }


            if (guessNumber === '') {
                setMessages("Bir değer giriniz")
                setBar(50);
                setVariant("primary");
            }
        }

    }

    if (count === 1) {
        const button = document.getElementById('guessButton');
        const input = document.getElementById('inputGroup');
        if (button) {
            button.disabled = true;
            input.disabled = true;
        }
    }

    return (
        <div style={{marginTop: 15 + 'em'}}>
            <Container>

                <Row className="text-center"><h4>Tahmin hakkı: {count}</h4></Row>
                <Row className="text-center"><h4>{messages}</h4></Row>
                <Row><ProgressBar
                    className="m-3"
                    variant={variant}
                    now={bar}
                    min={1}
                >

                </ProgressBar></Row>
                <Row>
                    <Col>
                        <h4>Random Number: {randomNumber}</h4>
                    </Col>
                    <Col></Col>
                    <Col><h4>TAHMİN EDİLEN SAYI: {guessNumber}</h4></Col>
                </Row>
                <Row>
                    <InputGroup className="mb-3">
                        <Form.Control
                            id="inputGroup"
                            placeholder="TAHMİNDE BULUNMAK İSTEDİĞİNİZ SAYIYI GİRİN"
                            value={guessNumber}
                            onChange={handleGuessChange}
                            type="number"
                            max={100}
                            min={0}
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <Button id="guessButton" variant="danger" onClick={() => check()}>TAHMİN ET</Button>
                </Row>
            </Container>
        </div>
    );
}

export default ClassicMode;
