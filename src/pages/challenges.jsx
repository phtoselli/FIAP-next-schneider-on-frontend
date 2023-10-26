import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect, useState } from 'react';

import Error from '@/components/Error';
import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';
import json from '@/database/challengesArray.json';

export default function Challenges() {
  const [data, setData] = useState();

  useEffect(() => {
    if(!json){
      setData(null);
    }

    setData(json);
  });

  function challengesGenerate(param) {
    if (!data) {
      return (
        <Error error={'Ops!'} message={'Nenhum desafio foi encontrado.'} />
      )
    }

    return param.map((obj, key) => {
      return (
        <div className="col-12 col-lg-4 p-4" key={key}>
          <div className="card p-4">
            <h4 className="card-title">{obj.title}</h4>
            <p className="text-secondary card-text" style={{ minWidth: '150px'}}>{obj.description}</p>
            <a href={`/challenges/${obj.id}`} className="btn btn-success">Iniciar desafio</a>
          </div>
        </div>
      )
    });
  }

  return (
    <main>
      <Header />

      <section className='container'>
        <div className="row">

          { data ? challengesGenerate(data) : <Error error={'Ops!'} message={'Nenhum desafio foi encontrado'} />}

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <div className='container'>
        <div className='container d-flex flex-column align-items-center justify-items-center'>
          <p className='text-secondary text-center' style={{ maxWidth: '400px' }}>Complete os desafios anteriores para desbloquear <span className='fw-bold'>novos desafios</span>.</p>
        </div>
      </div>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />
      <Footer />
    </main>
  )
}
