import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import ModePage from "../ModePage/ModePage";

function Profile({values}) {

    const [messages, setMessages] = useState("")
    const [isMailValid, setIsMailValid] = useState(false)
    const [isUserName, setIsUserName] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    const [info, setInfo] = useState({
        username: values[0].username,
        email: values[0].email,
        password: values[0].password,
    });
    const validMail = () => {

        if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(info.email)) {

            console.log("geçerli")
            document.getElementById("email").style.borderColor = "green";
            setIsMailValid(true)

        } else {

            document.getElementById("email").style.borderColor = "red";
            setIsMailValid(false)

        }
    }

    const validUsername = () => {
        if (info.username.length >= 5) {
            if (/^[a-zA-Z0-9]+$/.test(info.username)) {
                console.log("geçerli")
                document.getElementById("username").style.borderColor = "green";
                setIsUserName(true);
            } else {

                document.getElementById("username").style.borderColor = "red";
                setIsUserName(false);
            }
        } else {

            setIsUserName(false);
        }
    }

    const checkButton = () => {
        if (isDisabled === true) {
            document.getElementById("button").innerHTML = "Kaydet"
            setIsDisabled(false);
        } else
            handleUpdate();
    }

    const handleUpdate = async () => {
        if (isMailValid === true && isUserName === true) {
            await fetch('http://localhost:8080/player/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: values[0].id,
                    username: info.username,
                    password: info.password,
                    email: info.email,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        setMessages("Girdiğiniz kullanıcı adı veya mail adresi hatalıdır.")
                        throw new Error("Yanıt yok");
                    } else
                        setMessages("Kayıt başarılı")
                    return response.json();
                })
                .then((data) => {
                    console.log(data[0])
                })
                .catch((error) => {

                    console.error("Error:", error.message);
                });
        } else
            setMessages("Yanlış girdi")
    }
    const handleInputChange = (event) => {
        validUsername()
        validMail()
        const {name, value} = event.target;
        setInfo({
            ...info,
            [name]: value,
        });
    };

    return (
        <>
            {isLogin === false && (<>
                <Form style={{marginTop: 100}}>
                    <p className="text-start text-danger fl-1">{messages}</p>
                    <Form.Group className="mb-3" controlId="formBasicUsername">

                        <Form.Control name="username" id="username" type="text" placeholder="Enter email"
                                      value={info.username} onChange={handleInputChange}
                                      disabled={isDisabled}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" id="password" type="text" placeholder="Password"
                                      disabled={isDisabled} value={info.password} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" id="email" type="text" placeholder="Enter email" value={info.email}
                                      disabled={isDisabled} onChange={handleInputChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Button className="mb-3" variant="primary" id="button" onClick={() => checkButton()}>Güncelle
                </Button>

                <Button variant="danger" id="button1" onClick={() => setIsLogin(true)}>Geri Dön
                </Button>
            </>
            )}
            {isLogin && <ModePage isLogin={isLogin} values={values}></ModePage>}
        </>
    )
}

export default Profile;
