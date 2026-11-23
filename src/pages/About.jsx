import { Helmet } from "react-helmet-async";
function About() {
  return (
    <>
      <Helmet>
        <title>About Jahangir Rasel | JavaScript Developer</title>

        <meta
          name="description"
          content="Learn about Jahangir Rasel, a Junior Full Stack JavaScript Developer with experience in React, Node.js, Express.js, MongoDB and WordPress."
        />

        <meta name="author" content="Jahangir Rasel" />
        <meta
          property="og:title"
          content="About Jahangir Rasel | JavaScript Developer"
        />

        <meta
          property="og:description"
          content="Learn about Jahangir Rasel, his development skills, experience and background."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jahangir Rasel Portfolio" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <main className="page-container about-page">
        <p className="section-label">GET TO KNOW ME</p>

        <h1>
          About Me<span>.</span>
        </h1>

        <p className="about-intro">
          Hello! I'm Jahangir Rasel, a Junior Full Stack JavaScript Developer
          passionate about building modern and user-friendly web applications.
        </p>

        <p>
          I work with JavaScript, React, Node.js, Express.js and MongoDB. I also
          have experience building and maintaining WordPress websites using
          Elementor Pro.
        </p>

        <p>
          My goal is to keep improving my development skills, work on real-world
          projects, and contribute to a professional development team.
        </p>

        <h2>My Technical Skills</h2>

        <div className="skills-grid">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "WordPress",
            "Elementor Pro",
            "Git & GitHub",
          ].map((skill) => (
            <div className="skill-item" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default About;
