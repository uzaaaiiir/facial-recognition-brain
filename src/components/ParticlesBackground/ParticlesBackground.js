import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import React from "react";

const ParticlesBackground = () => {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>;
        </div>
    );
};

export default ParticlesBackground;
