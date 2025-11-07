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


  // ===============================
  // 🔸 EXERCÍCIOS DE DECISÃO IF / ELSE / SWITCH / TERNÁRIO
  // ===============================
  exercicios = () => {
    console.log('--- Exercícios: Estruturas de Decisão If, Else If e Else ---');
    console.log('1️⃣ Faça um programa que receba uma nota (0–100) e exiba "Aprovado" se for >= 60, caso contrário "Reprovado".');
    console.log('2️⃣ Crie um sistema que exiba mensagens diferentes conforme a faixa etária (criança, adolescente, adulto, idoso).');
    console.log('3️⃣ Peça uma temperatura e mostre se está "frio", "agradável" ou "quente" usando operadores ternários.');
    
    console.log('\n--- Exercícios: Estrutura Switch ---');
    console.log('4️⃣ Peça um número de 1 a 7 e exiba o dia da semana correspondente.');
    console.log('5️⃣ Crie um menu de operações matemáticas (somar, subtrair, multiplicar, dividir) com switch.');
    console.log('6️⃣ Use um switch para classificar uma cor (vermelho, verde, azul, outro).');
    
    console.log('\n🎯 INICIANDO EXERCÍCIOS SOMENTE COM OPERADOR TERNÁRIO SIMPLES');
    console.log('🎯 EXERCÍCIO 1: Verificador de Maioridade — verifica se uma pessoa é maior de idade usando ternário simples');
    console.log('🎯 EXERCÍCIO 2: Verificador de Número Par/Ímpar — verifica se um número é par ou ímpar');
    console.log('🎯 EXERCÍCIO 3: Verificador de Login — verifica se o usuário está logado e retorna mensagem apropriada');
  };

  // ===============================
  // 🔸 EXEMPLOS PRÁTICOS DOS EXERCÍCIOS
  // ===============================
  exemplosTernario = () => {
    console.log('\n🔢 EXEMPLOS PRÁTICOS');

    // 1️⃣ Verificador de nota (If / Else)
    let nota: number = 85;
    let resultado = nota >= 60 ? 'Aprovado ' : 'Reprovado ';
    console.log(`Nota: ${nota} → ${resultado}`);

    // 2️⃣ Faixa etária
    let idade: number = 22;
    let faixa = idade < 12 ? 'Criança'
              : idade < 18 ? 'Adolescente'
              : idade < 60 ? 'Adulto'
              : 'Idoso';
    console.log(`Idade: ${idade} → ${faixa}`);

    // 3️⃣ Temperatura com ternário aninhado
    let temperatura: number = 26;
    let clima = temperatura < 15 ? 'Frio '
              : temperatura <= 30 ? 'Agradável '
              : 'Quente ';
    console.log(`Temperatura: ${temperatura}°C → ${clima}`);

    // 4️⃣ Switch — dia da semana
    let dia: number = 3;
    let nomeDia: string;
    switch (dia) {
      case 1: nomeDia = 'Domingo'; break;
      case 2: nomeDia = 'Segunda'; break;
      case 3: nomeDia = 'Terça'; break;
      case 4: nomeDia = 'Quarta'; break;
      case 5: nomeDia = 'Quinta'; break;
      case 6: nomeDia = 'Sexta'; break;
      case 7: nomeDia = 'Sábado'; break;
      default: nomeDia = 'Dia inválido';
    }
    console.log(`Dia ${dia} → ${nomeDia}`);

    // 5️⃣ Menu matemático (Switch)
    let operacao: string = 'dividir';
    let a = 10, b = 2;
    let resultadoOperacao: number;

    switch (operacao) {
      case 'somar': resultadoOperacao = a + b; break;
      case 'subtrair': resultadoOperacao = a - b; break;
      case 'multiplicar': resultadoOperacao = a * b; break;
      case 'dividir': resultadoOperacao = b !== 0 ? a / b : NaN; break;
      default: resultadoOperacao = NaN;
    }
    console.log(`Operação: ${operacao} → Resultado: ${resultadoOperacao}`);

    // 6️⃣ Classificação de cor
    let cor: string = 'verde';
    let classificacaoCor: string;

    switch (cor.toLowerCase()) {
      case 'vermelho': classificacaoCor = 'Cor Quente '; break;
      case 'verde': classificacaoCor = 'Cor da Natureza '; break;
      case 'azul': classificacaoCor = 'Cor Fria '; break;
      default: classificacaoCor = 'Cor não identificada ';
    }
    console.log(`Cor: ${cor} → ${classificacaoCor}`);

    // 🎯 Exercício 1 — Verificador de Maioridade (Ternário simples)
    let maiorIdade = idade >= 18 ? 'Maior de idade ' : 'Menor de idade ';
    console.log(maiorIdade);

    // 🎯 Exercício 2 — Par ou Ímpar
    let numero: number = 7;
    let parOuImpar = numero % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(`Número ${numero} é ${parOuImpar}`);

    // 🎯 Exercício 3 — Login
    let logado: boolean = true;
    let statusLogin = logado ? 'Usuário logado com sucesso ' : 'Acesso negado ';
    console.log(statusLogin);

    // 🧮 Classificação final (exemplo adicional)
    let classificacao = nota >= 90 ? 'A' :
                        nota >= 80 ? 'B' :
                        nota >= 70 ? 'C' :
                        nota >= 60 ? 'D' : 'F';
    console.log(`Classificação final: ${classificacao}`);
  };
}
 
