import { login } from "./login.js"
import { Perfil } from './Perfil.js'

export const perfisModal = {
  criar(perfil) {
    const modal = document.createElement('section')
    modal.id = 'perfisSection'
    modal.innerHTML = 
    `
    <div id="profilesContainer">
      <h2> Quem está assistindo? </h2>

      <ul id="profiles">
        <li class="profile">
          <img  class="user" src="./assets/images/default-avatar.jpg" alt="">

          <p>${perfil}</p>
        </li>

        <li class='profile add-profile'> 
          <img id='addButton' src="./assets/images/add.svg"/>

          <p>Adicionar nova conta</p>
        </li>
      </ul> 
    </div>
    `

    return modal
  },

  imprimir(perfil) {
    const body = document.querySelector('body')
    body.appendChild(this.criar(perfil))
    
    this.adicionarPerfil()
  },

  excluir() {
    const perfis = document.querySelectorAll('.user')

    perfis.forEach((Element) => {
      Element.addEventListener('click', () => {
        const modal = document.querySelector('#perfisSection')

        modal.remove()
      })
    })
  },

  adicionarPerfil() {
    const addButton = document.querySelector('#addButton')

    addButton.addEventListener('click', () => {
      console.log(login.user)
      login.user.perfis.push(new Perfil('haha'))
      
    })
  }
}