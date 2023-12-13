import React, {useEffect, useState} from 'react';
import './MainPage.css';
import {Button,Image} from "react-bootstrap";
import {route} from "./Router";
import Loading from "./Loading";
function MainPage() {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    const [loading, setLoading] = useState(false);
    const handleButtonClick =  () => {
        setLoading(true);
        route("loading")
        setLoading(false);
    };

    return (
        <div className="text-center mt-5" style={containerStyle}>
            <Image className="text-center" src="Images/home.png"  rounded />
            <Button
                variant="danger"
                className="border-dark mt-4 mb-4 pl-5 pr-5 pt-3 pb-3 text-dark"
                onClick={()=>
                    route("login")
                } >
                OYNA </Button>

            <Button
                variant="danger"
                className="border-dark mt-4 mb-4 pl-5 pr-5 pt-3 pb-3 text-dark"
                onClick={()=>
                  handleButtonClick()
                } >
                MİSAFİR OLARAK OYNA </Button>
            {loading && <Loading />}
        </div>
    );
}
export default MainPage;
