import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>{`<Projects />`}</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Portfolio Website"
          description="A modern dev portfolio built with React + Vite."
          tech={["React", "Vite", "CSS"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Weather App"
          description="API-powered weather dashboard."
          tech={["React", "API", "CSS"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Online-traffic App"
          description="API-powered weather dashboard."
          tech={["React", "API", "CSS"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Clothing App"
          description="API-powered weather dashboard."
          tech={["React", "API", "CSS"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Sheep App"
          description="API-powered weather dashboard."
          tech={["React", "API", "CSS"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Cows App"
          description="API-powered weather dashboard."
          tech={["React", "API", "CSS"]}
          github="#"
          demo="#"
        />
      </div>
    </section>
  );
}
