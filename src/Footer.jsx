export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Mandi Lekalakala
      </p>
      <div className="footer-icons">
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://your-portfolio-site.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-globe"></i>
        </a>
      </div>
    </footer>
  );
}
