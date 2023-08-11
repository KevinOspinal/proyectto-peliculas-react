import React from "react";

export default function Navbar() {
  return (
    <div className="container-fluid d-flex justify-content-center border-bottom bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mi Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
