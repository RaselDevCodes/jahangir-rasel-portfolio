import { Helmet } from "react-helmet-async";
function Projects() {
  const projects = [
    {
      title: "Saidihomes",
      category: "Real Estate Website",
      description:
        "A property-focused website with real estate content and a user-friendly browsing experience.",
      technologies: ["WordPress", "Elementor Pro"],
      link: "https://saidihomes.com",
      linkText: "Visit Website",
    },
    {
      title: "BeHomes API Integration",
      category: "WordPress Development",
      description:
        "A custom WordPress integration connecting property data from the BeHomes API with website listings and filters.",
      technologies: ["WordPress", "PHP", "REST API", "JavaScript"],
      link: "https://saidihomes.com/off-plan-properties/",
      linkText: "Visit Website",
    },
    {
      title: "Web Application",
      category: "Full Stack Development",
      description:
        "A learning project focused on building an e-commerce application with authentication, products and orders.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      link: "https://real-api-projects.vercel.app/",
      linkText: "Visit Website",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Jahangir Rasel - Web Developer Portfolio</title>

        <meta
          name="description"
          content="Explore web development projects by Jahangir Rasel, including real estate websites, WordPress API integrations and full-stack JavaScript applications."
        />

        <meta name="author" content="Jahangir Rasel" />
        <meta
          property="og:title"
          content="Projects | Jahangir Rasel - Web Developer"
        />

        <meta
          property="og:description"
          content="Explore web development projects by Jahangir Rasel, including real estate websites and full-stack applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jahangir Rasel Portfolio" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="page-container projects-page">
        <p className="section-label">MY WORK</p>

        <h1>
          Featured Projects<span>.</span>
        </h1>

        <p className="projects-intro">
          Here are some of my development projects and work.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-number">0{index + 1}</span>

              <p className="project-category">{project.category}</p>

              <h2>{project.title}</h2>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link">
                  {project.linkText} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

export default Projects;
