import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';
import { useEffect, useState } from 'react';

export default function Settings() {

  const [cep, setCep] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [lastName, setLastName] = useState('');

  async function searchState() {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome', {
        method: 'GET'
      });

      const data = await response.json();
      const states = data.map((st) => st.nome);

      setState(states);
      return state;
    } catch (error) {
      console.error(error);
    }
  }

  function createStatesOption(data) {
    const result = data.map((curr, key) => <option key={key} value={curr}>{curr}</option>)

    return result;
  }

  useEffect(() => {
    searchState();
  }, []);

  return (
    <main>
      <Header />

      <section className='container'>
        <div className='container'>
          <h2>Configurações pessoais</h2>
          <hr className='mt-3 mb-3' style={{ opacity: '0%' }} />

          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Primeiro nome</label>
              <input type="text" className="form-control" id="validationCustom01" value={name} onChange={(e) => setName(e.target.value)} required autoComplete='off' />
              <div className="valid-feedback">
                Legal!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Último nome</label>
              <input type="text" className="form-control" id="validationCustom02" value={lastName} onChange={(e) => setLastName(e.target.value)} required autoComplete='off'/>
              <div className="valid-feedback">
                Legal!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">Usuário</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={user} onChange={(e) => setUser(e.target.value)} autoComplete='off'/>
                <div className="invalid-feedback">
                  Por favor escolha um nome de usuário.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="validationCustomEmail" className="form-label">E-mail</label>
              <input type="text" className="form-control" id="validationCustomEmail" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off'/>
              <div className="valid-feedback">
                Legal!
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">CEP</label>
              <input type="text" className="form-control" id="validationCustom05" value={cep} onChange={(e) => setCep(e.target.value)} required autoComplete='off'/>
              <div className="invalid-feedback">
                Preencha seu CEP.
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">Cidade</label>
              <input type="text" className="form-control" id="validationCustom03" value={city} onChange={(e) => setCity(e.target.value)} required autoComplete='off'/>
              <div className="invalid-feedback">
                Preencha o campo com o nome da cidade.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">Estado</label>
              <select className="form-select" id="validationCustom04" required defaultValue={''}>
                <option disabled value="">Selecione o estado</option>
                { state.length > 1 ? createStatesOption(state) : '' }
              </select>
              <div className="invalid-feedback">
                Preencha um estado válido.
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label className="form-check-label" htmlFor="invalidCheck">
                  Aceitar os <a className='link-success' href='/terms'>Termos e condições</a>
                </label>
                <div className="invalid-feedback">
                  Você precisa aceitar os termos e condições para continuar.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-success">Salvar configurações</button>
            </div>
          </form>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <section className='container'>
        <div className='container'>
          <h2>Configurações do aplicativo</h2>
          <hr className='mt-3 mb-3' style={{ opacity: '0%' }} />


          <form>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Exibir e-mail</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Sim
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Não
                  </label>
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                  <label className="form-check-label" htmlFor="gridRadios3">
                    Somente para meus contatos
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Notificações</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option1"/>
                  <label className="form-check-label" htmlFor="gridRadios4">
                    Ativadas
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios5" value="option2"/>
                  <label className="form-check-label" htmlFor="gridRadios5">
                    Desativadas
                  </label>
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios6" value="option3"/>
                  <label className="form-check-label" htmlFor="gridRadios6">
                    Somente notificações de segurança
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Compartilhar estatísticas
                  </label>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className="col-6">
                <select className="form-select form-select" aria-label="theme" id='theme' defaultValue={''}>
                  <option value=''>Selecione o tema do aplicativo</option>
                  <option value="1">Modo claro</option>
                  <option value="2">Modo escuro</option>
                </select>
              </div>
            </div>

            <div className="col-12 mt-4">
              <button className="btn btn-success">Salvar configurações</button>
            </div>

          </form>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <Footer />
    </main>
  )
}
