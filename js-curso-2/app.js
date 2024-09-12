let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); //querySelector é utilizado para selecionar determinado codigo
    campo.innerHTML = texto; // innetHtml é utilizado para inserir algo no codigo 
}
exibirTextoNaTela('h1', 'Jogo do número secreto'); //executando a função 
exibirTextoNaTela('p', 'Escolha um número de 1 a 10'); 

//funcão é um codigo que faz alguma responsabilidade / é responsavel por determinar alguma ação dentro no nosso programa 
function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); 
}