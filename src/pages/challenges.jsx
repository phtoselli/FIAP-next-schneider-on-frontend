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

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Energia Limpa</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Economize energia, complete missões e desbloqueie conquistas enquanto aprende a usar energia limpa.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Reciclagem Master</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Colete, recicle e ganhe pontos à medida que aprimora suas habilidades de reciclagem em níveis desafiadores.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Fazenda Verde</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Gerencie sua própria fazenda sustentável virtual, cultivando alimentos orgânicos e evitando o desperdício.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Herói da Fauna</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Salve espécies em risco, restaurando habitats e combatendo a perda de biodiversidade.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Corrida Ecológica</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Escolha meios de transporte sustentáveis e compita contra outros jogadores para reduzir as emissões.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Design Eco-Inovador</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Desenvolva produtos e projetos sustentáveis, equilibrando inovação e impacto ambiental.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Missão Ética</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Enfrente dilemas éticos e faça escolhas que impactam o meio ambiente nesta missão desafiadora.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Educação Verde</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Explore cenários educativos e inspire outros a se tornarem defensores da sustentabilidade.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Política Sustentável</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Participe de simulações políticas, influencie regulamentações e promova práticas sustentáveis.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Economia Eco</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Gerencie uma economia virtual, tomando decisões para equilibrar crescimento econômico e conservação ambiental.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Sustentabilidade Empresarial</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Administre uma empresa virtual e adote estratégias sustentáveis para reduzir sua pegada ambiental.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-4">
            <div className="card p-4">
              <h4 className="card-title">Mundo Climático</h4>
              <p className="text-secondary card-text" style={{ minWidth: '150px'}}>Combata as mudanças climáticas, tomando decisões cruciais para reduzir emissões e salvar o planeta.</p>
              <a href="" className="btn btn-success">Iniciar desafio</a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
