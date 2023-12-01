// ThreeDancingModel.js
import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { FBXLoader } from 'three/addons';
import { AnimationMixer } from 'three';
import {blackMaterial, grayMaterial, greenMaterial, pinkMaterial, redMaterial, whiteMaterial} from './Materials';
import g from "three/addons/libs/lil-gui.module.min";

const ThreeFbxModel = () => {
    const modelRef = useRef();
    const fbx = useLoader(FBXLoader, '/Sad Idle.fbx');
    const mixer = useRef(new AnimationMixer(fbx));

    useEffect(() => {
        const danceAction = mixer.current.clipAction(fbx.animations[0]);
        danceAction.play();

        // Set materials for specific meshes
        fbx.traverse((child) => {
            if (child.isMesh) {
                // Assign materials based on mesh names or hierarchy
                const meshName = child.name.toLowerCase();
                if (meshName.includes('eye')) {
                    child.material = blackMaterial;
                } else if (meshName.includes('body')) {
                    child.material = whiteMaterial;
                } else if (meshName.includes('ear')) {
                    child.material = pinkMaterial;
                } else if (meshName.includes('nose') || (meshName.includes('mouth'))) {
                    child.material = blackMaterial;
                }
            }
        });
        fbx.scale.set(0.02,0.018,0.02);

        return () => {
            mixer.current.stopAllAction();
        };
    }, []);

    useFrame((state, delta) => {
        mixer.current.update(delta);

    });

    return <primitive ref={modelRef} object={fbx}  rotation={[0,Math.PI/20,0]} />;
};

export default ThreeFbxModel;
