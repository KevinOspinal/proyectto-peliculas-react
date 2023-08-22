import React from "react";
import "./Paginacion.css";

export default function Paginacion({
  paginacion,
  handlePaginaSiguiente,
  handlePaginaAnterior,
  page
}) {
  return (
    <div className="contenedor-paginacion-fixed">
      <div className="contenedor-paginacion container-fluid d-flex justify-content-center align-items-center" style={{backgroundColor:"#251B37"}}>
        <div className="columna-paginacion col-7 d-flex justify-content-end ">
          <nav aria-label="navigation example" className="mt-3">
            <ul className="pagination flex-wrap">
              {paginacion.map((pagina) => (
                <li className="page-item custom-li" key={pagina.id}>
                  <a
                    className="page-link"
                    onClick={() => {
                      if (pagina.id === 1) {
                        handlePaginaAnterior();
                      } else if (pagina.id === 2) {
                        handlePaginaSiguiente();
                      }
                    }}
                  >
                    {pagina.title}
                  </a>
                </li>
              ))}
              <p>AAAA</p>
            </ul>
          </nav>
        </div>
        <div className="col-5 d-flex justify-content-end ">
          <h2 className="text-white rounded-text "> {page}</h2>
        </div>
      </div>
    </div>
  );
}
