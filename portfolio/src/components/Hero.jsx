import profile from "../assets/Gee.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profile} alt="Profile" className="hero-pfp" />

      <div className="terminal">
        <p className="green">$ who is Mfundo</p>
        <p className="white">Aspiring Web Developer</p>
        <p>
          Highly motivated and adaptable junior web developer with hands-on
          experience in full-stack development and 4+ years in technical support
          across corporate and premium retail environments. Skilled in designing
          user-centric interfaces, integrating front-end with back-end systems,
          debugging complex issues, and working within agile DevOps
          environments. Strong communicator, analytical thinker, and fast
          learner with a solid foundation in Python, JavaScript, React, and API
          engineering. Seeking an opportunity to contribute to a modern
          engineering team and grow within a structured software development
          environment.
        </p>
      </div>
    </section>
  );
}
