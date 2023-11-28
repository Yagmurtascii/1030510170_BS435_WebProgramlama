import React from 'react';
import Input from "./InputGroup";

function PunishmentMode({endValue, startValue,random}) {

    const finalEndValue = endValue !== undefined ? endValue : 100;
    const finalStartValue = startValue !== undefined ? startValue : 1;
    const finalRandom = random !== undefined ? random : 5;

    return (
        <Input isTimeOrChance={2} endvalues={finalEndValue} startvalues={finalStartValue} randomIncreaseDecrease={finalRandom}></Input>
    );
}

export default PunishmentMode;
