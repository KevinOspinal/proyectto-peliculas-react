import Tarjeta from './Tarjeta';

export default function SectionTemporadas({Movies}) {
    return (
        <section className='container d-flex justify-content-center align-items-center h-100 mb-4'>
            <div className='row mt-4 mb-4'>
                <div className='row'>
                  {
                    Movies.map((pelicula) => (
                      <div className="col-sm-6 col-md-3 col-lg-3 my-5" key={pelicula.id}>
                        <Tarjeta img={pelicula.poster_path} title={pelicula.title} description={pelicula.overview} calificacion={pelicula.vote_average} key={pelicula.id}/>
                      </div>
                    ))
                  }
                </div>
            </div>-
        </section>
    );
}
