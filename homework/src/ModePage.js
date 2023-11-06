import React from 'react';
import {Card} from "react-bootstrap";
import {route} from "./Router";

function ModePage() {
    const divStyle = "d-flex flex-column align-items-center justify-content-center m-5";
    const titleStyle = "text-center"
    const cardStyle = "border-dark bg-info text-center m-2 "

    return (
        <div className={divStyle}>
            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("")}>
                <Card.Body>
                    <Card.Title>ANA SAYFA</Card.Title>
                </Card.Body>
            </Card>
            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("classic")}>
                <Card.Body>
                    <Card.Title className={titleStyle}>KLASİK OYUN</Card.Title>
                    <Card.Text>
                        Oyuncu 5 tahmin hakkını kullanarak random üretilen sayıyı test etmeye çalışır.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("timing")}>
                <Card.Body>
                    <Card.Title>SÜRELİ OYUN</Card.Title>
                    <Card.Text>
                        Oyuncu süreye karşı random üretilen süreyi tahmin etmeye çalışır.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("punishment")}>
                <Card.Body>
                    <Card.Title className={titleStyle}>CEZALI OYUN</Card.Title>
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
