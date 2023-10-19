import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Image from 'next/image';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header className='container-fluid mb-5 bg-white'>
      <div className='container'>
        <div className='row'>

          <div className='col-12 d-flex align-items-center justify-content-center mt-3'>
            <a href="/">
              <Image src={logo} width={40} alt='logo'/>
            </a>
          </div>

          <div className='col-12 d-flex align-items-center justify-content-center mt-2'>
            <nav className='nav justify-content-center'>
              <a className='nav-link link-success' href="/home">Início</a>
              <a className='nav-link link-success' href="/learn">Aprendizagem</a>
              <a className='nav-link link-success' href="/challenges">Desafios</a>
              <a className='nav-link link-success' href="/fundation">Fundação Schneider</a>
              <a className='nav-link link-success' href="/progress">Progresso</a>
              <a className='nav-link link-success' href="/settings">Configurações</a>
            </nav>
          </div>

        </div>
      </div>
      <hr className='mt-4 mb-4' style={{ opacity: '1%'}}/>
    </header>
  )
}