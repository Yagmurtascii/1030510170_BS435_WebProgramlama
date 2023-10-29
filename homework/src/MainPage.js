import React from 'react';
import './MainPage.css';
function MainPage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const imgStyle={
        width:'40%',
        height:'40%',
        marginTop:'2em',
        marginBottom:'4em'
    }

    const buttonStyle={
        width:'40%',
        height:'40%',
        marginTop:'-3em',
        marginBottom:'4em',
        padding:'20px'
    }
    const changePage=()=>
    {
        window.location.href='/mode';
    }
    return (
        <div style={containerStyle}>
            <img style={imgStyle} src="Images/home.png" alt="Resim Açıklaması"/>
            <button style={buttonStyle} onClick={changePage}>PLAY</button>
        </div>
    );
}
export default MainPage;
