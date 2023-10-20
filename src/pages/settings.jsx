import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from '@/components/Footer';
import Header from '@/components/HeaderApp';
import { useState } from 'react';

export default function Settings() {

  const [name, setName] = useState('Nome');
  const [lastName, setLastName] = useState('Sobrenome');
  const [email, setEmail] = useState('email@email.com');

  return (
    <main>
      <Header />

      <section className='container'>
        <div className='container'>
          <h2>Configurações pessoais</h2>
          <hr className='mt-3 mb-3' style={{ opacity: '0%' }} />

          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">Primeiro nome</label>
              <input type="text" class="form-control" id="validationCustom01" value={name} onChange={(e) => setName(e.target.value)} required/>
              <div class="valid-feedback">
                Legal!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">Último nome</label>
              <input type="text" class="form-control" id="validationCustom02" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
              <div class="valid-feedback">
                Legal!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">Usuário</label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                <div class="invalid-feedback">
                  Por favor escolha um nome de usuário.
                </div>
              </div>
            </div>
            <div class="col-12">
              <label for="validationCustomEmail" class="form-label">E-mail</label>
              <input type="text" class="form-control" id="validationCustomEmail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <div class="valid-feedback">
                Legal!
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">Cidade</label>
              <input type="text" class="form-control" id="validationCustom03" required/>
              <div class="invalid-feedback">
                Preencha o campo com o nome da cidade.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">Estado</label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Preencha um estado válido.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom05" class="form-label">CEP</label>
              <input type="text" class="form-control" id="validationCustom05" required/>
              <div class="invalid-feedback">
                Preencha seu CEP.
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class="form-check-label" for="invalidCheck">
                  Aceitar os <a className='link-success' href='/terms'>Termos e condições</a>
                </label>
                <div class="invalid-feedback">
                  Você precisa aceitar os termos e condições para continuar.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-success">Salvar configurações</button>
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

            <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">Exibir e-mail</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                  <label class="form-check-label" for="gridRadios1">
                    Sim
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                  <label class="form-check-label" for="gridRadios2">
                    Não
                  </label>
                </div>
                <div class="form-check disabled">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                  <label class="form-check-label" for="gridRadios3">
                    Somente para meus contatos
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">Notificações</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                  <label class="form-check-label" for="gridRadios1">
                    Ativadas
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                  <label class="form-check-label" for="gridRadios2">
                    Desativadas
                  </label>
                </div>
                <div class="form-check disabled">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                  <label class="form-check-label" for="gridRadios3">
                    Somente notificações de segurança
                  </label>
                </div>
              </div>
            </fieldset>

            <div class="row mb-3">
              <div class="col-sm-10 offset-sm-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                  <label class="form-check-label" for="gridCheck1">
                    Compartilhar estatísticas
                  </label>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className="col-6">
                <select class="form-select form-select" aria-label="theme">
                  <option selected>Selecione o tema do aplicativo</option>
                  <option value="1">Modo claro</option>
                  <option value="2">Modo escuro</option>
                </select>
              </div>
            </div>

            <div class="col-12 mt-4">
              <button class="btn btn-success">Salvar configurações</button>
            </div>

          </form>
        </div>
      </section>

      <hr className='mt-5 mb-5' style={{ opacity: '0%' }} />

      <Footer />
    </main>
  )
}
