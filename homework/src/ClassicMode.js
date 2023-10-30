import React, {useState} from 'react';
function ClassicMode() {
    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100)+1;
        return randomNum;
    };


    return(
        <div>
            <h1>Random Number: {generateRandomNumber()}</h1>
            <input
                type="number"
                placeholder="1 ile 100 arasında bir sayı girin"
                min="1"
                max="100"
            />
            <input
                type="button"
                value="check"
            />
        </div>
    );
}
export default ClassicMode
