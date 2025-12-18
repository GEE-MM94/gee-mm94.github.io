export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>{`<KeySkills />`}</h2>

      <div className="skills-category">
        <h3>Front-End</h3>
        <p>
          JavaScript (ES6+), React, HTML5, CSS3, jQuery, Bootstrap, Responsive
          Design
        </p>
      </div>

      <div className="skills-category">
        <h3>Back-End</h3>
        <p>Node.js, Express, Django, Python</p>
      </div>

      <div className="skills-category">
        <h3>Databases</h3>
        <p>SQL, MongoDB</p>
      </div>

      <div className="skills-category">
        <h3>DevOps & Tools</h3>
        <p>Git, Docker, IBM Cloud, CI/CD Pipelines, Linux, PowerShell</p>
      </div>

      <div className="skills-category">
        <h3>Software Engineering</h3>
        <p>
          REST APIs, Test-Driven Development (TDD), Agile, Microservices
          Fundamentals, System Integration
        </p>
      </div>

      <div className="skills-category">
        <h3>Additional</h3>
        <p>
          PHP, Java, Data Quality, Reporting, Monitoring & Performance Debugging
        </p>
      </div>
    </section>
  );
}
