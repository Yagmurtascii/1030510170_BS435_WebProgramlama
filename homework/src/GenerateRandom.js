import {useState} from "react";


export const Generate = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100));
    return number;
}

