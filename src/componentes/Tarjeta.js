import React from "react";
import './Tarjetas.css'

export default function Tarjeta({nombre, historia, img, url, sucesos}) {
  return (
    <div className="card text-center bg-dark w-100 h-100"> {/* Añade las clases w-100 y h-100 */}
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body text-light">
        <h4 className="card-title">{nombre}</h4>
        <p className="card-text">
          {historia}
          <br/>
          {sucesos}
        </p>
        <a href={url} target="_blank" className="btn btn-outline-danger">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
