import {usuarios} from './usuarios.js'

export const login = {
  verificarDados() {
    const email = document.querySelector('#userMail');
    const senha = document.querySelector('#userPassword');
    const logar = document.querySelector('#login');

    logar.addEventListener('click', () => {
      for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email == email.value && usuarios[i].senha == senha.value ){
          const loginSection = document.querySelector('#loginContainer')
          
          loginSection.classList.add('desactived')
          
          setTimeout(() => {
            loginSection.style.display = 'none'
            loginSection.style.visibility = 'hidden'
          }, 1100)
        };
      }
    })
  },

  prevenirRecarregamento() {
    const form = document.querySelector('#loginInfo')

    const cancelarRecarregamento = (event) => {
      event.preventDefault()
    }

    form.addEventListener('submit', cancelarRecarregamento)
  }
}