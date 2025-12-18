export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>{`<Contact />`}</h2>

      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:mfundomkhasibe@gmail.com">mfundomkhasibe@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+271 032 6999">071 032 6999</a>
        </p>

        <div className="social-links">
          <a href="https://github.com/GEE-MM94" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mfundo-mkhasibe-893b4318a/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="footer-note">
        © {new Date().getFullYear()} GEE-MM94. All rights reserved.
      </p>
    </footer>
  );
}
