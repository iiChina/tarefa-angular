import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css'],
})
export class Componente01Component {
  cliente!: Cliente;

  constructor() {
    this.cliente = new Cliente();
  }

  tipoDocumento = 'CNPJ';
  tipoPessoa = 'Jurídica';

  alterarDocumento(value: any) {
    if (value == 'CPF') {
      this.tipoDocumento = 'CPF';
      this.tipoPessoa = 'Física';
    } else if (value == 'CNPJ') {
      this.tipoDocumento = 'CNPJ';
      this.tipoPessoa = 'Jurídica';
    }
  }

  mostrarCliente() {
    this.cliente.tipoCliente = this.tipoPessoa;

    alert(
      'Nome: ' +
        this.cliente.nome +
        '\n' +
        this.tipoDocumento +
        ': ' +
        this.cliente.documento +
        '\nEndereço: ' +
        this.cliente.endereco +
        '\n Tipo Cliente: ' +
        this.cliente.tipoCliente
    );
    console.log(this.cliente);
  }
}
