import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {route} from "../Router/Router";
import Profile from "../User/Profile";

function ModePage({isLogin, values}) {
    const [profile, setProfile] = useState(false)
    const divStyle = "d-flex flex-column align-items-center m-5";
    const titleStyle = "text-center"
    const cardStyle = "border-dark bg-danger text-center m-2 "

    const goToFrofile = () => {
        setProfile(true)
    }

    return (

        <div className={divStyle}>
            <Container className={divStyle}>
                <Row>
                    <Col>
                        <br/>
                        <br/>
                        {profile === false && (<>
                                {isLogin && <Button onClick={goToFrofile}>Profil</Button>}
                                <Card className={cardStyle} style={{width: '46rem'}} onClick={() => route("")}>
                                    <Card.Body>
                                        <Card.Title>ANA SAYFA</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={cardStyle} style={{width: '46rem'}} onClick={() => route("classic")}>
                                    <Card.Body>
                                        <Card.Title className={titleStyle}>KLASİK OYUN</Card.Title>
                                        <Card.Text>
                                            Oyuncu <i><b>5 tahmin hakkını </b></i> kullanarak random üretilen sayıyı
                                            tahmin etmeye
                                            çalışır.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className={cardStyle} style={{width: '46rem'}} onClick={() => route("timing")}>
                                    <Card.Body>
                                        <Card.Title>SÜRELİ OYUN</Card.Title>
                                        <Card.Text>
                                            Oyuncu <i><b>süreye </b></i> karşı random üretilen sayıyı tahmin etmeye
                                            çalışır.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className={cardStyle} style={{width: '46rem'}}
                                      onClick={() => route("punishment")}>
                                    <Card.Body>
                                        <Card.Title className={titleStyle}>CEZALI OYUN</Card.Title>
                                        <Card.Text>
                                            Oyuncunun her yanlış cevabında random üretilen sayı değişir. <i><b>Değişen
                                            sayı daha
                                            önce
                                            girdiğiniz sayı olabilir! </b></i>
                                            Bu durumda yönlendirme yanlıştır.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className={cardStyle} style={{width: '46rem'}} onClick={() => route("generate")}>
                                    <Card.Body>
                                        <Card.Title className={titleStyle}>OYUN OLUŞTUR</Card.Title>
                                        <Card.Text>
                                            Kullanıcı kalsik ve zamana dayalı olan oyunlarda <i><b>kendi şartlarına</b></i> göre
                                            oyun
                                            oluşturabilir.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </>
                        )}
                        {profile && (<Profile values={values}/>)}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ModePage;
