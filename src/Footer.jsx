import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Mandi M Lekalakala. All Rights
        Reserved.
      </p>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/mandilekalakala/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/Mandi-Lekalakala"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://mandi-lekalakala.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-globe"></i>
        </a>
      </div>
    </footer>
  );
}
