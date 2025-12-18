import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#hero">{`< Mfundo G. Mkhasibe />`}</a>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
        >{`<Projects />`}</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>{`<KeySkills />`}</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>{`</Contact>`}</a>
      </div>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
