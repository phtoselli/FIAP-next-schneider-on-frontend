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
                <Image src={schneider} width={200} alt='shcneider logo'/>
                <a className='btn btn-success' href="/home">Entre agora</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%'}}/>

      <section id='about' className='container-fluid'>
        <div className='container'>
          <div className='row'>

            <div className='col-12 d-flex align-items-center flex-column'>
              <h2 className='text-center'>Saiba mais sobre o projeto</h2>
              <hr className='mt-3 mb-3' style={{ opacity: '1%' }}/>
              <p className='text-center text-secondary' style={{ maxWidth: '800px' }}>
                Com o intuito de incentivar atitudes sustentáveis, foi criada a plataforma social gamificada chamada "On".
                Nessa plataforma, os usuários podem se envolver em causas sociais e ambientais em prol do desenvolvimento sustentável. Isso proporciona uma maneira envolvente e motivadora de adotar comportamentos mais responsáveis em relação ao consumo e ao meio ambiente. A plataforma foi desenvolvida para atender à comunidade de colaboradores da Schneider Eletric, com o objetivo de levar o comprometimento com a sustentabilidade para o dia a dia de cada um dos colaboradores.
              </p>
            </div>

            <hr className='mt-3 mb-3' style={{ opacity: '1%' }}/>

            <div className='col-12 d-flex align-items-center flex-column'>
              <iframe
                className='rounded-4'
                width={500}
                height={350}
                src="https://www.youtube.com/embed/xTo2gSe3VRU?si=8ZP5uMkVuWg70Ysy"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>

          </div>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%'}}/>

      <section id='mission' className='container-fluid'>
        <div className='container'>

          <div>
            <h2 className='text-center'>Nossa missão</h2>
            <hr className='mt-2 mb-2' style={{ opacity: '1%'}}/>
            <p>
              A On contrapõe a influência negativa das mídias, que incentiva ao consumismo, por conectar as pessoas e levá-las a um caminho de consumo consciente e responsabilidade socioambiental. Além disso, gera valor para a empresa, reforçando a sustentabilidade como base do seu modelo de negócios.
            </p>
          </div>

          <hr className='mt-3 mb-3' style={{ opacity: '1%'}}/>

          <div className='row'>
            <div className="col-12 col-lg-3 card p-4">
              <i className='text-secondary bi bi-tree container-fluid mb-2 fs-2'></i>
              <h3 className='card-title'>Plante uma árvore</h3>
              <p className='card-text text-secondary'>Projetos voltados ao remanejamento da flora.</p>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-lg-3 card p-4">
              <i className='text-secondary bi bi-book container-fluid mb-2 fs-2'></i>
              <h3 className='card-title'>Leve educação para todos</h3>
              <p className='card-text text-secondary'>Ajude institutos e fundações.</p>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-lg-3 card p-4">
              <i className='text-secondary bi bi-balloon-heart container-fluid mb-2 fs-2'></i>
              <h3 className='card-title'>Ajude uma família</h3>
              <p className='card-text text-secondary'>Participe de projetos de doação de alimentos.</p>
            </div>
          </div>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%'}}/>

      <section id='how' className='container-fluid'>
        <div className='container'>

          <div>
            <h2 className='text-center'>Como funciona</h2>
            <hr className='mt-2 mb-2' style={{ opacity: '1%'}}/>
          </div>

          <hr className='mt-4 mb-4 container' style={{ opacity: '15%'}}/>

          <div className='row'>
            <div className='col-12 card p-4 mb-2 container'>
              <div className='d-flex'>
                <div className='me-4 d-flex align-items-center justify-content-center' style={{ width: "100px"}}>
                  <i className='text-secondary bi bi-1-circle fs-1'></i>
                </div>

                <div>
                  <h3>Crie sua conta</h3>
                  <p className='text-secondary'>
                    Faça seu cadastro seguindo o passo a passo da plataforma. É rápido e fácil.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-12 card p-4 mb-2 container'>
              <div className='d-flex'>
                <div className='me-4 d-flex align-items-center justify-content-center' style={{ width: "100px"}}>
                  <i className='text-secondary bi bi-2-circle fs-1'></i>
                </div>

                <div>
                  <h3>Participe de desafios</h3>
                  <p className='text-secondary'>
                    Todos os dias, semanas e meses, novos desafios estarão disponíveis para ganhar pontos.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-12 card p-4 mb-2 container'>
              <div className='d-flex'>
                <div className='me-4 d-flex align-items-center justify-content-center' style={{ width: "100px"}}>
                  <i className='text-secondary bi bi-3-circle fs-1'></i>
                </div>

                <div>
                  <h3>Suba de nível</h3>
                  <p className='text-secondary'>
                    Níveis maiores te colocam no topo do ranking. Quanto mais desafios você cumprir, mais reconhecimento terá.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%'}}/>

      <section id='progress' className='container-fluid bg-success'>
        <div className='container'>

          <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h2 className='text-center text-white'>Aumente seu progresso</h2>
            <hr className='mt-4 mb-4 container text-white' style={{ opacity: '15%', border: '2px solid white', maxWidth: '800px'}}/>
            <p className='text-center text-white' style={{ opacity: '75%', maxWidth: '800px'}}>
              Você também tem uma visão do progresso da sua própria jornada sustentável, onde você tem acesso a todas às suas atividades e desafios individuais. Podendo criar um histórico de gastos como água e energia, além de anexar suas contas. Na sua jornada sustentável você pode realizar atividades interativas e lições que lhe façam exercitar o pensamento sustentável.
            </p>
          </div>
          <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%'}}/>

      <section id='learn' className='container-fluid'>
        <div className='container'>

          <div>
            <h2>Aprenda</h2>
            <hr className='mt-3 mb-3' style={{ opacity: '1%'}}/>
            <p className='text-secondary' style={{ maxWidth: '800px'}}>
              Além de participar ativamente dos desafios e missões, você terá uma área reservada para aprender novas habilidades e ficar por dentro das inovações e notícias relacionadas ao desenvolvimento sustentável.
            </p>
          </div>

        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '1%'}}/>

      <section id='painel' className='container-fluid  d-flex align-items-center justify-content-center' style={{ height: '40vh', backgroundImage: `url('/banner.png')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className='container'>

          <div className='row'>
            <div className="col-12 col-md-6"></div>

            <div className="col-12 col-md-6">
              <h1 className='text-white' style={{ textShadow: '1px 1px 8px black' }}>Crie sua conta e comece a construir um mundo melhor agora.</h1>
              <hr className='mt-3 mb-3' style={{ opacity: '0%'}}/>
              <a className='btn btn-success' href="/home">Crie sua conta</a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
