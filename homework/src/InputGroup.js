import Form from "react-bootstrap/Form";
import {Button, Col, Container, InputGroup, ProgressBar, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import {CircularProgressbar} from "react-circular-progressbar";
import {Generate} from "./GenerateRandom";
import {correctSound, wrong, wrongSound} from "./SoundManager";

function Input({isTimeOrChance}) {
    const [randomNumber, setRandomNumber] = useState(Generate(0));
    const [guessNumber, setGuessNumber] = useState('');
    const [count, setCount] = useState(5);
    const [messages, setMessages] = useState("");
    const [isGameOver, setIsGameOver] = useState("");
    const [isIncreaseDecrease, setIsIncreaseDecrease] = useState("");
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

    const changePage = () => {
        window.location.href = '/mode';
    }

    useEffect(() => {
        button = document.getElementById('guessButton');
        input = document.getElementById('inputGroup');
        if (isTimeOrChance === 1 || count === 0) {
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
            if (button) {
                button.disabled = true;
                input.disabled = true;
            }
            if (guessNumber !== randomNumber &&messages!=="BULDUN!") {
                setIsGameOver("Hakkınız kalmadı")
                wrongSound()
            }
        } else if (count === 0) {
            if (button) {
                button.disabled = true;
                input.disabled = true;
            }
            if (guessNumber !== randomNumber && messages!=="BULDUN!") {
                setIsGameOver("Hakkınız kalmadı")
                wrongSound()
            }
        }


        return () => {
            clearInterval(countdown); //zamanlayıcı temizlenir
        };

    }, [second, count, randomNumber]) //second her güncellendiğinde useEffect tekrardan çalışır.


    const startCountdown = () => {
        if (second > 0) {
            setSecond(prevSecond => prevSecond - 1);
        }
        setIsCounting(true); // butona tıklanınca useEffect çalışmasını tetikler.
        setButtonVisible(false);
    };

    const compare = () => {
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
                correctSound()
                setRandomNumber(randomNumber)
                setIsIncreaseDecrease("");
                setBar(50);
                setVariant("success");
                if (isTimeOrChance === 1) {
                    setSecond(0)
                } else {
                    setCount(0)
                }

            }
        } else {
            setMessages("Girdiğiniz sayı istenilen aralıkta değil.")
            setRandomNumber(randomNumber)
            setIsIncreaseDecrease("");
            wrongSound()
        }
        if (guessNumber === '') {
            setMessages("Bir değer giriniz")
            setBar(50);
            setVariant("primary");
            wrongSound()
        }
    }
    const check = () => {
        if (isTimeOrChance === 1) {
            if (second >= 0) {
                compare();
                handleGuessChange();
            }
        } else if (isTimeOrChance === 0) {
            if (count > 0) {
                setCount(prevCount => prevCount - 1);
                compare();
                handleGuessChange();
            }
        } else {


            const randomIncDec = Math.floor(Math.random() * 5);
            const operator = Math.floor(Math.random() * 2);
            if (operator === 0) {
                setRandomNumber(prevState => prevState + randomIncDec);

                setIsIncreaseDecrease("Sayı " + randomIncDec + " arttı.");

            } else {
                setRandomNumber(prevState => prevState - randomIncDec);

                setIsIncreaseDecrease("Sayı " + randomIncDec + " azaldı.");

            }
            compare();


        }
    }


    return (
        <div>
            <Container>
                {isTimeOrChance === 0 ? (
                    <Container className="mt-5">
                        <Row className="text-center"><h4>Tahmin hakkı: {count}</h4></Row>
                        <Row className="text-center"><h4>{messages}</h4></Row>
                        <Row className="text-center"><h4>{isGameOver}</h4></Row>
                        <Row><ProgressBar
                            animated
                            className="m-3"
                            variant={variant}
                            now={bar}
                            min={1}
                        >
                        </ProgressBar></Row>
                    </Container>
                ) : isTimeOrChance === 1 ?
                    (
                        <Container>
                            <Col> <Button className="m-5"
                                          onClick={() => startCountdown()}
                                          style={{visibility: buttonVisible ? 'visible' : 'hidden'}}>
                                BAŞLA</Button></Col>
                            <Row className="text-center"><h4>{messages}</h4></Row>
                            <Row className="text-center"><h4>{isGameOver}</h4></Row>
                            <Col> <CircularProgressbar className="justify-content-center mb-3" value={second}
                                                       text={`${second}`}
                                                       maxValue={20}
                                                       strokeWidth={4} // strokeWidth değerini küçülttük
                                                       styles={{
                                                           root: {width: '150px', height: '150px'}
                                                       }}
                            /></Col>
                        </Container>
                    ) : isTimeOrChance === 2 ?
                        (
                            <Container className="mt-5">
                                <Row className="text-center"><h4>{messages}</h4></Row>
                                <Row className="text-center"><h4>{isIncreaseDecrease}</h4></Row>
                                <Row className="text-center"><h4>{isGameOver}</h4></Row>
                            </Container>
                        ) :isTimeOrChance === 3 ?
                            (
                                <Container className="mt-5">
                                    <Row className="text-center"><h4>{messages}</h4></Row>
                                    <Row className="text-center"><h4>{isIncreaseDecrease}</h4></Row>
                                    <Row className="text-center"><h4>{isGameOver}</h4></Row>
                                </Container>
                            ) :
                        (
                            <div></div>
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
                <Row>
                    <Button onClick={changePage} className="mt-3">MOD EKRANINA DÖN</Button>
                </Row>

            </Container>
        </div>
    );
}

export default Input;
