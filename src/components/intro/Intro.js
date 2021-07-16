import "./Intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Nice to meet you", "Let me introduce myself"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="assets/me.jpg" alt="jirawat" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello everyone I'm</h2>
          <h1>Jirawat Darasrisak</h1>
          <h3>
            and <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
