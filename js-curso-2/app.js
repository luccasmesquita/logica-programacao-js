let titulo = document.querySelector('h1'); //querySelector é utilizado para selecionar determinado codigo
titulo.innerHTML = 'Jogo do número secreto'; // innetHtml é utilizado para inserir algo no codigo 

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10';

//funcão é um codigo que faz alguma responsabilidade / é responsavel por determinar alguma ação dentro no nosso programa 
function verificarChute() {
    console.log('o botão foi clicado')
}