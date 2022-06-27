import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import React from "react";

const ParticlesBackground = () => {
    return <Particles params={particlesConfig}></Particles>;
};

export default ParticlesBackground;
