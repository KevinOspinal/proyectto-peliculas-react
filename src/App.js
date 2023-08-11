import './App.css';
import Navbar from './componentes/Navbar';
import Tarjetas from './componentes/Tarjetas';
import Portada from "./componentes/Portada";
import SectionTemporadas from './componentes/SectionTemporadas';

import epi1 from './img/Capitulos/1 capitulo.jpg'
import epi2 from './img/Capitulos/2 capitulo.jpg'
import epi3 from './img/Capitulos/3 capitulo.jpg'
import epi4 from './img/Capitulos/4 capitulo.jpg'
import epi5 from './img/Capitulos/5 capitulo.jpg'
import epi6 from './img/Capitulos/6 capitulo.jpg'
import epi7 from './img/Capitulos/7 capitulo.jpg'
import epi8 from './img/Capitulos/8 capitulo.jpg'
import epi9 from './img/Capitulos/9 capitulo.jpg'
import epi10 from './img/Capitulos/10 capitulo.jpg'


const temporada1Eventos = [
  {
    episodio: 1,
    titulo: "Ritos de paso",
    descripcion: "Introducción a Ragnar Lothbrok y su deseo de explorar hacia el oeste.",
    img:epi1,
    sucesos: [
      "Ragnar planea un viaje hacia el oeste.",
      "Desafía la autoridad de Earl Haraldson."
    ]
  },
  {
    episodio: 2,
    titulo: "Ira",
    descripcion: "Enfrentamientos con Earl Haraldson y la presentación de un nuevo diseño de barco.",
    img:epi2,
    sucesos: [
      "Ragnar y su tripulación se enfrentan a Earl Haraldson.",
      "Floki presenta un nuevo diseño de barco."
    ]
  },
  {
    episodio: 3,
    titulo: "Despojado",
    descripcion: "Ragnar lidera una expedición exitosa hacia Inglaterra y Athelstan comienza a aprender la cultura vikinga.",
    img:epi3,
    sucesos: [
      "Ragnar lidera una expedición vikinga a Inglaterra.",
      "Los vikingos se enfrentan a resistencia de los sajones.",
      "Athelstan empieza a aprender la cultura vikinga."
    ]
  },
  {
    episodio: 4,
    titulo: "Juzgar",
    descripcion: "Ragnar regresa con botines y prisioneros, enfrentando un juicio por desobedecer órdenes.",
    img:epi4,
    sucesos: [
      "Ragnar y su tripulación regresan a Kattegat con botines y prisioneros.",
      "Earl Haraldson organiza un juicio para Ragnar."
    ]
  },
  {
    episodio: 5,
    titulo: "La prueba",
    descripcion: "Rollo traiciona a Ragnar, tensiones entre los hermanos y planificación de nuevas expediciones.",
    img:epi5,
    sucesos: [
      "Rollo traiciona a Ragnar.",
      "Tensiones entre Ragnar y Rollo.",
      "Planificación de nuevas expediciones vikingas."
    ]
  },
  {
    episodio: 6,
    titulo: "Castigo",
    descripcion: "Ragnar y su grupo enfrentan una confrontación final con Earl Haraldson.",
    img:epi6,
    sucesos: [
      "Ragnar y sus aliados se enfrentan a Earl Haraldson en un enfrentamiento decisivo."
    ]
  },
  {
    episodio: 7,
    titulo: "Traidor",
    descripcion: "Rollo lucha con sus sentimientos y rivalidades, mientras los vikingos enfrentan desafíos externos.",
    img:epi7,
    sucesos: [
      "Rollo lucha con sus sentimientos hacia Ragnar.",
      "Los vikingos enfrentan desafíos externos."
    ]
  },
  {
    episodio: 8,
    titulo: "Sacrificio",
    descripcion: "Rituales de sacrificio y nuevos desafíos para Ragnar como líder.",
    img:epi8,
    sucesos: [
      "Los vikingos participan en un ritual de sacrificio.",
      "Ragnar enfrenta nuevos desafíos como líder."
    ]
  },
  {
    episodio: 9,
    titulo: "Todo cambia",
    descripcion: "Exploración de los celos de Rollo y enfrentamientos en tierras extranjeras.",
    img:epi9,
    sucesos: [
      "Rollo enfrenta celos y rivalidad hacia Ragnar.",
      "Los vikingos enfrentan desafíos en tierras extranjeras."
    ]
  },
  {
    episodio: 10,
    titulo: "En la traición",
    descripcion: "Temporada final con enfrentamientos mortales y un cliffhanger para la siguiente temporada.",
    img:epi10,
    sucesos: [
      "Ragnar y su tripulación enfrentan desafíos mortales en tierras extranjeras.",
      "Temporada final con un cliffhanger que establece los eventos para la próxima temporada."
    ]
  }
];
const temporada2Eventos = [
{
  episodio: 1,
  titulo: "Ritos de Paso",
  descripcion: "Ragnar Lothbrok, un agricultor y guerrero vikingo, anhela explorar tierras desconocidas hacia el oeste. Desafiando la autoridad del Earl Haraldson, líder local, Ragnar organiza una expedición para explorar más allá del mar. Esto provoca tensiones en su familia y comunidad.",
  sucesos: [
    "Ragnar planea un viaje hacia el oeste.",
    "Desafía la autoridad de Earl Haraldson."
  ]
},
{
  episodio: 2,
  titulo: "Ira de los Nórdicos",
  descripcion: "Ragnar y su tripulación se embarcan en un viaje hacia el oeste, enfrentando difíciles condiciones y desafíos en el camino. Mientras tanto, Rollo, el hermano de Ragnar, lucha con sentimientos de inferioridad y celos hacia su exitoso hermano. Floki, un experto en la construcción de barcos, presenta un nuevo diseño que podría mejorar las expediciones futuras.",
  sucesos: [
    "Viaje de Ragnar hacia el oeste con obstáculos.",
    "Rollo enfrenta celos y rivalidad hacia Ragnar.",
    "Floki presenta un nuevo diseño de barco."
  ]
},
{
  episodio: 3,
  titulo: "Desposeídos",
  descripcion: "La expedición vikinga llega a las costas de Inglaterra, donde encuentran un monasterio lleno de riquezas. Ragnar y su grupo enfrentan resistencia de los monjes locales mientras saquean el monasterio. Durante este tiempo, Athelstan, un monje capturado, comienza a aprender sobre la cultura y creencias vikingas.",
  sucesos: [
    "Los vikingos llegan a las costas de Inglaterra.",
    "Saqueo del monasterio y enfrentamiento con los monjes.",
    "Athelstan empieza a aprender la cultura vikinga."
  ]
},
{
  episodio: 4,
  titulo: "Juicio",
  descripcion: "Ragnar y su tripulación regresan a su hogar con botín y prisioneros. Esto provoca tensiones entre los vikingos y el Earl Haraldson, quien organiza un juicio para castigar a Ragnar por desobedecer sus órdenes. El juicio pone en juego el futuro de Ragnar y su familia.",
  sucesos: [
    "Ragnar y su tripulación regresan con botín y prisioneros.",
    "Earl Haraldson organiza un juicio para castigar a Ragnar."
  ]
},
{
  episodio: 5,
  titulo: "Incursión",
  descripcion: "Las tensiones entre Ragnar y Rollo aumentan después de que Rollo traiciona a Ragnar durante una incursión vikinga. Esto lleva a un enfrentamiento entre los hermanos. Mientras tanto, Ragnar y su esposa Lagertha enfrentan desafíos en su relación debido a la traición de Rollo.",
  sucesos: [
    "Rollo traiciona a Ragnar durante una incursión.",
    "Tensiones entre Ragnar y Rollo.",
    "Ragnar y Lagertha enfrentan desafíos en su relación."
  ]
},
{
  episodio: 6,
  titulo: "Entierro de los Muertos",
  descripcion: "Ragnar y su grupo se enfrentan a un enfrentamiento final con el Earl Haraldson y sus hombres. El enfrentamiento resulta en la muerte del Earl y Ragnar emerge como líder en Kattegat. La victoria tiene un costo emocional, ya que varios vikingos han perdido la vida en la lucha.",
  sucesos: [
    "Ragnar y sus aliados se enfrentan al Earl Haraldson en un enfrentamiento decisivo.",
    "Muerte del Earl Haraldson.",
    "Ragnar se convierte en líder de Kattegat."
  ]
},
{
  episodio: 7,
  titulo: "Rescate de un Rey",
  descripcion: "Rollo lucha con sus sentimientos hacia Ragnar, ya que se siente eclipsado por su hermano. Los vikingos enfrentan desafíos externos cuando enfrentan a un rey enemigo que busca vengarse de la incursión anterior. Ragnar y su grupo se ven en una posición peligrosa mientras buscan rescatar a uno de sus propios hombres.",
  sucesos: [
    "Rollo lucha con sus sentimientos hacia Ragnar.",
    "Los vikingos enfrentan desafíos externos de un rey enemigo.",
    "Ragnar y su grupo buscan rescatar a uno de sus hombres."
  ]
},
{
  episodio: 8,
  titulo: "Sacrificio",
  descripcion: "Los vikingos participan en un ritual de sacrificio para honrar a los dioses. Ragnar enfrenta nuevos desafíos como líder, ya que debe tomar decisiones difíciles para el bienestar de su gente. Mientras tanto, la relación entre Athelstan y los vikingos continúa desarrollándose.",
  sucesos: [
    "Los vikingos participan en un ritual de sacrificio.",
    "Ragnar enfrenta nuevos desafíos como líder.",
    "Continúa el desarrollo de la relación entre Athelstan y los vikingos."
  ]
},
{
  episodio: 9,
  titulo: "Todo Cambia",
  descripcion: "Rollo enfrenta celos y rivalidad hacia Ragnar, lo que lleva a un conflicto interno en el grupo vikingo. Los vikingos se aventuran en nuevas tierras extranjeras y enfrentan desafíos desconocidos. Ragnar lucha por mantener a su grupo unido mientras enfrenta amenazas externas y tensiones internas.",
  sucesos: [
    "Rollo enfrenta celos y rivalidad hacia Ragnar.",
    "Los vikingos se aventuran en nuevas tierras extranjeras.",
    "Ragnar lucha por mantener a su grupo unido y enfrenta amenazas externas."
  ]
},
{
  episodio: 10,
  titulo: "El Padre Nuestro",
  descripcion: "La temporada culmina con un enfrentamiento dramático en un nuevo territorio. Ragnar y su tripulación se enfrentan a desafíos mortales mientras buscan nuevas oportunidades de saqueo. El episodio cierra con un cliffhanger que establece los eventos para la próxima temporada.",
  sucesos: [
    "Ragnar y su tripulación enfrentan desafíos mortales en un nuevo territorio.",
    "La temporada culmina con un enfrentamiento dramático.",
    "El episodio cierra con un cliffhanger que establece los eventos para la próxima temporada."
  ]
}
]

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Portada />
      <SectionTemporadas temporada1Eventos={temporada1Eventos} temporada2Eventos={temporada2Eventos}/>
      <Tarjetas/>
    </div>
  );
}

export default App;
