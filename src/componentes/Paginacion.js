import React from "react";
import './Paginacion.css'

export default function Paginacion({paginacion,cambiarTemporada}) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination flex-wrap">
        {paginacion.map((pagina) => (
          <li className="page-item custom-li" key={pagina.id}>
            <a
              className="page-link"
              href="#"
              onClick={() => cambiarTemporada(pagina.id)}
            >
              {pagina.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
