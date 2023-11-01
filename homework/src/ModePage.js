import React from 'react';
import MainPage from "./MainPage";
import ClassicMode from "./ClassicMode";
import {Card, Col, Row} from "react-bootstrap";
function ModePage() {
    const divStyle = "d-flex flex-column align-items-center justify-content-center m-5";
    const buttonStyle="btn btn-success btn-lg p-5 m-3 btn-"
    const playSound = () => {
        const ses = new Audio('buttonAudio.mp3');
        ses.play();
    };
    const route=(name)=>
    {
        playSound();
        setTimeout(() => {
            window.location.href = `/${name}`;
        }, 100);
    }

    return (
        <div className={divStyle} >
            <Card className="m-3" border="dark" bg="info" style={{ width: '18rem'}} onClick={() => route("classic")}>
                <Card.Body >
                    <Card.Title >KLASİK OYUN</Card.Title>
                    <Card.Text>
                        Oyuncu 5 tahmin hakkını kullanarak random üretilen sayıyı test etmeye çalışır.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="m-3" border="dark" bg="info" style={{ width: '18rem' }} onClick={() => route("timing")}>
                <Card.Body >
                    <Card.Title >SÜRELİ OYUN</Card.Title>
                    <Card.Text>
                        Oyuncu süreye karşı random üretilen süreyi tahmin etmeye çalışır.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="m-3" border="dark" bg="info" style={{ width: '18rem'}} onClick={() => route("punishment")}>
                <Card.Body >
                    <Card.Title >CEZALI OYUN</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ModePage;
