import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar";
import Portada from "./componentes/Portada";
import SectionTemporadas from "./componentes/SectionTemporadas";
import Paginacion from "./componentes/Paginacion";
import PaginacionPelis from "./componentes/PaginacionPelis";

function App() {
  // Estados para gestionar diferentes aspectos de la aplicación
  const [page, setPage] = useState(1);
  const [estrenos, setEstrenos] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newMove, setNewMove] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1); // Por defecto, mostrará las películas populares
  const [MovesFilter, setMovesFilter] = useState([]);
  const [inputSearch, setInputSearch] = useState(""); //SE GUARDA EL ESTADO DEL INPUT
  const [NumeroCategoria, setNumeroCategoria] = useState()
  const [CategoriasPeliculas, setCategoriasPeliculas] = useState([])



  // Manejo de paginación
  const handlePaginaSiguiente = () => {
    setPage(page + 1);
  };
  const handlePaginaAnterior = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  // Cambiar la opción de películas seleccionada
  const handleSelection = (id) => {
    setPage(1);
    setSelectedOption(id);
  };

    // Cambiar la categoria de películas seleccionada
    const handleCategoria = (id) => {
      setNumeroCategoria(id);
    };

  // Mapeo de opciones de películas a sus correspondientes listas
  const moviesMap = {
    1: popular,
    2: estrenos,
    3: newMove,
    4: MovesFilter,
    5: CategoriasPeliculas
  };

  //MOSTRAMOS LAS PELICULAS DEPENDIENDO DE CUAL ES EL ESTADO DE MOVIESMAP
  const getMoviesToShow = () => moviesMap[selectedOption];

  const navPelis = [
    {
      id: 1,
      title: "Tendencias",
    },
    {
      id: 2,
      title: "Estrenos",
    },
    {
      id: 3,
      title: "Proximas a estrenar ",
    },
  ];

  const Paginas = [
    {
      id: 1,
      title: "Anterior",
    },
    { id: 2, title: "Siguiente" },
  ];

  useEffect(() => {

    // Carga de peliculas accion, comedia, drama
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=110b152ac58bda8df6be0e4245d4d7ca&with_genres=${NumeroCategoria}&language=es-ES&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setCategoriasPeliculas(data.results))
      .catch((error) => console.error("Error fetching data:", error));

      // Carga de series accion, comedia, drama
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=110b152ac58bda8df6be0e4245d4d7ca&with_genres=&with_genres=${NumeroCategoria}&language=es-ES&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setCategoriasPeliculas(data.results))
      .catch((error) => console.error("Error fetching data:", error));

    // Carga de películas populares
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=110b152ac58bda8df6be0e4245d4d7ca&language=es-Es&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setPopular(data.results))
      .catch((error) => console.error("Error fetching data:", error));

    // Carga de películas en estrenos
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=110b152ac58bda8df6be0e4245d4d7ca&language=es-ES&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setEstrenos(data.results))
      .catch((error) => console.error("Error fetching data:", error));

    // Carga de películas esperadas
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=110b152ac58bda8df6be0e4245d4d7ca&sort_by=release_date.desc&language=es-ES&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNewMove(data.results); // Lista de películas nuevas
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Carga de películas filtradas
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=110b152ac58bda8df6be0e4245d4d7ca&language=es-ES&query=${inputSearch}&language=es-ES&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setMovesFilter(data.results))
      .catch((error) => console.error("Error fetching data:", error));

  }, [page, inputSearch,NumeroCategoria]);

  // Renderización de componentes
  return (
    <div className="App">
      <Navbar
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        handleSelection={handleSelection}
        handleCategoria={handleCategoria}
      />
      <Portada />
      <PaginacionPelis paginacion={navPelis} selectedOption={handleSelection} />
      <SectionTemporadas Movies={getMoviesToShow()} />
      <Paginacion
        paginacion={Paginas}
        handlePaginaSiguiente={handlePaginaSiguiente}
        handlePaginaAnterior={handlePaginaAnterior}
        page={page}
      />
    </div>
  );
}

export default App;
