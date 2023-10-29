import React from 'react';
import MainPage from "./MainPage";
function ModePage() {
    const divStyle = "d-flex flex-column align-items-center justify-content-center m-5";
    const buttonStyle="btn btn-success btn-lg p-5 m-3 btn-"
    const playSound = () => {
        const ses = new Audio('buttonAudio.mp3');
        ses.play();
    };
    return (
        <div className={divStyle} >
            <button className={buttonStyle} onMouseOver={playSound}>KLASİK</button>
            <button className={buttonStyle} onMouseOver={playSound}>SÜRELİ</button>
            <button className={buttonStyle} onMouseOver={playSound}>CEZALI</button>
        </div>
    );
}

export default ModePage;
