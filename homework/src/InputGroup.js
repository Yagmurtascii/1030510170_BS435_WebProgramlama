import Form from "react-bootstrap/Form";
import {Button, Col, Container, InputGroup, ProgressBar, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Generate from "./GenerateRandom";
import {CircularProgressbar} from "react-circular-progressbar";

function Input({isTimeOrChance}) {
    const [randomNumber, setRandomNumber] = useState(Generate);
    const [guessNumber, setGuessNumber] = useState('');
    const [count, setCount] = useState(5);
    const [messages, setMessages] = useState("");
    const [bar, setBar] = useState(50);
    const [variant, setVariant] = useState("");
    const [second, setSecond] = useState(20);
    const [isCounting, setIsCounting] = useState(false); // Geriye sayımın devam edip etmediğini kontrol etmek için kullanılır
    let button;
    let input;
    const [buttonVisible, setButtonVisible] = useState(true);

    const handleGuessChange = (event) => {
        setGuessNumber(document.getElementById('inputGroup').value);
    };

    useEffect(() => {
        button = document.getElementById('guessButton');
        input = document.getElementById('inputGroup');
        if (isTimeOrChance === false) {
            button.disabled = true

        }

        let countdown;
        if (isCounting && second > 0) //butona basıldığında işlemi başlatmak adına bir değişken konur.
        {
            button.disabled = false;

            countdown = setInterval(() => {
                setSecond((prevSecond) => prevSecond - 1); //azaltma işlemi
            }, 1000); //  1 saniye
        }

        if (second <= 0) {
            clearInterval(countdown);
            const button = document.getElementById('guessButton');
            const input = document.getElementById('inputGroup');
            if (button) {
                button.disabled = true;
                input.disabled = true;
            }
        }

        return () => {
            clearInterval(countdown); //zamanlayıcı temizlenir
        };

    }, [second]) //second her güncellendiğinde useEffect tekrardan çalışır.


    const startCountdown = () => {
        if (second > 0) {
            setSecond(prevSecond => prevSecond - 1);
        }
        setIsCounting(true); // butona tıklanınca useEffect çalışmasını tetikler.
        setButtonVisible(false);
    };

    const check = () => {

        if (isTimeOrChance === false) // isTimeOrChance true ise zaman false is chance
        {
            if (second >= 0) {
                if (guessNumber <= 100 && guessNumber >= 0) {
                    if (guessNumber < randomNumber) {
                        setMessages("ARTTIR");
                    } else if (guessNumber > randomNumber) {
                        setMessages("AZALT");
                    } else {
                        setMessages("BULDUN!");
                        setSecond(0);
                    }
                } else {
                    setMessages("Girdiğiniz sayı istenilen aralıkta değil.")
                }

                if (guessNumber === '') {
                    setMessages("Bir değer giriniz")

                }
            }

            if (second === 0) {
                const button = document.getElementById('guessButton');
                const input = document.getElementById('inputGroup');
                if (button) {
                    button.disabled = true;
                    input.disabled = true;
                }
            }
        } else {
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
                        setCount(0)
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
            if (count === 1) {
                if (button) {
                    button.disabled = true;
                    input.disabled = true;
                }
            }
        }
    }
    return (
        <div>
            <Container>
                {isTimeOrChance ? (
                        <Container className="mt-5">
                            <Row className="text-center"><h4>Tahmin hakkı: {count}</h4></Row>
                            <Row className="text-center"><h4>{messages}</h4></Row>
                            <Row><ProgressBar
                                animated
                                className="m-3"
                                variant={variant}
                                now={bar}
                                min={1}
                            >
                            </ProgressBar></Row>
                        </Container>
                    ) :
                    (
                        <Container>
                            <Col> <Button className="m-5" onClick={() => startCountdown()}
                                          style={{visibility: buttonVisible ? 'visible' : 'hidden'}}>BAŞLA</Button></Col>

                            <Row className="text-center"><h4>{messages}</h4></Row>
                            <Col> <CircularProgressbar className="justify-content-center mb-3" value={second}
                                                       text={`${second}`}
                                                       maxValue={20}
                                                       strokeWidth={4} // strokeWidth değerini küçülttük
                                                       styles={{
                                                           root: {width: '150px', height: '150px'}

                                                       }}
                            /></Col>
                        </Container>
                    )
                }

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
    )
        ;
}

export default Input;
