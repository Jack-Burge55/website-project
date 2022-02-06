import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <Link to="/" class="navbar-item">Home</Link>

      <Link to="/sudoku" class="navbar-item">Sudoku</Link>

      <Link to="/lucy" class="navbar-item">Lucy</Link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Graph Problems
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            TBD
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            TBD
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            TBD
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            TBD
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Nav;