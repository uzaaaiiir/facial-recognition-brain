// import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

class App extends Component {
    render() {
        const particlesInit = async (main) => {
            console.log(main);

            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(tsParticles);
        };

        const particlesLoaded = (container) => {
            console.log(container);
        };
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions} />

                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/*<FaceRecognition />*/}
            </div>
        );
    }
}

export default App;
