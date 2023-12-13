import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {route} from "./Router";
import ModePage from "./ModePage";

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [values, setValues] = useState(null);
    const [messages, setMessage] = useState("")
    const style = {
        marginTop: 150,
    }

    const style1 = {
        paddingTop: 150,
    }

    const usernameHandleOnChange = (e) => {
        setUsername(e.target.value);
    }

    const passwordHandleOnChange = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = async () => {

        await fetch('http://localhost:8080/player/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => {
                if (!response.ok) {

                    throw new Error("Yanıt yok");
                    setMessage("Kullanıcı adınız veya şifreniz yanlış")
                }
                setIsLogin(true)


                return response.json();
            })
            .then((data) => {
                setValues(data)

                console.log(data[0])
            })
            .catch((error) => {
                setMessage("Kullanıcı adınız veya şifreniz yanlış")
                console.error("Error:", error.message);
            });


    }
    console.log(messages)

    return (
        <>
            {isLogin && values !== null && <ModePage isLogin={isLogin} values={values}/>}
            {isLogin === false && (<>
                    <Container className="text-center" style={style}>
                        <Row>
                            <Col md="5">
                                <Image src="/Images/home.png"></Image>
                            </Col>
                            <Col md="7" style={style1} className="w-50">
                                <Form>
                                    <p className="text-start text-danger fl-1">{messages}</p>
                                    <Form.Control onChange={usernameHandleOnChange}
                                                  className="mb-4"
                                                  id="name"
                                                  type="text"
                                                  value={username}
                                                  placeholder="İsminizi girin"
                                    />
                                </Form>
                                <Form>
                                    <Form.Control onChange={passwordHandleOnChange}
                                                  className="mb-4"
                                                  id="name"
                                                  type="password"
                                                  value={password}
                                                  placeholder="Şifrenizi girin"
                                    />
                                </Form>
                                <Button className="w-100 mb-3" onClick={() => handleLogin()}>GİRİŞ
                                    YAP</Button>
                                <Button className="w-50 mb-3" variant="danger" onClick={() => route("signIn")}>KAYIT
                                    OL</Button>
                                <br/>
                                <Link to="/password">Şifremi unuttum</Link>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}


        </>
    )
}

export default Login;
