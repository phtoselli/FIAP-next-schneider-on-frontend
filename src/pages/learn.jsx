import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

export default function Home() {

  return (
    <main>
      <Header />

      <section className='container'>

        <div className="row">
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Energias Renováveis</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Aprenda sobre fontes de energia limpa como solar, eólica e hidrelétrica para um futuro mais verde.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Reciclagem e Gerenciamento de Resíduos</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Descubra práticas de reciclagem eficazes e como gerenciar resíduos de forma sustentável.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Agricultura Sustentável</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Explore técnicas agrícolas que preservam o solo, economizam água e promovem a segurança alimentar.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Conservação da Biodiversidade</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Saiba como proteger a fauna e a flora, preservando ecossistemas preciosos em todo o mundo.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Mobilidade Sustentável</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Estude alternativas de transporte ecoamigáveis, como veículos elétricos e transporte público eficiente.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Design Ecológico</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Explore princípios de design que minimizam o impacto ambiental na arquitetura e produtos.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Ética Ambiental</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Aprofunde-se nos dilemas éticos relacionados à sustentabilidade e tome decisões informadas.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Educação Ambiental</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Descubra como educar e inspirar outros a se tornarem defensores do meio ambiente.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Políticas de Sustentabilidade</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Analise políticas governamentais e internacionais que moldam práticas sustentáveis e regulamentações.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Economia Verde</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Explore modelos econômicos que equilibram crescimento e preservação do meio ambiente.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Sustentabilidade na Indústria</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Saiba como empresas podem adotar práticas sustentáveis para reduzir o impacto ambiental.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
          <div className="col p-4">
            <div className="card p-4">
              <h4 className="card-title">Mudanças Climáticas</h4>
              <p className="text-secondary" style={{ minWidth: '150px' }}>
                Compreenda as causas e consequências das mudanças climáticas, bem como estratégias de mitigação.
              </p>
              <a className='btn btn-success' href="/learn">Acessar</a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  )
}
