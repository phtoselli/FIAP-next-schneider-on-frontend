import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect, useState } from 'react';

import Error from '@/components/Error';
import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

import json from '@/database/learnArray.json';


export default function Learn() {

  const [data, setData] = useState();

  useEffect(() => {
    if(!json){
      setData(null);
    }

    setData(json);
  });

  function cardsGenerate(param) {
    if (!data) {
      return (
        <Error error={'Ops!'} message={'Nenhuma matéria foi encontrada.'} />
      )
    }

    return param.map((obj, key) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 p-4" key={key}>
          <div className="card p-4" >
            <h4 className="card-title">{obj.title}</h4>
            <p className="text-secondary" style={{ minWidth: '150px' }}>
              {obj.description}
            </p>
            <a className='btn btn-success' href={`/learn/${obj.id}`}>Acessar</a>
          </div>
        </div>
      )
    });
  }

  function messageGenerate() {
    return (
      <div>
        <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />
        <div className='container'>
          <div className='container d-flex flex-column align-items-center justify-items-center'>
            <p className='text-secondary text-center' style={{ maxWidth: '400px' }}>Mais conteúdo <span className='fw-bold'>em breve</span>!</p>
          </div>
        </div>
        <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />
      </div>
    )
  }

  return (
    <main>
      <Header />

      <section className='container'>

        <div className="row">

        { data ? cardsGenerate(data) : <Error error={'Ops!'} message={'Nenhuma matéria foi encontrada.'} />}

        </div>

        { data ? messageGenerate(data) : '' }

      </section>

      <Footer />
    </main>
  )
}
