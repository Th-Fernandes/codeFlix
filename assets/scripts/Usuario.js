import { Perfil } from "./perfil.js";

export class Usuario {
  constructor({nome, email, senha, nick}) {
    this.nome = nome;
    this.email = email; 
    this.senha = senha;
    this.perfis = [
      new Perfil(nick)
    ]
  }

  get loginInfo () {
    return {email: this.email, senha: this.senha}
  }
}


