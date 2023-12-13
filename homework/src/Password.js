import Form from "react-bootstrap/Form";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import * as emailjs from "emailjs-com";
import {route} from "./Router";

function ForgetPassword() {
    const style = {
        marginTop: 250,
    }
    const [mail, setMail] = useState("")
    const [messages, setMessages] = useState("")
    const [generatePassword, setGeneratePassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const sendMail = (password, mail) => {
        emailjs.init("6sUrSTVn2rJ1wTjWN");
        var templateParams = {
            to_email: mail,
            to_name: 'xyz',
            from_name: 'abc',
            password: password,
            message_html: {generateRandomPassword}
        };

        emailjs.send('sayitahminoyunu', 'template_pz9yoe9', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }
    const generateRandomPassword = () => {
        let password = (Math.random() + 1).toString(36).substring(6);
        setGeneratePassword(password)
        sendMail(password, mail)
        console.log("random", password);
    }

    const validMail = () => {
        if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(mail)) {
            setMessages("");
            document.getElementById("mail").style.borderColor = "green";
            generateRandomPassword()
            setIsSuccess(true);

        } else {
            document.getElementById("password").style.borderColor = "red";
            setMessages("Girdiğiniz mail adresi doğru formatta değildir.")
            setIsSuccess(false);
        }
    }
    useEffect(() => {
        if (mail === "") {
            document.getElementById("button").disabled = true;
        }
    }, []);
    const mailHandleOnChange = (e) => {
        setMail(e.target.value);
        document.getElementById("button").disabled = false;
    }
    return (
        <div>

            <Container className="w-75 text-center" style={style}>
                <Row>

                    <Col>
                        <Form>
                            <Form.Control onChange={mailHandleOnChange}
                                          className="mb-1"
                                          id="mail"
                                          type="text"
                                          value={mail}
                                          placeholder="mail adresiniz girin"
                            />
                            <p className="text-center text-danger fl-1">{messages}</p>
                        </Form>
                        <Button className="mb-2" id="button" onClick={() => validMail()}>Yeni şifre gönder </Button>
                        <Col>
                            {isSuccess && (<>
                                    <Button variant="danger" onClick={() => route("login")}>Login Ekranına Dön </Button>
                                </>
                            )}
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ForgetPassword;
