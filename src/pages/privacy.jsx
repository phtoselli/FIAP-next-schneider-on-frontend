import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

export default function Privacy() {

  return (
    <main>
      <Header />

      <section className='container'>
        <div className='container'>
          <h1>
            Política de Privacidade
          </h1>

          <hr className='mt-4 mb-4' style={{ opacity: '0%' }} />

          <h3 className='fs-4'>
            1. Coleta de Informações
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Coletamos informações pessoais, como nome, endereço de e-mail e dados de perfil, apenas quando fornecidos voluntariamente por você durante o uso do aplicativo.
          </p>

          <h3 className='fs-4'>
            2. Uso de Informações
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            As informações coletadas são usadas para personalizar sua experiência no aplicativo, fornecer suporte ao cliente e enviar atualizações relevantes.
          </p>

          <h3 className='fs-4'>
            3. Compartilhamento de Informações
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para fornecer serviços específicos, como processamento de pagamentos.
          </p>

          <h3 className='fs-4'>
            4. Segurança
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Empregamos medidas de segurança para proteger suas informações pessoais. No entanto, não podemos garantir a segurança completa dos dados transmitidos pela Internet.
          </p>

          <h3 className='fs-4'>
            5. Cookies e Rastreamento
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            O aplicativo pode usar cookies para melhorar a funcionalidade. Você pode optar por recusar cookies em seu navegador.
          </p>

          <h3 className='fs-4'>
            6. Alterações na Política de Privacidade
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Reservamo-nos o direito de atualizar nossa Política de Privacidade. Notificaremos os usuários de quaisquer alterações significativas.
          </p>

          <h3 className='fs-4'>
            7. Contato
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Se tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco através das informações de contato fornecidas no aplicativo.
          </p>
        </div>

        <div className="container">
          <hr className='mt-4 mb-4' style={{ opacity: '10%' }} />
          <span className='text-secondary'>Confira nossos <a className='link-success' href="/terms">Termos e condições</a></span>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <Footer />
    </main>
  )
}
