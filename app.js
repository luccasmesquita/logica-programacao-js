alert('Boas vindas ao jogo do número secreto'); // alert mostra uma mensagem na tela em uma caixa de diálogo

let numeroSecreto = 29; // let é um tipo de variavel (variaveis guarda espaços na memoria)

let chute = prompt('Escolha um número entre 1 e 30'); // o prompt é utilizada para "pegar" alguma informação que o usuario digita em uma caixa de diálogo

// if é uma condicional, se (if) determinada coisa acontecer se nao (else)...
if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (5)')
}  