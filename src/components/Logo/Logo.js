import React from "react";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain100.png";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt
                className="Tilt br2 shadow-2"
                style={{
                    height: "150px",
                    width: "150px",
                    backgroundColor: "blue",
                    tiltMaxAngleX: "55",
                    tiltMaxAngleY: "55",
                }}
            >
                <div className="pa3 ">
                    <img style={{ paddingTop: "5px" }} src={brain} alt="Logo" />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;
