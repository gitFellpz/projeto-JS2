const pergunta1 = document.getElementById('cabecalho-1');
const pergunta2 = document.getElementById('cabecalho-2');
const pergunta3 = document.getElementById('cabecalho-3');
const textos = document.querySelectorAll('.texto');
const textoSelecionado = document.getElementsByClassName('texto__selecionado')

pergunta1.addEventListener('click', function(){
    verificadorDeClasse(textoSelecionado)
    textos[0].classList.add('texto__selecionado')
})
pergunta2.addEventListener('click', function(){
    verificadorDeClasse(textoSelecionado)
    textos[1].classList.add('texto__selecionado')
})
pergunta3.addEventListener('click', function(){
    verificadorDeClasse(textoSelecionado)
    textos[2].classList.add('texto__selecionado')
})


function verificadorDeClasse(selecionado){
    if(selecionado.length == 1){
        selecionado[0].classList.remove('texto__selecionado')
    }
}