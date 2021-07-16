import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-contain">
        <div className="contact-header">
          <h1>Let's Get In Touch!</h1>
        </div>
        <div className="social">
          <div className="media">
            <i className="fab fa-github"></i>
            <br />
            <a
              target="_blank"
              rel="noopender noreferrer"
              href="https://github.com/balljirawat"
            >
              balljirawat
            </a>
          </div>
          <div className="media">
            <i className="fab fa-instagram"></i>
            <br />
            <a
              target="_blank"
              rel="noopender noreferrer"
              href="https://www.instagram.com/balljrw/"
            >
              balljrw
            </a>
          </div>
          <div className="media">
            <i className="fas fa-envelope"></i>
            <br />
            <a
              target="_blank"
              rel="noopender noreferrer"
              href="mailto:jirawatball11@gmail.com"
            >
              jirawatball11@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <h2>I will contact you back as soon as I can!</h2>
        </div>
        <div className="copyright">
          <h3>Copyright © 2021</h3>
        </div>
      </div>
    </div>
  );
}
