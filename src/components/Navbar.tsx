
function Navbar() {
  return (
    <header className="navbar container">
      <a href="#home" className="logo">
        <span>{"<"}</span> pamu.dev <span>{"/>"}</span>
      </a>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-cta">
        Let's talk ↗
      </a>
    </header>
  );
}

export default Navbar;
