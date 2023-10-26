import '../app/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Image from 'next/image';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';

export default function HeaderApp() {
  const [modal, setModal] = useState('');
  const [width, setWidth] = useState();

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);


  function showModal() {
    const modalHtml = (
      <div className='bg-white' style={{ position: 'absolute', right: 0, top: 0, zIndex: 1, boxShadow: '-1px -1px 30px #0f0f0f', height: '100vh', width: '70vw' }}>
        <div className='row'>
          <div className='col-11 text-end'>
            <hr className='mt-3 mb-3' style={{ opacity: '1%'}}/>
            <button onClick={() => setModal('')} style={{ background: 'none', border: 'none' }}>
              <i className='bi bi-x text-black fs-1'></i>
            </button>
          </div>

          <hr className='mt-4 mb-4' style={{ opacity: '1%'}}/>

          <div className='text-center text-uppercase fs-3'>
            <nav className='nav flex-column gap-3'>
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
    );

    setModal(modalHtml);
  }

  function desktop() {
    return (
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
        <hr className='mt-4 mb-4' style={{ opacity: '1%'}}/>
      </div>
    )
  }

  function hamburguer() {
    return (
      <div className='container'>

        <div className='col-12 d-flex align-items-center justify-content-center mt-3'>
          <a href="/">
            <Image src={logo} width={40} alt='logo'/>
          </a>
        </div>

        <div className='col-12 text-end'>
          <button onClick={() => showModal()} style={{ background: 'none', border: 'none' }}>
            <i className='bi bi-list text-black fs-1'></i>
          </button>
        </div>

        { modal }
      </div>
    )
  }

  return (
    <header className='container-fluid mb-5 bg-white'>
      { width > 768 ? desktop() : hamburguer() }
    </header>
  )
}
