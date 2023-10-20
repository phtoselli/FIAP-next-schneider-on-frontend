import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Image from 'next/image';

import logo1 from '../images/logo.png';
import logo2 from '../images/schneider.png';

export default function Footer() {
  return (
    <footer className='container-fluid bg-dark text-white pt-5 pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4 p-4'>
            <Image src={logo1}  width={100} alt='logo'/>
            <p className='text-secondary'>
              Pensando na importância de encorajar as pessoas a adquirirem atitudes sustentáveis, criamos uma plataforma social gamificada onde os usuários podem se engajar em causas sociais e ambientais, em prol do desenvolvimento sustentável.
            </p>
          </div>

          <div className='col-12 col-md-4 p-4'>
            <h3>Sobre</h3>
            <a className='link-success' href='/privacy'>Politica e privacidade</a>
            <br />
            <a className='link-success' href='/terms'>Termos e condições</a>
          </div>

          <div className='col-12 col-md-4 p-4'>
            <h3>Entre em contato</h3>
            <span className='text-secondary'>schneider.on.contact@gmail.com</span>
          </div>
        </div>

        <hr />

        <div className='row'>
          <div className='col-12 col-md-8 d-flex justify-content-start align-items-center'>
            <p className='text-secondary'>Todos os direitos reservados a Schneider Eletric &copy; 2023.</p>
          </div>

          <div className='col-12 col-md-4 d-flex justify-content-end align-items-center'>
            <Image src={logo2} height={60} alt='logo'/>
          </div>
        </div>
      </div>
    </footer>
  )
}
