import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Image from 'next/image';
import schneider from '@/images/schneider.png';

export default function App() {
  return (
    <main>
      <Header />

      <section id='hero' className='pt-5 pb-5 container-fluid' style={{ backgroundImage: `url('/hero.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='container'>

          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>.</p>
            </div>

            <div className='col-12 col-md-6'>
              <div className='d-flex justify-content-between flex-column' style={{ maxWidth: '400px' }}>
                <h1 className='text-white' style={{ textShadow: '1px 1px 8px black' }}>Colaborador Schneider, seja bem-vindo ao ON!</h1>
                <p className='text-white' style={{ opacity: '70%' }}>Faça seu cadastro e junte-se à uma rede de pessoas unidas no propósitos de fazer das suas ações, um passo para o desenvolvimento sustentável.</p>
                <Image src={schneider} width={200}/>
                <a className='btn btn-success' href="/">Entre agora</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>

      <section id='pitch' className='container-fluid'>
        <div className='container'>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>

      <section id='about' className='container-fluid'>
        <div className='container'>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>

      <section id='painel' className='container-fluid'>
        <div className='container'>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>

      <Footer />
    </main>
  )
}
