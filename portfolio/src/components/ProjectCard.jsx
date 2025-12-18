export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-list">
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="card-links">
        <a href={github} target="_blank">
          Code
        </a>
        <a href={demo} target="_blank">
          Live
        </a>
      </div>
    </div>
  );
}
