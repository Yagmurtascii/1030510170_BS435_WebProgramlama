import {useState} from "react";

export const Generate = (startvalue, endValue) => {
    const max = parseInt(startvalue, 10);
    const min=parseInt(endValue, 10);
    const [number, setNumber] = useState(Math.floor (Math.random() *(max-min))+min);
    return number;
}

