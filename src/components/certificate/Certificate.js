import React from "react";
import "./Certificate.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "/assets/Cerificate_FutureSkill_React.PNG",
  "/assets/Certificate_Borntodev_Javascript.PNG",
  "/assets/transcript.PNG",
];

export default function Certificate() {
  return (
    <div className="certificate" id="certificate">
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
