alert('Boas vindas ao jogo do número secreto'); // alert mostra uma mensagem na tela em uma caixa de diálogo

let numeroSecreto = parseInt(Math.random() * 100 + 1); // let é um tipo de variavel (variaveis guarda espaços na memoria)
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

//enquanto chute não for igual ao numero secreto ...
while (chute != numeroSecreto) { // o sinal de != significa diferente
   chute = prompt('Escolha um número entre 1 e 100'); // o prompt é utilizada para "pegar" alguma informação que o usuario digita em uma caixa de diálogo
   // if é uma condicional, se (if) determinada coisa acontecer se nao (else)...
   // se o chute for igual ao numero secreto 
   if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que ${chute}`)
        }
        tentativas ++
    }  
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternario  
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`); // `` template strings é utilizado para concatenação de dados
