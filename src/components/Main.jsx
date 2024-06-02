import * as Unicons from "@iconscout/react-unicons";
import profile from "../images/profile.png";

function Main() {
  return (
    <div className="App">
      <main className="wrapper">
        <section className="featured-box" id="home">
          <div className="featured-text">
            <div className="featured-text-card">
              <span>Brigitte Koranteng</span>
            </div>
            <div className="featured-name">
              <p>
                I'm a <span className="typedText"></span>
              </p>
            </div>
            <div className="featured-text-info">
              <p>
                "A software developer with a passion for creating visually
                stunning and user-friendly websites. "
              </p>
            </div>
            <div className="featured-text-btn">
              <button className="btn">
                "Download CV "
                <a
                  href="https://docs.google.com/document/d/1e8DlHRoZetHkk_J8KT6kEeIdRQdH79oYvO3MI7gKEX0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Unicons.UilFileAlt />
                </a>
              </button>
            </div>
            <div className="social_icons">
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
          </div>
          <div className="featured-image">
            <div className="image">
              <img src={profile} alt="avatar" />
            </div>
          </div>
          <div className="scroll-icon-box">
            <a href="#about" className="scroll-btn">
              <Unicons.UilMouseAlt />
              <p>Scroll Down</p>
            </a>
          </div>
        </section>
        <section className="section" id="about">
          <div className="top-header">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="about-info">
                <h3>Introduction</h3>
                <p>
                  "I am well-versed in HTML, CSS and JavaScript, as well as
                  other cutting edge frameworks and libraries, which allows me
                  to implement interactive features. Additionally, I have
                  experience working with content management systems (CMS) like
                  WordPress. "
                </p>
                <div className="about-btn">
                  <button className="btn">
                    "Download CV "
                    <a
                      href="https://docs.google.com/document/d/1e8DlHRoZetHkk_J8KT6kEeIdRQdH79oYvO3MI7gKEX0/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Unicons.UilImport />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Front-End</h3>
                </div>
                <div className="skills-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>BootStrap</span>
                  <span>React</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Languages</h3>
                </div>
                <div className="skills-list">
                  <span>JavaScript</span>
                  <span>Python</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>DataBase</h3>
                </div>
                <div className="skills-list">
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="projects">
          <div className="top-header">
            <h1>Projects</h1>
          </div>
          <div className="project-container">
            <div className="project-box">
              <Unicons.UilBriefcaseAlt />
              <h3>JavaScript</h3>
              <label>
                <a
                  href="https://github.com/Brig1tte/alx-frontend-javascript.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alx-frontend-javascript
                </a>
              </label>
            </div>
            <div className="project-box">
              <Unicons.UilBriefcaseAlt />
              <h3>Python Project</h3>
              <label>
                <a
                  href="https://github.com/Brig1tte/AirBnB_clone.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AirBnB_Clone
                </a>
              </label>
            </div>
            <div className="project-box">
              <Unicons.UilBriefcaseAlt />
              <h3>Shell Project</h3>
              <label>
                <a
                  href="https://github.com/Brig1tte/alx-system_engineering-devops.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alx-system_engineering-devops
                </a>
              </label>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <div className="top-header">
            <h1>Get in touch</h1>
            <span>
              Do you have a project in mind? Contact me here. I am always open
              to new opportunities.
            </span>
          </div>
          <div className="row">
            <div className="col">
              <div className="contact-info">
                <h2>
                  Find Me
                  <Unicons.UilCornerRightDown />
                </h2>
                <p>
                  <Unicons.UilEnvelope />
                  Email: korantengbrigitte96@gmail.com
                </p>
                <p>
                  <Unicons.UilPhone />
                  Phone: +233 20 885 5365
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
