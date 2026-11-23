import { Helmet } from "react-helmet-async";
function Home() {
  const whatsappLink = "https://wa.me/8801712166614?text=Hello%20Jahangir";
  return (
    <>
      <Helmet>
  <title>Jahangir Rasel | Junior Full Stack JavaScript Developer</title>

  <meta
    name="description"
    content="Jahangir Rasel is a Junior Full Stack JavaScript Developer working with React, Node.js, Express.js and MongoDB. Explore his projects and portfolio."
  />

  <meta
    name="keywords"
    content="Jahangir Rasel, JavaScript Developer, Junior Full Stack Developer, MERN Stack Developer, React Developer, Node.js Developer"
  />

  <meta name="author" content="Jahangir Rasel" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Jahangir Rasel | Junior Full Stack JavaScript Developer"
  />

  <meta
    property="og:description"
    content="Explore the portfolio and web development projects of Jahangir Rasel."
  />

  <meta property="og:type" content="website" />

  <meta property="og:site_name" content="Jahangir Rasel Portfolio" />

  <meta property="og:locale" content="en_US" />
</Helmet>

      <main className="hero" id="home">
        <div className="hero-content">
          <span className="availability">
            <span className="dot"></span>
            Available for opportunities
          </span>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Jahangir <span>Rasel.</span>
          </h1>

          <h2>
            Junior Full Stack
            <span> JavaScript Developer</span>
          </h2>

          <p className="description">
            I build modern, responsive and user-friendly web applications using
            React, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/RaselDevCodes"
              target="_blank"
              rel="noreferrer">
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jahangir-rasel-436286164/"
              target="_blank"
              rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="code-card">
            <span className="code-purple">const</span> developer = {"{"}
            <br />
            &nbsp;&nbsp;name:{" "}
            <span className="code-green">"Jahangir Rasel"</span>,
            <br />
            &nbsp;&nbsp;role:{" "}
            <span className="code-green">"Full Stack Developer"</span>,
            <br />
            &nbsp;&nbsp;skills: [<span className="code-green">
              "React"
            </span>, <span className="code-green">"Node.js"</span>],
            <br />
            &nbsp;&nbsp;passion:{" "}
            <span className="code-green">"Building for the web"</span>
            <br />
            {"}"};
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
