import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button, Row} from "react-bootstrap";
import PunishmentMode from "./PunishmentMode";

const TimingGenerate = () => {
    const [random, setRandom] = useState();
    const [minValue, setminValue] = useState();
    const [maxValue, setmaxValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = () => {
        setRandom(document.getElementById('random').value);

    };

    const [isActive, setIsActive] = useState(false);
    const [isForm, setIsForm] = useState(true);
    const generate = () => {
        setIsActive(true)
        setIsForm(false)
    }

    return (
        <div>

            {isForm === true ?
                <Form className="p-4 m-5" onSubmit={handleSubmit}>
                    <Form.Control
                        className="mb-4"
                        id="random"
                        type="number"
                        value={random}
                        onChange={handleInputChange}
                        placeholder="Random olarak arttırmak istediğiniz aralığı girin."
                    />
                    <Row> <Button onClick={generate} className="mt-3 mb-3 bg-primary">OLUŞTUR</Button> </Row>
                </Form>
                : null}
            {isActive === true ?
                <PunishmentMode random={random} endValue={minValue} startValue={maxValue}></PunishmentMode> : null
            }
        </div>
    );
}

export default TimingGenerate;
