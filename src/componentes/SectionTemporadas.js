import { useState, useEffect } from 'react';

import React from 'react'
import Paginacion from './Paginacion'
import Tarjeta from './Tarjeta';
const Temporadas = [
    {
        id:1,
        title:"Temporada 1"
    },
    {
        id:2,
        title:"Temporada 2"
    },
    {
        id:3,
        title:"Temporada 3"
    },
    {
        id:4,
        title:"Temporada 4"
    },
    {
        id:5,
        title:"Temporada 5"
    },

]


export default function SectionTemporadas({temporada1Eventos,temporada2Eventos}) {
  const [temporadaSeleccionada, setTemporadaSeleccionada] = useState(1);
  const [eventosTemporada, setEventosTemporada] = useState([]);

  const temporadasEventos = {
    1: temporada1Eventos,
    2: temporada2Eventos,
  };

  useEffect(() => {
    setEventosTemporada(temporadasEventos[temporadaSeleccionada]);
  }, [temporadaSeleccionada]);

  const cambiarTemporada = (temporadaId) => {
    setTemporadaSeleccionada(temporadaId);
  };

  return (
    <section className='container-fluid d-flex justify-content-center align-items-center h-100'> 
        <div className='row mt-4'>
            <div className='col-12 d-flex justify-content-center'>
                <Paginacion paginacion={Temporadas} cambiarTemporada={setTemporadaSeleccionada}/>
            </div>
            {
              eventosTemporada.map((episodio) => (
                    <div className="col-sm-6 col-md-4 col-lg-4 my-5">
                        <Tarjeta sucesos={episodio.sucesos} nombre={episodio.titulo} img={episodio.img} historia={episodio.descripcion}/>
                    </div>))
            }
        </div>
                
    </section>
  )
}
