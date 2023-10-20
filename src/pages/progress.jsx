import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';
import { useState } from 'react';

export default function Progress() {

  const [modal, setModal] = useState('');

  const modalInfos = [
    {
      title: 'Desafio da Alimentação Sustentável!',
      value: 'Vamos abraçar um desafio que beneficia nosso planeta e nossa saúde? 🌍 Opte por uma dieta mais sustentável, reduzindo o consumo de carne e produtos de origem animal, e abrace uma alimentação baseada em vegetais! 🥦🥕 Escolha alimentos locais e sazonais, reduzindo a pegada de carbono associada ao transporte de alimentos. Cada escolha que fazemos importa! 🍅🌽Mostre seu compromisso com um estilo de vida mais verde! 💚 Tire uma foto com uma deliciosa refeição sustentável e compartilhe no Ôn com a hashtag #AlimentaçãoSustentável. Incentive amigos e seguidores a experimentar novos sabores e a adotar práticas alimentares que cuidam do meio ambiente. Juntos, podemos fazer a diferença! 🌿😃'
    },
    {
      title: 'Desafio da Economia de Energia em Casa!',
      value: '💡Vamos embarcar em um desafio para reduzir nosso consumo de energia e fazer a diferença? 💚 Faça pequenas mudanças no seu dia a dia para economizar energia em casa!Apague as luzes em ambientes vazios, desconecte aparelhos eletrônicos que não estão em uso, utilize lâmpadas de baixo consumo e aproveite ao máximo a luz natural. Cada gesto conta! 🌞🔌Mostre o seu comprometimento com um futuro mais eficiente! 💪 Tire uma foto praticando uma dessas ações e compartilhe nas redes sociais com a hashtag #DesafioEconomiaEnergia.Incentive amigos e familiares a seguir o exemplo e a adotar hábitos mais sustentáveis em relação à energia. Juntos, podemos fazer um impacto positivo! 💡😃Aceite o desafio e marque três pessoas para participarem também. Vamos criar uma onda de consciência energética e preservar nosso planeta. Você topa? 💚💡 #DesafioEconomiaEnergia #Sustentabilidade #MenosEnergiaMaisFuturo'
    },
    {
      title: 'Desafio do Plantio de Árvores!',
      value: '🌳Vamos aceitar um desafio que contribui para um mundo mais verde? 🌍 Plante uma árvore e faça parte dessa transformação positiva! Escolha um local adequado, obtenha uma muda de árvore nativa ou adequada ao seu clima e solo, e plante-a com carinho. Cada árvore plantada é um presente para o futuro! 🌱🌳 Mostre seu comprometimento com a natureza! 💚 Tire uma foto plantando sua árvore e compartilhe no Ôn com a hashtag #DesafioPlantioÁrvores.'
    },
    {
      title: 'Desafio da Reciclagem Inteligente!',
      value: '♻️Vamos encarar um desafio que ajuda a preservar nosso planeta? 🌍 Recicle de forma consciente e inspire outros a fazerem o mesmo!Aqui está o desafio: escolha um dia para revisar sua casa e identificar itens recicláveis que poderiam ter sido descartados erroneamente. Separe esses materiais e coloque-os na coleta seletiva. Garanta que cada objeto esteja no lugar certo para reciclagem! ♻️🗑️. Mostre seu comprometimento com a causa! 💚 Tire uma foto com sua pilha de materiais recicláveis e compartilhe nas rede social Ôn com a hashtag #DesafioReciclagemInteligente.'
    },
    {
      title: 'Desafio da Economia de Água com o App Ôn!',
      value: '💧Vamos encarar um desafio que faz a diferença na preservação dos recursos hídricos? 🌊 Use o aplicativo Ôn para se comprometer a economizar água e inspire outros a adotarem práticas mais conscientes!Aqui está o desafio: defina metas diárias para reduzir o consumo de água em sua casa. Feche a torneira enquanto escova os dentes, tome banhos mais curtos, conserte vazamentos e aproveite a água de forma mais eficiente. Cada gota poupada conta! 💡💧Mostre seu comprometimento com um uso responsável da água! 💚 Tire uma captura de tela do seu progresso no aplicativo Ôn e compartilhe nas redes sociais com a hashtag #DesafioEconomiaÁgua.'
    },
  ];

  function showModal(event) {
    const modalTitle = modalInfos[Number(event.target.id)].title;
    const modalContent = modalInfos[Number(event.target.id)].value;

    const modalHtml = (
      <div className='container-fluid' style={{ position: 'fixed', zIndex: 1, top: '0', left: '0', right: '0', height: '100%', width: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)'  }}>
        <div className='container p-5 rounded-2' style={{ position: 'relative', backgroundColor: '#fefefe', margin: 'auto', width: '100%', marginTop: '50px' }}>
          <h4>{modalTitle}</h4>
          <p className='text-secondary'>{modalContent}</p>
          <button className='btn btn-success me-3' onClick={() => setModal('')}>Iniciar desafio</button>
          <button className='btn btn-outline-success' onClick={() => setModal('')}>Fechar</button>
        </div>
      </div>
    );

    setModal(modalHtml);
  }

  return (
    <main>
      <Header />

      { modal ? modal : '' }

      <section className='container'>
        <div className="container">
          <h2>Trilha de missões</h2>
        </div>

        <div className="container p-3 pb-5 rounded-2" style={{ backgroundColor: '#f0f0f0' }}>
          <p className='text-secondary fs-5'>Desafios do nível 1</p>

          <div className='container d-flex align-items-center justify-content-between' style={{ maxWidth: '800px'}}>
            <div className=''>
              <div className="btn btn-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-egg-fried fs-4' id='0' onClick={(e) => showModal(e)}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-brightness-high fs-4' id='1' onClick={(e) => showModal(e)}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-tree fs-4' id='2' onClick={(e) => showModal(e)}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-recycle fs-4' id='3' onClick={(e) => showModal(e)}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-droplet fs-4' id='4' onClick={(e) => showModal(e)}></i>
              </div>
            </div>

          </div>
        </div>

        <hr className='mt-2 mb-2' style={{ opacity: '0%' }} />

        <div className="container p-3 pb-5 rounded-2" style={{ backgroundColor: '#f0f0f0' }}>
          <p className='text-secondary fs-5'>Desafios do nível 2</p>

          <div className='container d-flex align-items-center justify-content-between' style={{ maxWidth: '800px'}}>
            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>


          </div>
        </div>

        <hr className='mt-2 mb-2' style={{ opacity: '0%' }} />

        <div className="container p-3 pb-5 rounded-2" style={{ backgroundColor: '#f0f0f0' }}>
          <p className='text-secondary fs-5'>Desafios do nível 3</p>

          <div className='container d-flex align-items-center justify-content-between' style={{ maxWidth: '800px'}}>
            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>

            <div className=''>
              <div className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <i className='bi bi-lock-fill fs-4' onClick={() => alert('Desafio bloqueado: Você precisa concluir todos os desafios anteriores.')}></i>
              </div>
            </div>


          </div>
        </div>

      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <Footer />
    </main>
  )
}
