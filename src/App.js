import React from "react";
import "./App.css";
import profileImage from "./profile.png"; // We'll add this image next

function App() {
  return (
    <div className="portfolio-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1 className="profile-name">Melanie Haefliger</h1>
          <h2 className="profile-title">Product Manager</h2>
          <p className="profile-quote">
            “Great products win hearts and fill wallets, let’s make that magic happen!”
          </p>
        </div>

        <div className="contact-info">
          <h3>Contact</h3>
          <ul>
            <li>Phone: +34 633776004</li>
            <li>Email: melany.haefliger@gmail.com</li>
            <li>Location: Europe</li>
          </ul>
        </div>

        <div className="social-links">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/melanie-haefliger/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="languages">
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>Swiss German & German</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Experience Section */}
        <section className="experience">
          <h2>Experience</h2>
          <div className="job">
            <h3>Associate PM - Benevity</h3>
            <span>Oct 2022 - Present</span>
            <p>
              Delivering features for internal teams and users that
              optimize workflows and drive user engagement.
            </p>
          </div>
          <div className="job">
            <h3>Customer Success Manager - Benevity</h3>
            <span>Oct 2021 - Oct 2022</span>
            <p>
            Built strong client relationships to drive product adoption, and ensured retention
            while delivering exceptional customer experiences.
            </p>
          </div>
          <div className="job">
            <h3>Implementation Manager - Travelperk</h3>
            <span>Jan 2021 - Oct 2021</span>
            <p>
              Accelerated revenue growth by implementing and launching multiple global clients with SSO
              and API Integrations
            </p>
          </div>
          <div className="job">
            <h3>Senior Technical Support Specialist - Travelperk</h3>
            <span>Jan 2020 - Dec 2020</span>
            <p>
            Enhanced customer experience by resolving complex issues & optimizing support workflows
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
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

        {/* Education Section */}
        <section className="education">
          <h2>Education</h2>
          <div className="edu">
            <h3>Product Management Bootcamp</h3>
            <span>CodeOp | 2023 - 2023</span>
          </div>
          <div className="edu">
            <h3>Web Development</h3>
            <span>The App Brewery | 2021-2022</span>
          </div>
          <div className="edu">
            <h3>Business Administration</h3>
            <span>KV Business School Lucerne | 2007-2010</span>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className="latest-projects">
          <h2>Latest Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Work in progress</h3>
              <p>
                🌸
              </p>
              <a href="https://figma.com" target="_blank" rel="noreferrer">
                View in Figma
              </a>
            </div>
            <div className="project-card">
              <h3>Work in progress</h3>
              <p>
                🌸
              </p>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="tools">
          <h2>Tools</h2>
          <ul className="tools-list">
            <li>Jira</li>
            <li>Figma</li>
            <li>Asana</li>
            <li>Looker</li>
            <li>Mixpanel</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
