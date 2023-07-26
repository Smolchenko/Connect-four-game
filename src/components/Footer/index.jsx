import { ReactComponent as Logo } from "../../assets/logo.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <Logo />
        <p>
          <span>Connect Four game - Portfolio Project</span>
          <span>
            {"Copyright © "}
            <a
              href="https://github.com/Smolchenko"
              target="_blank"
              aria-label="Owner Github"
              rel="noreferrer"
            >
              Irene Smolchenko
            </a>{" "}
            {currentYear}
            {"."}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
