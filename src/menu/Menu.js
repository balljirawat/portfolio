import "./Menu.css";

export default function Menu(props) {
  return (
    <div className={"menubar " + (props.menuOpen && "active")}>
      <ul>
        <li onClick={props.closeMobileMenu}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={props.closeMobileMenu}>
          <a href="#about">About</a>
        </li>
        <li onClick={props.closeMobileMenu}>
          <a href="#certificate">Certificate</a>
        </li>
        <li onClick={props.closeMobileMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
