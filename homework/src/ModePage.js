import React from 'react';
import MainPage from "./MainPage";
import ClassicMode from "./ClassicMode";
function ModePage() {
    const divStyle = "d-flex flex-column align-items-center justify-content-center m-5";
    const buttonStyle="btn btn-success btn-lg p-5 m-3 btn-"
    const playSound = () => {
        const ses = new Audio('buttonAudio.mp3');
        ses.play();
    };
    const route=(name)=>
    {
        playSound();
        setTimeout(() => {
            window.location.href = `/${name}`;
        }, 100);
    }

    return (
        <div className={divStyle} >
            <button className={buttonStyle} onClick={() => route("classic")}>KLASİK</button>
            <button className={buttonStyle} onClick={() => route("timing")} >SÜRELİ</button>
            <button className={buttonStyle} onClick={() => route("punishment")} >CEZALI</button>
        </div>
    );
}

export default ModePage;
