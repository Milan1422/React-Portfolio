import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav justify-content-end bg-dark p-3">
        <h1 class="navbar-brand text-white" href="#">
          Navbar
        </h1>
        <li className="nav-item">
          <a className="nav-link active text-white" href="Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="Skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="About">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="Experience">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="Projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
