let listaDenumero =[];
let limite = 10
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.sepak(texto, 'Brazillian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'escolha um número entre 1 e 10');

}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertooou!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Isso aí você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!!!');
            exibirTextoNaTela('p', `o número secreto é menor que ${chute}`);
        }if(chute < numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!!!');
            exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroaleatorio() {
    let numeroEscolhido= parseInt(Math.random()*limite +1);
    let quantidadeDeElementos = listaDenumero.length;

    if(quantidadeDeElementos == limite){
        listaDenumero = [];
    }
    if(listaDenumero.includes(numeroEscolhido)){
        return gerarNumeroaleatorio();
    }
    else{
        listaDenumero.push(numeroEscolhido);
        console.log(listaDenumero)
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='' ;
}
function reiniciar(){
    numeroSecreto =gerarNumeroaleatorio()
    limparCampo()
    tentativas =1;
    mensagemInicial()
    document.getElementById('reiniciar').removeAttribute('disables', true)
}