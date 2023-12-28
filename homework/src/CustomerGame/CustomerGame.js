import {route} from "../Router/Router";
import {Card} from "react-bootstrap";
import React from "react";
function CustomerGame() {
    const divStyle = "d-flex flex-column align-items-center justify-content-center m-4";
    const titleStyle = "text-center"
    const cardStyle = "border-dark bg-success text-center m-2 "
    return(
        <div className={divStyle}>

            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("mode")}>
                <Card.Body>
                    <Card.Title className={titleStyle} >GERİ DÖN</Card.Title>

                </Card.Body>
            </Card>

            <Card className={cardStyle} style={{width: '18rem'}} onClick={() => route("generateClassic")}>
                <Card.Body>
                    <Card.Title className={titleStyle} >KLASİK OYUN OLUŞTUR</Card.Title>
                    <Card.Text>
                        Kullanıcı istediği aralıkları ve tahmin etme hakkını vererek kendine ait oyunu üretebilir.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className={cardStyle}  style={{width: '18rem'}} onClick={() => route("generateTiming")}>
                <Card.Body>
                    <Card.Title className={titleStyle} >SÜRELİ OYUN OLUŞTUR</Card.Title>
                    <Card.Text>
                        Kullanıcı istediği aralıkları ve süreyi vererek kendine ait oyunu üretebilir.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className={cardStyle}  style={{width: '18rem'}} onClick={() => route("generatePunishment")}>
                <Card.Body>
                    <Card.Title className={titleStyle} >CEZALI OYUN OLUŞTUR</Card.Title>
                    <Card.Text>
                        Kullanıcı istediği aralıkları ve random sayıya uygulayacağı değişimi vererek kendine ait oyunu üretebilir.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CustomerGame;
