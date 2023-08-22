import React from "react";
import logo from "../img/logogafas.png";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar({
  setInputSearch,
  handleSelection,
  inputSearch,
  handleCategoria,
}) {
  const handleInputChange = (e) => {
    setInputSearch(onChange); // Actualizar el valor del campo de entrada en el estado
  };

  //GUARDAR EL ESTADO DEL INPUT y luego cuando hagan click en el boton ejecutar
  //la funcion handleInputChange para que lo guarde.
  const [onChange, setOnChange] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top ">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="logo" width="70px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="navbar-toggler">
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item ">
                <a
                  className="nav-link "
                  id="generosDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={() => 
                    handleSelection(1)}
                >
                  Inicio
                </a>
              </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                id="peliculasDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Generos
              </a>
              <ul className="dropdown-menu" aria-labelledby="peliculasDropdown">
                <li>
                  <a className="dropdown-item" onClick={() => {
                    handleSelection(5) // 5 LE MANDAMOS LAS PELICULAS QUE HAY PARA QUE MUESTRE
                    handleCategoria(28); //28 ES EL NUMERO QUE LE PASAMOS A LA API DE CATEGORIA
                    }}>
                    Acción
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(35);handleSelection(5) }} >
                    Comedia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(18); handleSelection(5)}}>
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(10768); handleSelection(5)}}>
                    Terror
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(16); handleSelection(5)}}>
                  Animación
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(99); handleSelection(5)}}>
                  Documental
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(80); handleSelection(5)}}>
                  Crimen
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(36); handleSelection(5)}}>
                  Historia
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="seriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </a>
              <ul className="dropdown-menu" aria-labelledby="seriesDropdown">
                <li>
                  <a className="dropdown-item"  onClick={() => {handleCategoria(10759);handleSelection(5)}}>
                    Acción
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => {handleCategoria(18);handleSelection(5)}}>
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(10768);handleSelection(5)}}>
                    Terror
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(9648);handleSelection(5)}}>
                  Misterio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(10764);handleSelection(5)}}>
                  Reality
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(16);handleSelection(5)}}>
                  Animación
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(10766);handleSelection(5)}}>
                  Ciencia ficción y fantasía
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => {handleCategoria(10763);handleSelection(5)}}>
                  Noticias
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <form className="d-flex" role="formBusqueda">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search movie"
                  aria-label="Search"
                  onChange={(e) => setOnChange(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  style={{
                    backgroundColor: "#fbfdfb",
                    color: "rgb(8, 2, 2)",
                    padding: "10px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "10px",
                    borderRadius: "35px",
                  }}
                  onClick={(e) => {
                    if (onChange) {
                      handleInputChange();
                      handleSelection(4);
                      e.preventDefault();
                    } else {
                      handleSelection(1);
                      e.preventDefault();
                      console.log(
                        "No hay entrada disponible en el Search => : ",
                        inputSearch
                      );
                    }
                  }}
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
