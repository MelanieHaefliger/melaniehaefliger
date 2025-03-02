import React, { useState, useEffect } from "react";
import "./App.css";
import profileImage from "./profile.png";
import linkedinIcon from "./linkedin-icon.png";

function App() {
  // Confetti state
  const [hearts, setHearts] = useState([]);

  // Toggle for sticky header
  const [scrolled, setScrolled] = useState(false);

  // Toggle for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Generate hearts & money confetti
  const handleImageClick = () => {
    const emojis = ["❤️", "💰"];
    const newHearts = [];
    for (let i = 0; i < 20; i++) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const left = Math.random() * 100;  // 0–100% of viewport width
      const duration = 10 + Math.random() * 2; // 10–12 seconds
      const size = 80 + Math.random() * 80;    // 80–160px
      newHearts.push({
        id: Math.random(),
        symbol: randomEmoji,
        left,
        duration,
        size
      });
    }
    setHearts(newHearts);
    // Clear confetti after 5s
    setTimeout(() => {
      setHearts([]);
    }, 5000);
  };

  // Sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Hearts & Money Confetti Overlay */}
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
              fontSize: `${item.size}px` // scale the text emoji
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      {/* Top Menu */}
      <header className={scrolled ? "top-menu scrolled" : "top-menu"}>
        <nav>
          {/* Hamburger button for mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Nav links, toggled by menuOpen */}
          <ul className={menuOpen ? "nav-links open" : "nav-links"}>
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
                href="/cv.pdf"
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

      {/* Main Content Wrapper (Hero + 2-column rows + Projects) */}
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
          <h2 className="profile-title">
            Great products win hearts and fill wallets, let’s make that magic happen!
          </h2>
        </section>

        {/* Row 1: Experience & Education */}
        <div className="two-column-row">
          <section id="experience" className="section-container experience">
            <h2>Experience</h2>
            <div className="jobs-container">
              <div className="job-card">
                <h3>Associate PM - Benevity</h3>
                <span>Oct 2022 - Present</span>
                <p>
                  Delivering features for internal teams and users that optimize
                  workflows and drive user engagement.
                </p>
              </div>
              <div className="job-card">
                <h3>Customer Success Manager - Benevity</h3>
                <span>Oct 2021 - Oct 2022</span>
                <p>
                  Built strong client relationships to drive product adoption,
                  ensuring retention and exceptional customer experiences.
                </p>
              </div>
              <div className="job-card">
                <h3>Implementation Manager - Travelperk</h3>
                <span>Jan 2021 - Oct 2021</span>
                <p>
                  Accelerated revenue growth by implementing and launching multiple
                  global clients with SSO and API Integrations.
                </p>
              </div>
              <div className="job-card">
                <h3>Senior Technical Support Specialist - Travelperk</h3>
                <span>Jan 2020 - Dec 2020</span>
                <p>
                  Enhanced customer experience by resolving complex issues & optimizing
                  support workflows.
                </p>
              </div>
            </div>
          </section>

          <section id="education" className="section-container education">
            <h2>Education</h2>
            <div className="edu-container">
              <div className="edu-card">
                <h3>Product Management Bootcamp</h3>
                <span>CodeOp | 2023 - 2023</span>
                <p>
                  Focus on end-to-end product lifecycle, user-centric design, and
                  go-to-market strategies.
                </p>
              </div>
              <div className="edu-card">
                <h3>Web Development</h3>
                <span>The App Brewery | 2021-2022</span>
                <p>
                  Hands-on coding projects in HTML, CSS, JavaScript, and basic React.
                </p>
              </div>
              <div className="edu-card">
                <h3>Business Administration</h3>
                <span>KV Business School Lucerne | 2007-2010</span>
                <p>
                  Core principles in management, finance, marketing, and strategy.
                  Develop leadership, critical thinking, and communication skills to
                  analyze market trends, manage teams, and drive innovation in
                  dynamic business environments.
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
              <li>AI, ML, LLM's</li>
              <li>Basic HTML, CSS, JS, React, SQL, Python</li>
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
            </ul>
          </section>
        </div>

        {/* Row 3: Projects (single box) */}
        <section id="projects" className="section-container projects">
          <h2>Latest Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Work in progress</h3>
              <p>🌸</p>
              <a href="https://figma.com" target="_blank" rel="noreferrer">
                View in Figma
              </a>
            </div>
            <div className="project-card">
              <h3>Work in progress</h3>
              <p>🌸</p>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer / Contact */}
      <footer className="footer" id="contact">
        <div className="contact-details">
          <p>
            <a href="mailto:melany.haefliger@gmail.com">
              melany.haefliger@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/melanie-haefliger/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
