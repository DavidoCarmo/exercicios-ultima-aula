const readline = require('readline-sync');

let saldo = readline.questionFloat("Informe o saldo inicial: ");

let operacao;

do {
  operacao = readline
    .question("Informe a operação (Deposito, Saque, Saldo ou Sair)")
    .toLowerCase();
  if (operacao === "deposito" || operacao === "saque") {
    const valorOperacao = readline.questionFloat("Informe o valor da operação: ")

    if (valorOperacao <= 0) {
      console.log("Valor inválido");
      continue;
    }

    if (operacao === "deposito") {
      saldo += valorOperacao;
    } else if (operacao === "saque") {
      if (valorOperacao > saldo) {
        console.log("Operação inválida - Saldo insuficiente");
        continue;
      }
      saldo -= valorOperacao;
    }
  } else if (operacao === "saldo") {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
  } else if (operacao === "sair") {
    continue;
  } else {
    console.log("Operação inválida")
  }
} while (operacao !== "sair")