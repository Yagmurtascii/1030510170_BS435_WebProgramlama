import Form from "react-bootstrap/Form";
import {Button, Col, Container, InputGroup, ProgressBar, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {CircularProgressbar} from "react-circular-progressbar";
import {Generate} from "../OtherFunctions/GenerateRandom";
import {correctSound, wrongSound} from "../OtherFunctions/SoundManager";
import {route} from "../Router/Router";
import ThreeFbxModel from "../Loading/Model";
import {Canvas} from "react-three-fiber";

function Input({isTimeOrChance, counts, endvalues, startvalues, times, randomIncreaseDecrease}) {
    const [increaseDecrease, setIncreaseDecrease] = useState(randomIncreaseDecrease)
    const [endValue, setEndValue] = useState(endvalues);
    const [startValue, setStartValue] = useState(startvalues);
    const [randomNumber, setRandomNumber] = useState(Generate(startValue, endValue));
    const [guessNumber, setGuessNumber] = useState('');
    const [count, setCount] = useState(counts);
    const [messages, setMessages] = useState("");
    const [isGameOver, setIsGameOver] = useState("");
    const [isIncreaseDecrease, setIsIncreaseDecrease] = useState("");
    const [bar, setBar] = useState(50);
    const [variant, setVariant] = useState("");
    const [second, setSecond] = useState(times);
    const [isCounting, setIsCounting] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [clue, setClue] = useState("")

    let button;
    let input;
    const [buttonVisible, setButtonVisible] = useState(true);

    const handleGuessChange = (event) => {
        setGuessNumber(document.getElementById('inputGroup').value);
    };

    useEffect(() => {
        button = document.getElementById('guessButton');
        input = document.getElementById('inputGroup');
        if (isTimeOrChance === 1 || count === 0) {
            button.disabled = true
        }
        let countdown;
        if (isCounting && second > 0)
        {
            button.disabled = false;
            countdown = setInterval(() => {
                setSecond((prevSecond) => prevSecond - 1);
            }, 1000); //  1 saniye
        }
        if (second <= 0) {
            clearInterval(countdown);
            if (button) {
                button.disabled = true;
                input.disabled = true;
            }
            if (guessNumber !== randomNumber && messages !== "BULDUN!") {
                setIsGameOver("Hakkınız kalmadı")
                wrongSound()
            }
        } else if (count === 0) {
            if (button) {
                button.disabled = true;
                input.disabled = true;
            }
            if (guessNumber !== randomNumber && messages !== "BULDUN!") {
                setIsGameOver("Hakkınız kalmadı")
                wrongSound()
            }
        }


        return () => {
            clearInterval(countdown);
        };

    }, [second, count, randomNumber])


    const startCountdown = () => {
        if (second > 0) {
            setSecond(prevSecond => prevSecond - 1);
        }
        setIsCounting(true);
        setButtonVisible(false);
    };

    const compare = () => {
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

            const randomIncDec = Math.floor(Math.random() * increaseDecrease);
            const operator = Math.floor(Math.random() * 2);
            if (operator === 0) {

                setRandomNumber(prevState => prevState + randomIncDec);
                if (randomNumber < startValue || randomNumber > endValue) {
                    const randomIncDec = Math.floor(Math.random() * increaseDecrease);
                    setRandomNumber(prevState => prevState + randomIncDec);
                    compare();
                }

                compare();
                setIsIncreaseDecrease("Sayı " + randomIncDec + " arttı.");

            } else {
                setRandomNumber(prevState => prevState - randomIncDec);
                compare();
                setIsIncreaseDecrease("Sayı " + randomIncDec + " azaldı.");

            }
            compare();
        }
    }


    const reload = () => {
        setIsLoading(true);
        setTimeout(() => {

            window.location.reload();
        }, 5000);
    }

    const showClue = () => {
        setClue("Üretilen sayının aralığı başta 0-100 arasındadır.")

    }


    return (
        <div>
            <Row>
                {isLoading && (<>   <Col className="text-center">
                    <Canvas className="mt-5 text-center" style={{width: '100vw', height: '70vh'}}>
                        <ThreeFbxModel/>
                    </Canvas>
                </Col>  </>)}
            </Row>

            {isLoading === false && (<> <Container>
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
                        ) : isTimeOrChance === 3 ?
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
                <Col>
                </Col>
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
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <Button id="guessButton" variant="danger" onClick={() => check()}>TAHMİN ET</Button>
                </Row>
                <Row>
                    <Button onClick={() => route("mode")} className="mt-3">MOD EKRANINA DÖN</Button>
                </Row>
                <Row> <Button onClick={reload} className="mt-3 mb-3 bg-black">YENİDEN OYNA</Button> </Row>
                <Row className="text-end  justify-content-end">
                    <Button style={{width: '10rem'}} onClick={() => showClue()}
                            className="align-content-end bg-warning text-black"
                    >İpucu</Button>
                    <Row className="text-end  justify-content-end">{clue}</Row>
                </Row>
                <br/>
            </Container>
            </>)}
        </div>
    );
}

export default Input;
