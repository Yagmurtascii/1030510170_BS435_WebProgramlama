import React from 'react';
import Input from "./InputGroup";

function PunishmentMode({endValue, startValue,random}) {

    const finalEndValue = endValue !== undefined ? endValue : 100;
    const finalStartValue = startValue !== undefined ? startValue : 1;
    return (
        <Input isTimeOrChance={2} endvalues={finalEndValue} startvalues={finalStartValue} randomIncreaseDecrease={random}></Input>
    );
}

export default PunishmentMode;
