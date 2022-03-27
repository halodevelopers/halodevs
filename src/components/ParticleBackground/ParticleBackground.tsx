import React from 'react';
import Particles from 'react-tsparticles';
import ParticleConfig from '@site/src/Config/particle-config';


export default function ParticleBackground(){
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}