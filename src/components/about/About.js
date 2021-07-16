import "./About.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1>About me</h1>
        <div className="text">
          Hi! everyone. My name is <span>Jirawat Darasrisak</span>. I'm 24 years
          old.
        </div>
        <div className="text">
          I graduated with second-class honors from
          <span> Kasetssart University</span>,
        </div>
        <div className="text">
          a bechelor degree of Civil Engineering Major.
        </div>{" "}
        <div className="text">
          I'm interested and enjoyed in coding especially in coding a website.
        </div>{" "}
        <div className="text">
          I'm using <span>React, Html, CSS and Javascript</span>
        </div>
        <div className="text">
          My career objective is becoming a{" "}
          <span>front-end web developer.</span>
        </div>
      </div>
    </div>
  );
}
