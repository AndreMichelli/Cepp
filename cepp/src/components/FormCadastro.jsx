import React, { Component } from "react";

class FormCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormCadastro;