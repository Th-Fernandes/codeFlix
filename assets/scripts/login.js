import { App } from "./App.js";
import { perfisModal } from "./perfisModal.js";
import { usuarios } from "./usuarios.js";


export const login = {
  user: undefined,

  verificarDados() {
    const email = document.querySelector("#userMail");
    const senha = document.querySelector("#userPassword");
    const logar = document.querySelector("#login");


    logar.addEventListener("click", () => {
      for (let usuario of usuarios) {
        if(usuario.email == email.value && usuario.senha == senha.value) {
          const loginSection = document.querySelector("#loginContainer");
          //cria e exibe o modal de perfis
          perfisModal.imprimir(usuario.perfis[0].nick)
          perfisModal.excluir()

          loginSection.classList.add("desactived");
          //animação de sumir o modal de login aos poucos
          setTimeout(() => {
            loginSection.style.display = "none";
            loginSection.style.visibility = "hidden";
          }, 1100);

          break

          /* 
          this.user = user
          console.log(this.user)
          */
        }
        else  {
          const loginError = document.querySelector('#loginError')
          loginError.classList.add('active')

          console.error('não foi possível autenticar o login')
        }
      }
  

      //faz uma varretura nos logins e senhas, se alguma der certo ele permite o acesso
      /* 
      usuarios.map((user) => {
        if (user.email == email.value && user.senha == senha.value) {
          const loginSection = document.querySelector("#loginContainer");
          //cria e exibe o modal de perfis
          perfisModal.imprimir(user.perfis[0].nick)
          perfisModal.excluir()

          loginSection.classList.add("desactived");
          //animação de sumir o modal de login aos poucos
          setTimeout(() => {
            loginSection.style.display = "none";
            loginSection.style.visibility = "hidden";
          }, 1100);

          this.user = user
          console.log(this.user)
        }
        else {
          const loginError = document.querySelector('#loginError')
          loginError.classList.add('active')

          console.error('não foi possível autenticar o login')
        }
      });
      */
    });
  },

  prevenirRecarregamento() {
    const form = document.querySelector("#loginInfo");

    const cancelarRecarregamento = (event) => {
      event.preventDefault();
    };
    form.addEventListener("submit", cancelarRecarregamento);
  },
};
