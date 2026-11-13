import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import "./styles.css";

const skillGroups = [
  {
    category: "01 / FRONTEND",
    skills: ["React", "JavaScript", "Redux Toolkit", "HTML", "CSS", "Next.js"],
  },
  {
    category: "02 / APIs & UI",
    skills: [
      "REST APIs",
      "Server-Sent Events",
      "Ant Design",
      "Material UI",
      "Jest",
    ],
  },
  {
    category: "03 / TOOLS & BACKEND EXPOSURE",
    skills: [
      "Git",
      "AWS S3",
      "CloudFront",
      "GA4",
      "Java",
      "Spring Boot",
      "Ruby on Rails",
      "Node.js",
      "MongoDB",
      "MySQL",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "Remote Functional Validation",
    category: "Professional Project · Enphase Energy",
    description:
      "Built a remote functional validation experience that enables installers to verify Enphase Energy system states without being physically present at the installation site.",
    highlights: [
      "Built the complete frontend module from scratch with end-to-end ownership.",
      "Integrated real-time device telemetry using Server-Sent Events (SSE) and EventSourcePolyfill.",
      "Implemented dynamic validation states, error handling, resolve actions and retry workflows.",
      "Managed complex UI states and user interactions using Redux.",
      "Handled network failures, asynchronous device operations and automated grid transition retries.",
    ],
    tech: [
      "React",
      "JavaScript",
      "Redux",
      "REST APIs",
      "SSE",
      "EventSourcePolyfill",
    ],
    type: "professional",
    featured: true,
    link: "#contact",
  },
  {
    number: "02",
    name: "ExpenseTracker",
    category: "Internship Project · Justdial",
    description:
      "Developed a full-stack expense tracking application that helps users manage expenses and visualize their spending through interactive dashboards.",
    highlights: [
      "Implemented Google authentication using NextAuth.",
      "Built CRUD functionality for managing expenses.",
      "Created interactive pie-chart dashboards for expense visualization.",
      "Developed REST APIs and used server-side rendering with Next.js.",
    ],
    tech: ["Next.js", "Node.js", "MySQL", "NextAuth", "REST APIs"],
    type: "internship",
    featured: false,
    link: "#contact",
  },
];

type RfvCaseStudyModalProps = {
  onClose: () => void;
};

function RfvCaseStudyModal({ onClose }: RfvCaseStudyModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="case-study-overlay" onClick={onClose}>
      <div
        className="case-study-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="case-study-modal-header">
          <span className="project-category">
            PROFESSIONAL PROJECT · ENPHASE ENERGY
          </span>

          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            ×
          </button>
        </div>

        <div className="case-study-modal-content">
          <div className="case-study-header">
            <h2 id="case-study-title">Remote Functional Validation</h2>

            <p>
              Enabling installers to validate Enphase Energy systems remotely
              through real-time device communication and intelligent validation
              workflows.
            </p>
          </div>

          <div className="case-study-content">
            <div className="case-study-block">
              <h3>01. The Problem</h3>
              <p>
                Traditionally, installers had to be physically present at the
                installation site and connect to the Envoy's Wi-Fi network to
                perform functional validation. RFV enables them to perform this
                process remotely.
              </p>
            </div>

            <div className="case-study-block">
              <h3>02. My Role</h3>
              <p>
                I had complete ownership of the frontend development, building
                the module from scratch. I also participated in design
                discussions and frontend architecture decisions.
              </p>
            </div>

            <div className="case-study-block">
              <h3>03. System Architecture</h3>

              <p>
                The frontend communicates with backend services through REST
                APIs and SSE. The backend interacts with the Enphase device over
                MQTT and streams device updates back to the UI.
              </p>

              <div className="architecture-diagram">
                <div className="architecture-node frontend-node">
                  <span className="architecture-label">FRONTEND</span>
                  <strong>React Application</strong>
                  <small>RFV Interface</small>
                </div>

                <div className="architecture-connection">
                  <span>REST API requests</span>
                  <span className="architecture-arrow">↓</span>
                </div>

                <div className="architecture-node">
                  <span className="architecture-label">BACKEND</span>
                  <strong>Backend Services</strong>
                  <small>API processing & device communication</small>
                </div>

                <div className="architecture-connection">
                  <span>MQTT communication</span>
                  <span className="architecture-arrow">↓</span>
                </div>

                <div className="architecture-node device-node">
                  <span className="architecture-label">DEVICE</span>
                  <strong>Enphase System</strong>
                  <small>Device state and telemetry</small>
                </div>

                <div className="architecture-return">
                  <span className="architecture-label">
                    REAL-TIME DATA FLOW
                  </span>
                  <div className="architecture-connection">
                    <span>Device updates via MQTT</span>
                    <span className="architecture-arrow">↓</span>
                  </div>

                  <div className="architecture-node stream-node">
                    <strong>Backend SSE Streams</strong>
                    <small>Two streaming APIs</small>
                  </div>

                  <div className="architecture-connection">
                    <span>Server-Sent Events</span>
                    <span className="architecture-arrow">↓</span>
                  </div>

                  <div className="architecture-node stream-node">
                    <strong>EventSourcePolyfill</strong>
                    <small>Receives real-time updates</small>
                  </div>

                  <div className="architecture-connection">
                    <span>Update application state</span>
                    <span className="architecture-arrow">↓</span>
                  </div>

                  <div className="architecture-node frontend-node">
                    <strong>Redux Store</strong>
                    <small>Validation state management</small>
                  </div>

                  <div className="architecture-connection">
                    <span>Render updated states</span>
                    <span className="architecture-arrow">↓</span>
                  </div>

                  <div className="architecture-node frontend-node">
                    <strong>Validation UI</strong>
                    <small>Loading · Success · Error</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <h3>04. Technical Implementation</h3>
              <ul>
                <li>
                  Integrated two SSE APIs using EventSourcePolyfill to receive
                  real-time device data from the backend.
                </li>
                <li>
                  Built dynamic validation rows that evaluated incoming data and
                  displayed loading, success and error states.
                </li>
                <li>
                  Used Redux to manage validation states and coordinate UI
                  updates.
                </li>
                <li>
                  Implemented resolve and retry workflows to help users recover
                  from failed validations.
                </li>
                <li>
                  Handled network failures separately from successful responses
                  containing missing data.
                </li>
                <li>
                  Implemented independent off-grid and on-grid transition
                  workflows with automatic retries.
                </li>
              </ul>
            </div>

            <div className="case-study-block">
              <h3>05. Key Engineering Decisions</h3>

              <div className="engineering-decision">
                <h4>Server-Sent Events for real-time updates</h4>
                <p>
                  Used SSE to receive continuous device updates from the
                  backend. Since the communication was primarily
                  server-to-client, SSE was a suitable fit for the workflow.
                  REST APIs handled user-triggered operations.
                </p>
              </div>

              <div className="engineering-decision">
                <h4>Redux for centralized state management</h4>
                <p>
                  Used Redux to maintain validation states across multiple
                  independent row items, making it easier to coordinate updates
                  and keep the UI consistent as data arrived.
                </p>
              </div>

              <div className="engineering-decision">
                <h4>Independent validation states</h4>
                <p>
                  Maintained separate states for individual validation items so
                  that each row could independently represent loading, success
                  or failure without unnecessarily affecting other validation
                  items.
                </p>
              </div>

              <div className="engineering-decision">
                <h4>Explicit handling of asynchronous operations</h4>
                <p>
                  Disabled Resolve and Retry actions while requests were in
                  progress to prevent duplicate user actions. Also distinguished
                  network failures from successful responses with missing data.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <h3>06. Engineering Challenges</h3>
              <ul>
                <li>
                  Managing SSE connection lifecycles and preventing stale or
                  duplicate connections.
                </li>
                <li>
                  Handling multiple asynchronous validation states and different
                  failure scenarios.
                </li>
                <li>
                  Preventing duplicate user actions while backend operations
                  were in progress.
                </li>
                <li>
                  Coordinating delayed grid transitions and retry workflows.
                </li>
              </ul>
            </div>

            <div className="case-study-block">
              <h3>07. Impact</h3>
              <p>
                Enabled installers to perform functional validation remotely
                instead of having to visit the installation site specifically
                for this process, making the commissioning workflow more
                convenient.
              </p>
            </div>
          </div>
        </div>

        <div className="case-study-modal-footer">
          <span>React · Redux · SSE · REST APIs</span>
          <button onClick={onClose}>Close case study ↑</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showRfvCaseStudy, setShowRfvCaseStudy] = useState(false);

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            Open to frontend opportunities
          </div>

          <p className="terminal-label">
            <span>~/</span> hello-world
          </p>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span>make an impact.</span>
          </h1>

          <p className="hero-description">
            Hey, I'm a Frontend Engineer with 3 years of experience building
            interactive, scalable and performant web applications. I enjoy
            turning complex problems into simple, intuitive user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore my work ↗
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Samanvitha02"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/pamu-samanvitha-35b712201/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span>developer.ts</span>
          </div>

          <div className="terminal-code">
            <p>
              <span className="purple">const</span> developer = {"{"}
            </p>
            <p className="indent">
              name: <span className="green">"Pamu Samanvitha"</span>,
            </p>
            <p className="indent">
              role: <span className="green">"Frontend Engineer"</span>,
            </p>
            <p className="indent">
              experience: <span className="orange">"3 years"</span>,
            </p>
            <p className="indent">
              passion: <span className="green">"Building for the web"</span>,
            </p>
            <p className="indent">currentlyLearning: [</p>
            <p className="indent2 green">"TypeScript",</p>
            <p className="indent2 green">"Frontend Architecture"</p>
            <p className="indent">]</p>
            <p>{"};"}</p>
            <br />
            <p>
              <span className="purple">export default</span> developer;
            </p>
          </div>

          <div className="terminal-footer">
            <span className="status-dot" />
            Ready to build something great.
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section container" id="skills">
        <div className="skills-intro">
          <p className="section-label">// MY TOOLKIT</p>

          <h2>
            Technologies I use to
            <span> build things.</span>
          </h2>

          <p className="skills-description">
            My technical toolkit for building interactive, scalable and reliable
            frontend experiences.
          </p>

          <p className="learning-note">
            <span>Currently exploring</span>
            TypeScript & Frontend Architecture
          </p>
        </div>

        <div className="skills-content">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="intro-section container" id="about">
        <p className="section-label">// A LITTLE ABOUT ME</p>

        <h2>
          I build frontend experiences that solve
          <span> real-world problems.</span>
        </h2>

        <p>
          I'm a Frontend Engineer with 3 years of experience building and
          improving production-grade web applications, primarily using React and
          JavaScript.
        </p>

        <p>
          At Enphase Energy, I worked on complex UI workflows, real-time data
          integration, API migrations and performance optimization. I also took
          complete ownership of frontend features, from design discussions and
          architecture decisions to implementation.
        </p>

        <p>
          I enjoy solving challenging frontend problems, building intuitive user
          experiences and writing maintainable code. I'm always looking to
          learn, improve and take on meaningful engineering challenges.
        </p>

        <div className="about-highlights">
          <div>
            <strong>3+</strong>
            <span>Years of experience</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Primary expertise</span>
          </div>

          <div>
            <strong>End-to-end</strong>
            <span>Feature ownership</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section container" id="projects">
        <div className="section-heading">
          <p className="section-label">// WHAT I'VE BUILT</p>
          <h2>
            Featured Projects<span>.</span>
          </h2>
          <p>
            A few projects that reflect my experience, problem-solving and
            passion for building useful products.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.name}</h3>

              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-footer">
                <span>
                  {project.featured
                    ? "Professional experience"
                    : "Internship project"}
                </span>

                {project.featured && (
                  <button
                    className="project-link"
                    onClick={() => setShowRfvCaseStudy(true)}
                  >
                    View case study ↗
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section className="resume-section container" id="resume">
        <div className="resume-content">
          <p className="section-label">// WANT THE FULL PICTURE?</p>
          <h2>
            Let's look at the <span>details.</span>
          </h2>
          <p>
            Interested in my experience, technical skills and professional
            journey? Take a look at my resume.
          </p>

          <a href="/resume.pdf" className="btn btn-primary" download>
            Download Resume ↓
          </a>
        </div>

        <div className="resume-icon">
          <span>PDF</span>
          <p>resume.pdf</p>
          <small>Experience · Skills · Education</small>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section container" id="contact">
        <p className="section-label">// HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's build something
          <span> great together.</span>
        </h2>
        <p>
          I'm currently exploring frontend opportunities and would love to
          connect with people building interesting products.
        </p>

        <a href="mailto:samanvitha4902@gmail.com" className="btn btn-primary">
          Say Hello ↗
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/Samanvitha02"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/pamu-samanvitha-35b712201/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container">
        <p>Designed & built with React.</p>
        <p>© {new Date().getFullYear()} Pamu Samanvitha</p>
      </footer>
      {showRfvCaseStudy && (
        <RfvCaseStudyModal onClose={() => setShowRfvCaseStudy(false)} />
      )}
    </main>
  );
}

export default App;
