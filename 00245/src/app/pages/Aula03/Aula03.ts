import { Component } from '@angular/core';

@Component({
  selector: 'app-aula03',
  standalone: true,
  templateUrl: './Aula03.html',
  styleUrls: ['./Aula03.css']
})
export class Aula03Component {

  exerciciosParaFazer = () => {
    console.clear();

    // Exercício 7
    console.log('Exercício 7: Compare dois números e diga se são iguais.');
    let num1 = 10, num2 = 10;
    console.log(num1 === num2 ? "Os números são iguais." : "Os números são diferentes.");

    // Exercício 8
    console.log('Exercício 8: Compare se um número é maior que o outro.');
    let a = 15, b = 8;
    console.log(a > b ? `${a} é maior que ${b}.` : `${a} não é maior que ${b}.`);

    // Exercício 9
    console.log('Exercício 9: Compare se dois textos são diferentes.');
    let texto1 = 'Angular', texto2 = 'React';
    console.log(texto1 !== texto2 ? "Os textos são diferentes." : "Os textos são iguais.");

    // Exercício 10 — Operadores lógicos
    console.log('Exercício 10: Verifique se uma pessoa pode dirigir (temIdade && temCarta).');
    let temIdade: boolean = true;
    let temCarta: boolean = false;
    console.log(temIdade && temCarta ? "Pode dirigir." : "Não pode dirigir.");

    // Exercício 11
    console.log('Exercício 11: Verifique se o acesso é permitido (logado || admin).');
    let logado: boolean = false;
    let admin: boolean = true;
    console.log(logado || admin ? "Acesso permitido." : "Acesso negado.");

    // Exercício 12
    console.log('Exercício 12: Inverta o valor de uma variável booleana.');
    let ativo: boolean = true;
    ativo = !ativo;
    console.log("Novo valor de ativo:", ativo);
  };
}
