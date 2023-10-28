import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Image from 'next/image';
import img from '@/images/pub.jpg';
import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

import { useEffect, useState } from 'react';

export default function Home() {

  const [feed, setFeed] = useState([]);
  const [pubsArray, setPubsArray] = useState([]);
  const [user, setUser] = useState('@example_user');

  function addPub () {
    const content = document.querySelector('#pubText').value

    if(!content){
      document.querySelector('#warning').textContent = "Por favor, não se esqueça de digitar sua mensagem antes de compartilhar. Queremos ouvir suas ideias e histórias inspiradoras sobre sustentabilidade.🍃😊"
      return;
    }

    document.querySelector('#warning').textContent = ''

    const fake = {
      user,
      content
    }

    const pubs = [...feed, fake];
    setFeed(pubs);
    document.querySelector('#pubText').value = '';
  }

  const emptyFeed = (
    <div className='container text-center'>
      <hr className='mt-5 mb-5 container' style={{ opacity: '0%'}}/>

      <p className='text-secondary'>Ops! Parece que não existe nenhuma publicação.</p>
      <a className='link link-success' href="#pub">iniciar uma nova publicação</a>
    </div>
  );

  const pubsCount = (
    <div className='container'>
      <p className='text-secondary' style={{ fontSize: '0.8rem'}}>Total de publicações: {pubsArray.length}</p>
    </div>
  )

  useEffect(() => {
    const feedArray = feed.map((item, key) => {
      return <div className="container rounded-2 p-4 mt-4 mb-4" style={{ backgroundColor: '#fafafa'}} key={key}>
        <h6>{item.user}</h6>
        <hr className='mt-3 mb-3 container' style={{ opacity: '0%'}}/>
        <p className='container bg-white rounded-2 text-secondary pt-2 pb-2'>{item.content}</p>
      </div>
    });

    setPubsArray(feedArray);
  }, [feed]);

  return (
    <main>
      <Header />

      <section id='events' className='container-fluid'>
        <div className='container'>
          <h2>Eventos</h2>

          <div className='row'>
            <div className="col-12 col-md-4 p-2">
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title">Conferência da sustentabiliade</h5>
                  <p className="card-text">Explore soluções e práticas sustentáveis com especialistas rumo a um Futuro Sustentável. Junte-se a nós.</p>
                  <a href="/events/conferencia-sustentavel" className="btn btn-success">Participe</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 p-2">
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title">Feirinha da sustentabilidade</h5>
                  <p className="card-text">Descubra produtos ecológicos, oficinas práticas e alimentos orgânicos na nossa eco-feira dedicada à sustentabilidade.</p>
                  <a href="/events/feirinha-da-sustentabilidade" className="btn btn-success">Participe</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 p-2">
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title">Corrida pela Sustentabilidade</h5>
                  <p className="card-text">Participe da corrida ecológica para promover aptidão sustentável e apoiar projetos ambientais. Junte-se a nós!</p>
                  <a href="/events/corrida-pela-sustentabilidade" className="btn btn-success">Participe</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className='mt-5 mb-5 container' style={{ opacity: '5%'}}/>

      <section id='pub' className='container-fluid'>

        <div className='container'>
        <h2>Publicações</h2>

          <div>
            <div className='p-2 text-secondary'>
              <label htmlFor="pubText" className="form-label">Nova publicação</label>
              <textarea className="form-control" id="pubText" rows="3"></textarea>
              <span className='text-success' style={{ fontSize: '0.7rem' }} id='warning'></span>
            </div>
            <div className='p-2'>
              <button className="btn btn-success mb-3" onClick={() => addPub()}>Publicar</button>
            </div>
          </div>

        </div>
      </section>

      <hr className='mt-5 mb-5 container' style={{ opacity: '5%'}}/>

      <section id='feed' className='container-fluid' style={{ minHeight: '10vh' }}>
          <div className='container'>

            <div className="container rounded-2 p-4 mt-4 mb-4" style={{ backgroundColor: '#fafafa'}}>
              <div className="card p-4" style={{ border: 'none'}}>
                <h6>@administrador</h6>
                <hr className='mt-3 mb-3 container' style={{ opacity: '0%'}}/>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div style={{ width: '100%', height: '100%'}}>
                      <Image src={img}  style={{ maxWidth: '100%', height: 'auto' , objectFit: 'cover', backgroundSize: 'cover', borderRadius: '16px 0px' }} />
                    </div>
                  </div>

                  <div className='col-lg-8'>
                    <div className='card-body'>
                      <p className='card-text bg-white rounded-2 text-secondary pt-2 pb-2'>
                        Queremos ouvir suas ideias brilhantes sobre sustentabilidade! Compartilhe suas dicas, histórias e iniciativas e inspire seus colegas a adotarem práticas mais ecológicas. Juntos, podemos fazer a diferença e criar um ambiente de trabalho mais sustentável. Suas palavras podem ser a mudança que precisamos. 💡🌱 <br />
                        <span className='fw-bold'>#SustentabilidadeEmAção</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          { feed.length < 1 ? emptyFeed : pubsArray }
          { feed.length < 1 ? '' : pubsCount }
        </div>
      </section>

      <hr className='mt-5 mb-5 container' style={{ opacity: '0%'}}/>

      <Footer />
    </main>
  )
}
