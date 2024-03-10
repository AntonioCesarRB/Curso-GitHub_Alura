 alert('Bem-vindo(a) ao jogo do número secreto');
let max = 500
 let numeroSecreto = parseInt(Math.random()*max+1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute != numeroSecreto){;
    chute = prompt(`Escolha um número entre 1 e ${max}`);
    //tentativas = tentativas + 1;   
    // comparação dos valores
    if(numeroSecreto == chute) {;
        tentativas++
        break;
    } else{;
        if(chute < numeroSecreto){;
            alert (`Tente de novo! O número é maior que ${chute}.`);
        } else{;
            alert (`Tente de novo! O número é menor que ${chute}.`)};
    }  
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Acertou! O número secreto era ${numeroSecreto} e só levou ${tentativas} ${palavraTentativa}.`);
