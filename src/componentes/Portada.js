import Logo from '../img/fondo.jpg'
import './Portada.css'

export default function Portada() {
  return (
    <section className='portada container-fluid d-flex justify-content-center border-bottom'>
        <div className='row'>
            <div className='col text-center mt-4 text-light'>
                <h1>VIKINGOS</h1>
                <img className='img-fluid' src={Logo} alt='FONDO INFERIOR'/>
            </div>
        </div>
    </section>
  )
}
