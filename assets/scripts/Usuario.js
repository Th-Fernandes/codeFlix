export class Usuario {
  constructor({nome, email, senha}) {
    this.nome = nome;
    this.email = email; 
    this.senha = senha;
  }

  get loginInfo () {
    return {email: this.email, senha: this.senha}
  }
}

