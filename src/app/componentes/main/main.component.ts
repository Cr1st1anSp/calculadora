import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  valor: string = '';

  addOperador(operador: string): void {
    this.valor += operador;
  }

  addDigito(digito: number): void {
    this.valor += digito.toString();
  }

  addDecimal(): void {
    if (!this.valor.includes('.')) {
      this.valor += '.';
    }
  }

  borrar(): void {
    this.valor = '';
  }

  calcular(): void {
    try {
      this.valor = eval(this.valor).toString();
    } catch (error) {
      this.valor = 'Error';
    }
  }
}
