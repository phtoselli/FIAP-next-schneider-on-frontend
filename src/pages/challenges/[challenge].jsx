import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import json from '@/database/challenges.json';

import Error from '@/components/Error';
import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

export default function Challenges() {
  const router = useRouter();

  const [url, setUrl] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setData(json);
  });

  useEffect(() => {
    setUrl(router.query.challenge);
  }, [router.query.challenge]);

  function challengeGenerate(param){
    if (!data[param] || !data) {
      return (
        <Error error={404} />
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
                    <p className='text-secondary'><span>{content.emphasis}</span> {content.paragraph}</p>
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
          <a href="/challenges">
            <i className='btn btn-outline-success rounded-circle bi bi-chevron-left fs-4 fw-bold'></i>
          </a>
        </div>
        <hr className='mt-3 mb-3' style={{ opacity: '0%' }} />
      </div>

      { url ? challengeGenerate(url) : 'Carregando página...'}

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />
      <Footer />
    </main>
  )
}
