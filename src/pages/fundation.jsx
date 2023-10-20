import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

export default function Fundation() {

  return (
    <main>
      <Header />

      <section className='container-fluid'>
        <div className='container'>
          <h2>Programa de voluntários</h2>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Criado em 2012, nosso programa VolunteerIn inspira as pessoas a darem retorno às comunidades, por meio de orientação, treinamento e contribuição para iniciativas significativas dos parceiros locais. Ao apoiá-los, amplificamos o poder da cidadania responsável e do desenvolvimento sustentável.
          </p>
        </div>
      </section>

      <section className='container'>
        <div className="row">

          <div className="col-12 col-lg-6 p-4">
            <div className="card p-4">
              <div className='container rounded-2' style={{ backgroundImage: `url('/c1.png')`, height: '200px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
              <h5 className="card-title mt-3">Tomorrow Rising - Líbano</h5>
              <hr className='container mt-2 mb-3' style={{ opacity: '10%'}} />
              <p className="card-text text-secondary">A Fundação criou uma campanha de doações e ajudou as pessoas mais afetadas restaurando a energia nas casas.</p>
              <a href="https://volunteerin.se.com/#/" target='_blank' className="btn btn-success">Saiba mais</a>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-4">
            <div className="card p-4">
              <div className='container rounded-2' style={{ backgroundImage: `url('/c2.png')`, height: '200px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
              <h5 className="card-title mt-3">Tomorrow Rising - Índia</h5>
              <hr className='container mt-2 mb-3' style={{ opacity: '10%'}} />
              <p className="card-text text-secondary">A Schneider Electric Índia e Fundações estabeleceram uma campanha de arrecadação de fundos para apoiar as comunidades indianas afetadas.</p>
              <a href="https://volunteerin.se.com/#/" target='_blank' className="btn btn-success">Saiba mais</a>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-4">
            <div className="card p-4">
              <div className='container rounded-2' style={{ backgroundImage: `url('/c3.png')`, height: '200px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
              <h5 className="card-title mt-3">Tomorrow Rising - Africa</h5>
              <hr className='container mt-2 mb-3' style={{ opacity: '10%'}} />
              <p className="card-text text-secondary">Distribuição de alimentos a famílias e crianças pequenas no Quênia durante a pandemia, de modo a permitir o acesso a refeições nutritivas.</p>
              <a href="https://volunteerin.se.com/#/" target='_blank' className="btn btn-success">Saiba mais</a>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-4">
            <div className="card p-4">
              <div className='container rounded-2' style={{ backgroundImage: `url('/c4.png')`, height: '200px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
              <h5 className="card-title mt-3">Tomorrow Rising - Myanmar</h5>
              <hr className='container mt-2 mb-3' style={{ opacity: '10%'}} />
              <p className="card-text text-secondary">A Fundação criou uma campanha de doações e ajudou as pessoas mais afetadas restaurando a energia nas casas.</p>
              <a href="https://volunteerin.se.com/#/" target='_blank' className="btn btn-success">Saiba mais</a>
            </div>
          </div>

        </div>
      </section>

      <hr className='container mt-5 mb-5' style={{ opacity: '0%'}} />

      <Footer />
    </main>
  )
}
