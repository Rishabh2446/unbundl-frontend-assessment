import "./Footer.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Book a Free Scan</li>
            <li>How it Works</li>
            <li>Range of Aligners</li>
            <li>Aligners vs Braces</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get in Touch Now!</h3>

          <p>
            <FiPhone /> 011-6932-8350
          </p>

          <p>
            <FiMail /> support@whistle.in
          </p>
        </div>

        <div className="footer-column">
          <h3>Follow us on</h3>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
          </div>
        </div>

        <div className="footer-column">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;