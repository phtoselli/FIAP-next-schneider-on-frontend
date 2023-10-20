import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';

export default function Terms() {

  return (
    <main>
      <Header />

      <section className='container'>
        <div className='container'>
          <h1>
            Termos e Condições
          </h1>

          <hr className='mt-4 mb-4' style={{ opacity: '0%' }} />

          <h3 className='fs-4'>
            1. Aceitação dos Termos e Condições
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Ao utilizar este aplicativo, você concorda em cumprir e estar sujeito a estes Termos e Condições. Se não concordar com qualquer parte destes termos, não poderá usar o aplicativo.
          </p>

          <h3 className='fs-4'>
            2. Uso do Aplicativo
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Você concorda em usar o aplicativo apenas para fins legais e de acordo com todas as leis aplicáveis. Não deve violar os direitos de terceiros ou interferir no funcionamento do aplicativo.
          </p>

          <h3 className='fs-4'>
            3. Alterações nos Termos
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. É sua responsabilidade verificar periodicamente as alterações. O uso contínuo do aplicativo após alterações constitui aceitação dos novos termos.
          </p>

          <h3 className='fs-4'>
            4. Limitação de Responsabilidade
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            O aplicativo é fornecido "como está". Não garantimos a precisão, confiabilidade ou disponibilidade do aplicativo. Não nos responsabilizamos por quaisquer danos decorrentes do uso ou da incapacidade de usar o aplicativo.
          </p>

          <h3 className='fs-4'>
            5. Encerramento de Conta
          </h3>
          <p className='text-secondary' style={{ maxWidth: '800px'}}>
            Reservamo-nos o direito de encerrar ou suspender sua conta a nosso critério, sem aviso prévio, se violar estes Termos e Condições.
          </p>
        </div>

        <div className="container">
          <hr className='mt-4 mb-4' style={{ opacity: '10%' }} />
          <span className='text-secondary'>Confira nossas <a className='link-success' href="/privacy">Políticas de privacidade</a></span>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <Footer />
    </main>
  )
}
