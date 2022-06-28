// import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
        };
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    };

    onButtonSubmit = () => {
        console.log("click");
        app.models.predict(
            "42f87b26bfac4f248741033914ae72dd",
            "https://samples.clarifai.com/face-det.jpg"
        ).then(function(response) {

        }
        function(err) {}
        );
    };

    render() {
        return (
            <div className="App">
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                />
                {/*<FaceRecognition />*/}
            </div>
        );
    }
}

export default App;
