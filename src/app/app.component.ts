import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: Array<any>; title: any;
  constructor() {
    this.users = [
      {
        NOME: 'MATHEUS GOMES DA SILVA',
        RU: '3432920',
        CURSO: 'TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
        NASCIMENTO: '21/07/2000'
      },
      {
        NOME: 'JOÃO DA SILVA',
        RU: '0123456',
        CURSO: 'BACHARELADO EM ENGENHARIA AGRONÔMICA',
        NASCIMENTO: '22/02/2001'
      },
      {
        NOME: 'MARIA ANDRADE',
        RU: '1234567',
        CURSO: 'BACHARELADO EM ENGENHARIA AMBIENTAL',
        NASCIMENTO: '09/01/2002'
      },
      {
        NOME: 'ANTONIO JUNIOR',
        RU: '2345678',
        CURSO: 'BACHARELADO EM ENGENHARIA BIOMÉDICA',
        NASCIMENTO: '20/03/1999'
      },
      {
        NOME: 'APARECIDA OLIVEIRA',
        RU: '3456789',
        CURSO: 'BACHARELADO EM ENGENHARIA CIVIL',
        NASCIMENTO: '07/12/1980'
      }
    ];
  }
}
