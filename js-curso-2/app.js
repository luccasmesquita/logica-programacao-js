let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); //querySelector é utilizado para selecionar determinado codigo
    campo.innerHTML = texto; // innetHtml é utilizado para inserir algo no codigo 
}
exibirTextoNaTela('h1', 'Jogo do número secreto'); //executando a função 
exibirTextoNaTela('p', 'Escolha um número de 1 a 10'); 

//funcão é um codigo que faz alguma responsabilidade / é responsavel por determinar alguma ação dentro no nosso programa 
function verificarChute() {
    let chute = document.querySelector('input').value; //value é utilizado pegar o valor dentro do campo
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); 
}