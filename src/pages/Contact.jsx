import { Helmet } from "react-helmet-async";
function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "uxrashel810@gmail.com",
      link: "mailto:uxrashel810@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "+8801712166614",
      link: "https://wa.me/8801712166614",
    },
    {
      label: "Fiverr",
      value: "View my Fiverr profile",
      link: "https://fiverr.com/mohammedrash433/",
    },
    {
      label: "Upwork",
      value: "View my Upwork profile",
      link: "https://www.upwork.com/freelancers/~01b55e4998cc221a72",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Jahangir Rasel | Hire a JavaScript Developer</title>

        <meta
          name="description"
          content="Contact Jahangir Rasel for JavaScript development, React, Node.js, Express.js, MongoDB and WordPress projects, freelance work and job opportunities."
        />

        <meta name="author" content="Jahangir Rasel" />
        <meta
          property="og:title"
          content="Contact Jahangir Rasel | Hire a JavaScript Developer"
        />

        <meta
          property="og:description"
          content="Contact Jahangir Rasel for web development projects, freelance work and job opportunities."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jahangir Rasel Portfolio" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="page-container contact-page">
        <p className="section-label">GET IN TOUCH</p>

        <h1>
          Let's Work Together<span>.</span>
        </h1>

        <p className="contact-intro">
          Have a project, job opportunity, or collaboration in mind? Feel free
          to contact me.
        </p>

        <div className="contact-list">
          {contacts.map((contact) => (
            <a
              href={contact.link}
              key={contact.label}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="contact-card">
              <div>
                <span>{contact.label}</span>
                <h3>{contact.value}</h3>
              </div>

              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export default Contact;
