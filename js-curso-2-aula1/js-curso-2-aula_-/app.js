let listaDeNumerosSorteados = [];
let numeroMax
numeroMax= prompt('Escolha um número maior que 1');
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio(){;
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeElementosnalista = listaDeNumerosSorteados.length;
    if (quantidadeElementosnalista == numeroMax){
        listaDeNumerosSorteados = [];
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    let textoInicio = ('Escolha um número entre 1 e ' + numeroMax);
    exibirTextoNaTela('p', textoInicio);
}

mensagemInicial();

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function verificarChute() {;
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto)
    console.log(chute == numeroSecreto ? 'sim' : 'não');
    if(chute == numeroSecreto){;
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto em ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute < numeroSecreto){;
            exibirTextoNaTela('p', 'Chute mais alto');
        } else{;
            exibirTextoNaTela('p', 'Chute mais baixo');
    }  
    }
    tentativas++
    limparCampo()
};