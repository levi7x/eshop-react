import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="social">
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>

      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p className="copyright">Marián Šimo @ 2023</p>
    </>
  );
}

export default Footer;
