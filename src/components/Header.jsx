import * as Unicons from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

function Header() {
  const [navState, setNavState] = useState("nav-menu");
  const [navHeaderStyle, setNavHeaderStyle] = useState({});

  /* ----- NAVIGATION BAR FUNCTION ----- */
  function myMenuFunction() {
    if (navState === "nav-menu") {
      setNavState("nav-menu responsive");
    } else {
      setNavState("nav-menu");
    }
  }

  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  useEffect(() => {
    const handleScroll = (event) => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setNavHeaderStyle({
          boxShadow: "0 1px 6px rgba(0, 0, 0, 0.1)",
          height: "70px",
          lineHeight: "70px",
        });
      } else {
        setNavHeaderStyle({
          boxShadow: "none",
          height: "90px",
          lineHeight: "90px",
        });
      }

      /* ----- CHANGE ACTIVE LINK ----- */
      const scrollY = window.scrollY;

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav id="header" style={navHeaderStyle}>
        <div className="logo">
          <p className="nav-name">Brigitte</p>
          <span></span>
        </div>
        <div className={navState} id="myNavMenu">
          <ul className="nav_menu_list">
            <li className="nav_list">
              <a href="#home" className="nav-link active-link">
                Home
              </a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a href="#about" className="nav-link">
                About
              </a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a href="#contact" className="nav-link">
                Contact
              </a>
              <div className="circle"></div>
            </li>
          </ul>
        </div>
        <div className="nav-menu-btn">
          <Unicons.UilBars onClick={myMenuFunction} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
