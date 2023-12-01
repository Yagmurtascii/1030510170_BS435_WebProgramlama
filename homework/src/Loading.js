import {Canvas} from "react-three-fiber";
import ThreeFbxModel from "./Model";
import React, {useEffect, useState} from "react";
import ModePage from "./ModePage";
import {route} from "./Router";

function Loading()
{
    useEffect(() => {
        const timer = setTimeout(() => {
            // 5 saniye sonra "mode" sayfasına yönlendir
            route("mode")
        }, 5000);
    });

    return (
        <div>
            <Canvas className="mt-5" style={{ width: '100vw', height: '70vh' }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[5, 25, 5]} angle={0.3} penumbra={1} />
                <ThreeFbxModel />
            </Canvas>
            <h5 className="text-center">YÜKLENİYOR...</h5>

        </div>
    );
}
export default Loading;
