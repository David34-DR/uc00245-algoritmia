import { Component } from '@angular/core';


@Component({
  selector: 'app-ex1',
  standalone: true,

  templateUrl: './Aula02.html',
  styleUrls: ['./Aula02.css']
})
export class Aula02Component {
  outputs: string[] = [];


exerciciosParaFazer = () => {
  console.clear(); // limpa o console no início

  console.log('Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.');

  let nome: string = "João Melao";
  let idade: number = 25;
  let ativo: boolean = true;
  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Ativo:", ativo);

  console.log('\nExercício 2: Crie uma variável cidade e depois altere seu valor.');

  let cidade: string = "Lisboa";
  console.log("Cidade inicial:", cidade);
  cidade = "Porto";
  console.log("Cidade alterada:", cidade);

  console.log('\nExercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.');

  let variavel: any = "Texto";
  console.log("Tipo string:", variavel);
  variavel = 42;
  console.log("Tipo number:", variavel);
  variavel = true;
  console.log("Tipo boolean:", variavel);

  console.log('\nExercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.');

  let a: number = 10;
  let b: number = 5;
  console.log("Soma:", a + b);
  console.log("Subtração:", a - b);

  console.log('\nExercício 5: Calcule a área de um retângulo (largura * altura).');

  let largura: number = 8;
  let altura: number = 4;
  let area: number = largura * altura;
  console.log(`Área do retângulo: ${area}`); 

  console.log('\nExercício 6: Mostre o resto da divisão de 20 por 6.');

  let resto: number = 20 % 6;
  console.log("Resto da divisão:", resto);
}
}