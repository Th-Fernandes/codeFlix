import { login } from "./assets/scripts/login.js";
import { App } from "./assets/scripts/App.js";

const app = new App
app.render(document.querySelector('body'), 
`
<section id="loginContainer">
<form action="" id="loginInfo">
  <h2>ENTRAR</h2>

  <div class="user-login-info">
    <label for="userMail">Email</label>
    <input type="email" name="userMail" id="userMail" placeholder="seu Email" />

    <label for="userPassword">senha</label>
    <input type="password" name="pass" id="userPassword" placeholder="senha">

    <button id="login"> Entrar </button>

    <span id="loginError">
      <img src="./assets/images/error.svg" alt="">
      <p>O email e senha não coicidem. Tente novamente.</p>
    </span>
  </div>

  <h2 class='titulo-criar-conta'>Não possui conta?</h2>

  <p>
    Você pode criar uma conta clicando <a href="#">aqui.</a>
  </p>
</form>
</section>
`)

login.prevenirRecarregamento()
login.verificarDados()








