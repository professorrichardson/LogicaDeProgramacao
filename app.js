alert('Boas vindas ao jogo do numero secreto.');
let numMax = 100;
let numeroSecreto =  parseInt(Math.random() * numMax + 1);
let numero;
let tentativas = 1;

console.log(numeroSecreto)

while(numero != numeroSecreto){
    numero = prompt(`Digite um número entre 1 e ${numMax}`);
    if (numeroSecreto == numero ){
        break;
    }else{
        if(numero > numeroSecreto){
            alert(`O número secreto e menor que ${numero}`);
        }else{
            alert(`O número secreto e maior que ${numero}`);
        }
        tentativas++;
    }
}

let palavraTenativa = tentativas > 1 ? 'tentativas':'tentativa'

console.log(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTenativa}.`);

