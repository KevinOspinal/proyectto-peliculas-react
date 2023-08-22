import Logo from '../img/fondoportada2.png'
import './Portada.css'

export default function Portada() {
  return (
    <section className='portada container-fluid d-flex justify-content-center '>
        <div className='row'>
            <div className='col text-center text-light'>
                <img className='img-fluid img' src={Logo} alt='FONDO INFERIOR'/>
            </div>
        </div>
    </section>
  )
}
