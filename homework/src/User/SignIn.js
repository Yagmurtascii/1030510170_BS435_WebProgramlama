import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import {route} from "../Router/Router";

function SignIn() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const [messagesUserName, setMessagesUserName] = useState("")
    const [messagesEmail, setMessagesEmail] = useState("")
    const [generic, setGeneric] = useState()
    const [isMailValid, setIsMailValid] = useState(false)
    const [isUserName, setIsUserName] = useState(false)



    const handleButtonClick = () => {
        const data = {
            username: formData.username,
            password: formData.password,
            email: formData.email,
        }
        if(isMailValid===true && isUserName===true)
        {
            fetch('http://localhost:8080/player/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (!response.ok) {
                        // Eğer istek başarısızsa
                        setGeneric("Geçersiz kullanıcı adı veya mail")
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    setGeneric("");
                    route("login");
                    return response.json(); // JSON dönüşünü işle
                })
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        }
        else
            setGeneric("İstenilen formatta değil")

    };


    const style = {
        marginTop: 200,
    }

    const handleChange = (e) => {
        validMail()
        validUsername()
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));


    };
    const validMail = () => {

        if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email)) {
            setMessagesEmail("")
            console.log("geçerli")
            document.getElementById("email").style.borderColor = "green";
            setIsMailValid(true)

        } else {
            setMessagesEmail("Girdiğiniz mail adresi doğru formatta değil.")
            document.getElementById("email").style.borderColor = "red";
            setIsMailValid(false)

        }
    }

    const validUsername = () => {
        if (formData.username.length >= 5) {
            if (/^[a-zA-Z0-9]+$/.test(formData.username)) {
                console.log("geçerli")
                setMessagesUserName("")
                document.getElementById("name").style.borderColor = "green";
                setIsUserName(true);
            } else {
                setMessagesUserName("Girdiğiniz kullanıcı adı istenilen formatta değil.")
                document.getElementById("name").style.borderColor = "red";
                setIsUserName(false);
            }
        } else {
            setMessagesUserName("Girdiğiniz kullanıcı adı istenilen formatta değil.")
            setIsUserName(false);
        }
    }
    return (
        <div>
            <Container className="text-center w-25" style={style}>
                <p className="text-start text-danger fl-1">{generic}</p>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control onChange={handleChange}
                                          id="name"
                                          type="text"
                                          name="username"
                                          value={formData.username}
                                          placeholder="Kullanıcı adı girin"
                            />
                            <p className="text-start text-danger fl-1">{messagesUserName}</p>
                        </Form>
                        <Form>
                            <Form.Control onChange={handleChange}
                                          className="mb-3"
                                          id="password"
                                          name="password"
                                          type="password"
                                          value={formData.password}
                                          placeholder="Şifrenizi girin"
                            />
                        </Form>

                        <Form>
                            <Form.Control onChange={handleChange}

                                          id="email"
                                          name="email"
                                          type="email"
                                          value={formData.email}
                                          placeholder="Email adresini girin"
                            />
                            <p className="text-start text-danger fl-1">{messagesEmail}</p>
                        </Form>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="w-100 mb-3" variant="danger" onClick={() => handleButtonClick()}>KAYIT OL</Button>
                        <Button className="w-100 mb-3" onClick={() => route("login")}>ANA SAYFA</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignIn;
