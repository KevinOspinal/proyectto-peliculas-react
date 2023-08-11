import React from "react";
import Tarjeta from "./Tarjeta";
import './Tarjetas.css'

import Ragnar from "../img/ragnar.jpg";
import Bjor from "../img/bjor.png";
import Rolo from "../img/rolo.png";
import Floki from "../img//floki.png";
import Ivar from "../img/ivar.png";
import Lagerta from "../img/lagerta.png";

const Vikingos = [
  {
    id: 1,
    tittle: "Ragnar",
    historia:
      "Ragnar Lothbrok, vikingo legendario en Vikings, lidera incursiones audaces, desafía reinos y forja su legado.",
    img: Ragnar,
    url: "Ragnar.com",
  },
  {
    id: 2,
    tittle: "Bjor",
    historia:
      "Bjorn Ironside, hijo de Ragnar en Vikings, sigue pasos épicos, conquista mares y tierras, dejando huella vikinga.",
    img: Bjor,
    url: "Bjor.com",
  },
  {
    id: 3,
    tittle: "Floki",
    historia:
      "Floki, constructor y fiel amigo de Ragnar en Vikings, abraza espiritualidad nórdica, explorando lo desconocido.",
    img: Floki,
    url: "Floki.com",
  },
  {
    id: 4,
    tittle: "Lagerta",
    historia:
      "Lagertha, valiente guerrera en Vikings, desafía convenciones, reina y lucha con gracia y fuerza.",
    img: Lagerta,
    url: "Lagerta.com",
  },
  {
    id: 5,
    tittle: "Ivar",
    historia:
      "Ivar the Boneless, en Vikings, es astuto estratega, enfrenta discapacidad, lucha por poder y dominio vikingo.",
    img: Ivar,
    url: "Ivar.com",
  },
  {
    id: 6,
    tittle: "Rolo",
    historia:
      "Rollo, hermano de Ragnar en Vikings, se convierte en líder franco, enfrentando su herencia y lealtades.",
    img: Rolo,
    url: "Rolo.com",
  },
];

export default function Tarjetas() {
  return (
    <div className=" container-fluid d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {Vikingos.map((viking) => (
          <div className="col-sm-6 col-md-4 col-lg-2 my-5" key={viking.id}>
            <Tarjeta
              nombre={viking.tittle}
              historia={viking.historia}
              img={viking.img}
              url={viking.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
