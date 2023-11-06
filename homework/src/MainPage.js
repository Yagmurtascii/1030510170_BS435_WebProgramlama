import React from 'react';
import './MainPage.css';
import {Button,Image} from "react-bootstrap";
import {route} from "./Router";
function MainPage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    return (
        <div className="text-center mt-5" style={containerStyle}>
            <Image className="text-center" src="Images/home.png"  rounded />
            <Button

                variant="warning"
                className="border-dark mt-4 mb-4 pl-5 pr-5 pt-3 pb-3"
                onClick={()=>
                    route("mode")
                } >
                OYNA </Button>
        </div>
    );
}
export default MainPage;
