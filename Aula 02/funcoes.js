let num1 = 2;
const num2 = 3;

var msg = "Olá amigos! Esse é o número:";

console.log(msg, num1);
console.log(num1 + num2);
console.log(typeof num1);
console.log(typeof num2);

//métodos são funcionalidades prontas pda linguagem que podem receber parametros

function Somar() {
    n1 = 2;
    n2 = 5

    console.log("O resultado e", n1 + n2);
}

Somar()

function SomarComParametros(n1, n2) {
    let r = "O resultado e" + (n1 + n2);
    console.log(r);
}

SomarComParametros(53, 47)

const Teste = (n) => {
    let r = n % 2;
   
    if (r == 1) {
        return "Impar"
    }
    
    return "Par"
}

console.log(Teste(4))