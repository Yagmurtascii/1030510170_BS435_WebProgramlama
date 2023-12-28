import React, {useState} from 'react';

import ClassicMode from "./ClassicMode";
import Form from "react-bootstrap/Form";
import {Button, Row} from "react-bootstrap";

const ClassicGenerate = () => {
    const [counts, setCounts] = useState();
    const [minValue, setminValue] = useState();
    const [maxValue, setmaxValue] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = () => {
        setCounts(document.getElementById('count').value);

    };
    const handleInputChange1 = () => {
        setminValue(document.getElementById('minValue').value);


    };
    const handleInputChange2 = () => {
        setmaxValue(document.getElementById('maxValue').value);

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
                        id="count"
                        type="number"
                        value={counts}
                        onChange={handleInputChange}
                        placeholder="Tahmin hakkı girin"
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
            {isActive === true ?
                <ClassicMode count={counts} endValue={minValue} startValue={maxValue}></ClassicMode> : null
            }

        </div>
    );
}

export default ClassicGenerate;
