import React, { useState, useEffect } from "react";
import "./App.css";
import profileImage from "./profile.png";
import linkedinIcon from "./linkedin-icon.png";

/* Import your project screenshots */
import previewProject1 from "./preview-project1.png";
import previewProject2 from "./preview-project2.png";
import previewProject3 from "./preview-project3.png";
import previewProject4 from "./preview-project4.png";

function App() {
  // Hearts & confetti
  const [hearts, setHearts] = useState([]);

  // Sticky header scroll state
  const [scrolled, setScrolled] = useState(false);

  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Generate hearts & money confetti
  const handleImageClick = () => {
    const emojis = ["❤️", "💰"];
    const newHearts = [];
    const isMobile = window.innerWidth < 768;

    for (let i = 0; i < 20; i++) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const left = Math.random() * 100;
      const duration = 10 + Math.random() * 2; // 10–12s
      const baseSize = 60 + Math.random() * 80; // 60–140px
      const size = isMobile ? baseSize * 0.7 : baseSize;

      newHearts.push({
        id: Math.random(),
        symbol: randomEmoji,
        left,
        duration,
        size
      });
    }

    setHearts(newHearts);
    setTimeout(() => setHearts([]), 5000);
  };

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Hearts & Confetti Overlay */}
      <div className="hearts-container">
        {hearts.map((item) => (
          <span
            key={item.id}
            className="heart"
            style={{
              left: `${item.left}%`,
              animationDuration: `${item.duration}s`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              fontSize: `${item.size}px`
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      {/* Top Menu */}
      <header className={scrolled ? "top-menu scrolled" : "top-menu"}>
        <nav>
          {/* Hamburger (mobile) */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Nav links */}
          <ul className={menuOpen ? "nav-links open" : "nav-links"}>
            {/* Close button at the top */}
  <li className="close-menu-item">
    <button className="close-menu-btn" onClick={() => setMenuOpen(false)}>
      &times; {/* This is the "×" character */}
    </button>
  </li>
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#tools" onClick={() => setMenuOpen(false)}>
                Tools
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1B6grUw7Py4T5vho8zRf5JnxypoQKy1EV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero">
          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              onClick={handleImageClick}
            />
            <div className="image-hint">Click to pet</div>
          </div>
          <h1 className="profile-name">Hi. I'm Mel.</h1>
          <div className="profile-title-container">
            <h2 className="profile-title">
              Great products win hearts and fill wallets, let’s make that magic happen!
            </h2>
          </div>
        </section>

        {/* Row 1: Experience & Education */}
        <div className="two-column-row">
          {/* Experience */}
          <section id="experience" className="section-container experience">
            <h2>Experience</h2>
            <div className="jobs-container">
              {/* Example Card */}
              <div className="experience-card">
                {/* Top row: Title/Company + Date */}
                <div className="experience-top">
                  <div className="experience-left">
                    <h3>Associate PM</h3>
                    <p className="company">Benevity</p>
                  </div>
                  <div className="experience-dates">Oct 2022 - Present</div>
                </div>
                {/* Full-width paragraph below */}
                <p className="experience-description">
                  Delivering features for internal teams and users that optimize
                  workflows and drive user engagement.
                </p>
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <div className="experience-left">
                    <h3>Customer Success Manager</h3>
                    <p className="company">Benevity</p>
                  </div>
                  <div className="experience-dates">Oct 2021 - Oct 2022</div>
                </div>
                <p className="experience-description">
                  Built strong client relationships to drive product adoption,
                  ensuring retention and exceptional customer experiences.
                </p>
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <div className="experience-left">
                    <h3>Implementation Manager</h3>
                    <p className="company">Travelperk</p>
                  </div>
                  <div className="experience-dates">Jan 2021 - Oct 2021</div>
                </div>
                <p className="experience-description">
                  Accelerated revenue growth by implementing and launching multiple
                  global clients with SSO and API Integrations.
                </p>
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <div className="experience-left">
                    <h3>Senior Technical Support Specialist</h3>
                    <p className="company">Travelperk</p>
                  </div>
                  <div className="experience-dates">Jan 2020 - Dec 2020</div>
                </div>
                <p className="experience-description">
                  Enhanced customer experience by resolving complex issues & optimizing
                  support workflows.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="section-container education">
            <h2>Education</h2>
            <div className="edu-container">
              <div className="education-card">
                <div className="education-top">
                  <div className="education-left">
                    <h3>Product Management Bootcamp</h3>
                    <p className="company">CodeOp</p>
                  </div>
                  <div className="education-dates">2023</div>
                </div>
                <p className="education-description">
                  Focus on end-to-end product lifecycle, user-centric design,
                  and go-to-market strategies.
                </p>
              </div>
              <div className="education-card">
                <div className="education-top">
                  <div className="education-left">
                    <h3>Web Development</h3>
                    <p className="company">The App Brewery</p>
                  </div>
                  <div className="education-dates">2021-2022</div>
                </div>
                <p className="education-description">
                  Hands-on coding projects in HTML, CSS, JavaScript, and React.
                </p>
              </div>
              <div className="education-card">
                <div className="education-top">
                  <div className="education-left">
                    <h3>Business Administration</h3>
                    <p className="company">KV Business School Lucerne</p>
                  </div>
                  <div className="education-dates">2007-2010</div>
                </div>
                <p className="education-description">
                  Core principles in management, finance, marketing, and strategy.
                  Develop leadership, critical thinking, and communication skills.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Row 2: Skills & Tools */}
        <div className="two-column-row">
          <section id="skills" className="section-container skills">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>Product Discovery</li>
              <li>User Interviews</li>
              <li>Data Analysis / Analytics</li>
              <li>Success Metrics</li>
              <li>Agile</li>
              <li>AB Test</li>
              <li>API Integrations</li>
              <li>QA Testing</li>
              <li>AI, ML, LLM's</li>
            </ul>
          </section>

          <section id="tools" className="section-container tools">
            <h2>Tools</h2>
            <ul className="tools-list">
              <li>Jira</li>
              <li>Figma</li>
              <li>Asana</li>
              <li>Looker</li>
              <li>Mixpanel</li>
              <li>Salesforce</li>
              <li>Intercom</li>
              <li>Zendesk</li>
              <li>ClickUp</li>
            </ul>
          </section>
        </div>

        {/* Row 3: Projects (4 Cards) */}
        <section id="projects" className="section-container projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <img
                src={previewProject1}
                alt="Project 1"
                className="project-image"
              />
              <h3 className="project-title">Project Title 1</h3>
              <p className="project-description">
                Short description about project 1, focusing on purpose & features.
              </p>
              <a
                href="https://example.com/project1"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <img
                src={previewProject2}
                alt="Project 2"
                className="project-image"
              />
              <h3 className="project-title">Project Title 2</h3>
              <p className="project-description">
                Short description about project 2, focusing on purpose & features.
              </p>
              <a
                href="https://example.com/project2"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <img
                src={previewProject3}
                alt="Project 3"
                className="project-image"
              />
              <h3 className="project-title">Project Title 3</h3>
              <p className="project-description">
                Short description about project 3, focusing on purpose & features.
              </p>
              <a
                href="https://example.com/project3"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <img
                src={previewProject4}
                alt="Project 4"
                className="project-image"
              />
              <h3 className="project-title">Project Title 4</h3>
              <p className="project-description">
                Short description about project 4, focusing on purpose & features.
              </p>
              <a
                href="https://example.com/project4"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/melanie-haefliger/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
            </a>
          </div>
          <p>© 2025 Mel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
