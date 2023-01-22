
/*

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, abrir a modal com o vídeo do trailer.
    - passo 1 - pegar o elemento que representa o botão na tela usando o js
    - passo 2 - identificar quando o usuário clicar no botão
    - passo 3 - pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X, fechar a modal.
    - passo 5 - pegar o elemento de fechar modal esando o js
    - passo 6 - identificar quando o usuário clicar no X
    - passo 7 - fechar a modal

mostra na tela 'Console' do navegador:
--> console.log()

*/



//passo 1 - pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");

//passo 3 - pegar o elemento da modal no js
const modal = document.querySelector(".modal");

//passo 5 - pegar o elemento de fechar modal esando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

//pega o id do video
const video = document.getElementById("video")

//pega link do video
const linkVideo = video.src;

//limpeza ou refatoração de código
function alternarModal(){
    modal.classList.toggle("aberto");
}

//passo 2 - identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
    //modal.classList.add("aberto");
    alternarModal();
    video.setAttribute("src" , linkVideo);
});

//passo 6 - identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    //passo 7 - fechar a modal
    //modal.classList.remove("aberto");
    alternarModal();
    video.setAttribute("src", "")
});

