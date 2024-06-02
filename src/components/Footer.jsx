import * as Unicons from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className="App">
      <footer>
        <div class="top-footer">
          <p>Brigitte Koranteng.</p>
        </div>
        <div class="middle-footer">
          <ul class="footer-menu">
            <li class="footer_menu_list">
              <a href="#home">Home</a>
            </li>
            <li class="footer_menu_list">
              <a href="#about">About</a>
            </li>
            <li class="footer_menu_list">
              <a href="#projects">Projects</a>
            </li>
            <li class="footer_menu_list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-social-icons">
          <div className="icon">
            <a
              href="https://www.instagram.com/nana.ama.ofosua1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Unicons.UilInstagram />
            </a>
          </div>
          <div className="icon">
            <a
              href="http://www.linkedin.com/in/brigitte-koranteng27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Unicons.UilLinkedinAlt />
            </a>
          </div>
          <div className="icon">
            <a
              href="http://x.com/ojba_bi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Unicons.UilTwitter />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/Brig1tte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Unicons.UilGithubAlt />
            </a>
          </div>
        </div>
        <div class="bottom-footer">
          <p>
            Copyright &copy;
            <a href="#home" style={{ textDecoration: "none" }}>
              Brigitte Koranteng
            </a>
            2024 - All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
