import React, {useState} from 'react';
import Input from "./InputGroup";
import ClassicMode from "./ClassicMode";
import Form from "react-bootstrap/Form";
import {Button, FormControl, Row} from "react-bootstrap";
import TimingMode from "./TimingMode";
import timingMode from "./TimingMode";
import PunishmentMode from "./PunishmentMode";

const TimingGenerate = () => {
    // counts değerini saklamak için state tanımla
    const [random, setRandom] = useState();
    const [minValue, setminValue] = useState();
    const [maxValue, setmaxValue] = useState();

    // Form submit olduğunda bu fonksiyon çalışacak
    const handleSubmit = (event) => {
        // Sayfa yenilemeyi önlemek için formun default davranışını engelle
        event.preventDefault();

        // counts değerini kullan
        console.log("Counts değeri:", random);

        // Diğer işlemleri burada yapabilirsiniz
    };

    // Input değeri değiştikçe bu fonksiyon çalışacak
    const handleInputChange = () => {
        setRandom(document.getElementById('random').value);

    };
    const handleInputChange1 = () => {
        setminValue(document.getElementById('minValue').value);


    };
    const handleInputChange2 = () => {
        setmaxValue(document.getElementById('maxValue').value);

    };

    const [isAktif, setIsAktif] = useState(false);
    const [isForm, setIsForm] = useState(true);
    const generate = () => {
        setIsAktif(true)
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

                    <Form.Control
                        className="mb-4"
                        id="minValue"
                        type="number"
                        value={minValue}
                        onChange={handleInputChange1}
                        placeholder="En düşük aralık girin"
                    />

                    <Form.Control
                        className="mb-4"
                        id="maxValue"
                        type="number"
                        value={maxValue}
                        onChange={handleInputChange2}
                        placeholder="En yüksek aralık girin"
                    />

                    <Row> <Button onClick={generate} className="mt-3 mb-3 bg-primary">OLUŞTUR</Button> </Row>
                </Form>
                : null}
            {isAktif === true ?
                <PunishmentMode random={random} endValue={minValue} startValue={maxValue}></PunishmentMode> : null
            }

        </div>
    );
}

export default TimingGenerate;