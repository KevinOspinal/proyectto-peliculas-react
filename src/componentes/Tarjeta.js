import React, { useState } from "react";
import "./Tarjetas.css";
import notImg from '../img/not-img.jpg';

export default function Tarjeta({ img, title, description, calificacion }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Verifica si img tiene un valor y luego decide qué URL usar
  const imageUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : notImg;
  const descriptionInfo = description ? description : 'SIN INFORMACION HASTA EL MOMENTO'
  return (
    <div
      className={`card text-center bg-white w-100 h-100 ${
        expanded ? "expanded" : ""
      }`}
    >
      <img
        src={imageUrl}
        className="card-img-top border"
        alt="IMG MOVE"
      />
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className={`card-text ${expanded ? "expanded" : ""}`}>
          {descriptionInfo}
        </p>
        <p style={{color:"yellow"}}>{calificacion ? calificacion : null}</p>
        {description.length > 100 && (
          <a
            href="#expand"
            onClick={handleExpandClick}
            className="btn btn-outline-secondary"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </a>
        )}
      </div>
    </div>
  );
}





