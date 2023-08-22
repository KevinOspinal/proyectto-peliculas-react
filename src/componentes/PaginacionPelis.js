import React from "react";
import "./Paginacion.css";

export default function Paginacion({
  paginacion,
  selectedOption
}) {
  return (
    <div className="contenedor-paginacion container-fluid">
      <div className="columna-paginacion col-12 d-flex justify-content-center align-items-center">
        <nav aria-label="navigation example" className="mt-3">
          <ul className="pagination flex-wrap">
            {paginacion.map((pagina) => (
              <li className="page-item custom-li" key={pagina.id}>
                <a
                  className="page-link"
                  onClick={() => {
                    selectedOption(pagina.id)
                  }}
                >
                  {pagina.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
