import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  varriavelGlobal: string = ""; //vazia
  varriavelGlobal2!: string; //nao startada
  varriavelGlobal3?: string; //nao startada e pode ser indefinida
  varriavelGlobal4: number =  0; //nao startada e pode ser indefinida
  arrayGlobal: string[] = []; 

  ngOnInit(): void {
    this.exemploVariaveisETipos();
    this.exemploVariaveisETipos2();
    this.exemploOperadoresAritmeticos();
    this.exemploOperadoresComparacao();
  }

// ======================================================
// 🔹 1. VARIÁVEIS E TIPOS DE DADOS
// ======================================================
exemploVariaveisETipos(): void {
  console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
  console.log('--------------------------------');

  // 📘 Exemplo de código:

  let nome1: string = 'João';
  let idade1: number = 25;
  const ativo1: boolean = true;
  const valor: any = 'pode ser qualquer tipo';
  this.varriavelGlobal = "São as que começam dom THIS."

  console.log(nome1, idade1, ativo1, valor, this.varriavelGlobal);
  }

  exemploVariaveisETipos2 = () => {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.varriavelGlobal = "São as que começam dom THIS."

    console.log(nome1, idade1, ativo1, valor, this.varriavelGlobal);
  }


  // ======================================================
  // 🔹 2. OPERADORES ARITMÉTICOS
  // ======================================================
  exemploOperadoresAritmeticos(): void {
    console.log('\n🧩 2️⃣ OPERADORES ARITMÉTICOS');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let num1 = 10;
    let num2 = 3;
 
    console.log(num1 + num2); // Adição
    console.log(num1 - num2); // Subtração
    console.log(num1 * num2); // Multiplicação
    console.log(num1 / num2); // Divisão
    console.log(num1 % num2); // Resto da divisão
  }


    /* Operadores de  comparação  -- aula 03 */ 
 
  exemploOperadoresComparacao(): void {
    console.log('\n🧩 3️⃣ OPERADORES DE COMPARAÇÃO');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let x = 5;
    let y = 10;
 
    console.log(x === y); // Igualdade  -- 3 iguais ele compara os valores, compara por tipo 
    console.log(x != y); // Diferença
    console.log(x > y); // Maior que
    console.log(x < y); // Menor que
    console.log(x >= y); // Maior ou igual
    console.log(x <= y); // Menor ou igual
 
  }


}