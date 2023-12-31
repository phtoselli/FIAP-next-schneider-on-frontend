import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import json from '@/database/events.json';

import Error from '@/components/Error';
import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';
import Loading from '@/components/Loading';

export default function Events() {
  const router = useRouter();

  const [url, setUrl] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if(!json){
      setData(null);
    }

    setData(json);
  });

  useEffect(() => {
    setUrl(router.query.event);
  }, [router.query.event]);

  function challengeGenerate(param){
    if (!data[param] || !data) {
      return (
        <Error error={404} message={'Essa página não existe.'} />
      )
    }

    return (
      <div className='container'>
        <article className='container'>
          <h2>{data[param].title}</h2>
          <h6 className='text-secondary'>{data[param].subtitle}</h6>

          <hr className='mt-4 mb-4' style={{ opacity: '0%' }}/>

          <div className='row'>
            {
              data[param].content.map((content, key) => {
                return (
                  <div className='container mt-2 mb-2' key={key}>
                    <p className='text-secondary'><span className='fw-semibold'>{content.emphasis}</span> {content.paragraph}</p>
                  </div>
                )
              })
            }
          </div>

        </article>
      </div>
    )
  };

  return (
    <main>
      <Header />

      <div className='container'>
        <div className='container'>
          <a href="/home">
            <i className='btn btn-outline-success rounded-circle bi bi-chevron-left fs-4 fw-bold'></i>
          </a>
        </div>
        <hr className='mt-3 mb-3' style={{ opacity: '0%' }} />
      </div>

      { url ? challengeGenerate(url) : <Loading />}

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />
      <Footer />
    </main>
  )
}
