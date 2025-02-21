let listaNumerosSorteados= [];
let numeroLimite= 10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativas= 1;
console.log(numeroSecreto);

function exibirTextoNaTela (tag,texto){
    let campo= document.querySelector(tag);
    campo.innerHTML= texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10.");
}
exibirMensagemInicial();

//para se criar uma funcao deve-se utiliza function + o nome da função() + {}
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++
                limparCampo()
        }
}   

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElemnetosLista= listaNumerosSorteados.length;
    if(quantidadeElemnetosLista== numeroLimite){
        listaNumerosSorteados=[];
    }

    if(listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}

function limparCampo(){
    chute= document.querySelector("input");
    chute.value="";
}

function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
