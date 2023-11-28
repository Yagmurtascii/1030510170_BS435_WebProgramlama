import React from 'react';
import {Card} from "react-bootstrap";
import {route} from "./Router";

function ModePage() {
    const divStyle = "d-flex flex-column align-items-center justify-content-center m-4";
    const titleStyle = "text-center"
    const cardStyle = "border-dark bg-danger text-center m-2 "
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
                        Oyuncu <i><b>5 tahmin hakkını </b></i> kullanarak random üretilen sayıyı tahmin etmeye çalışır.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("timing")}>
                <Card.Body>
                    <Card.Title>SÜRELİ OYUN</Card.Title>
                    <Card.Text>
                        Oyuncu <i><b>süreye </b></i> karşı random üretilen sayıyı tahmin etmeye çalışır.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("punishment")}>
                <Card.Body>
                    <Card.Title className={titleStyle}>CEZALI OYUN</Card.Title>
                    <Card.Text>
                        Oyuncunun her yanlış cevabında random üretilen sayı değişir. <i><b>Değişen sayı daha önce
                        girdiğiniz sayı olabilir! </b></i>
                        Bu durumda yönlendirme yanlıştır.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("generate")}>
                <Card.Body>
                    <Card.Title className={titleStyle}>OYUN OLUŞTUR</Card.Title>
                    <Card.Text>
                        Kullanıcı kalsik ve zamana dayalı olan oyunlarda <i><b>kendi şartlarına</b></i> göre oyun
                        oluşturabilir.


                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ModePage;
