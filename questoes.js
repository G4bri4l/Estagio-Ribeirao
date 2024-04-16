/** Questao 1* */

const indice = 13;
var soma = 0;
var k = 0;

while(k < indice) {
    k = k+1;

    soma = soma+k;
}

console.log(soma)

/*Questao 2 */

function eFibonacci(number) {
    let a = 0;
    let b = 1;

    while(b <= number) {
        if (b === number) {
            return true
        }

        let temp = b;
        b = a + b;
        a = temp;
    }

    return false;
}

let userInput = parseInt(prompt("Digite o numero"));

if(!isNaN(userInput)){
    console.log(`${userInput} pertence a sequencia`)
} else {
    console.log(`${userInput} pertence a sequencia`)
}

/*questao 3*/

/**
 a) adicionar dois ao numero anterior. logo viria o 9
 b) o dobro do anterior logo 128
 c)o quadrado do indice logo 49
  d) o quadrado dos numeros pares logo 100
  e) sequencia de Fibonacci, logo seria o 13
f) posto que a diferenca dos numeros vai diminuindo ao decorrer dos numeros, Onde na primeira é de 8, depois 2, entao aumenta para 4, mas segue apos uma sequencia de 1. Pode-se concluir que o proximo tambem tera uma diferença de 1, assim sendo o 20.
  /


  /*questao 4
  
  A forma simples seria ligando um interruptor, o deixando por alguns minutos e depois desligando. Apos ligando outro interruptor e indo na sala observar as lampadas.
  Conseguiria identificar da seguinte forma:

  Se a lampada estivesse desligada, mas quente, é o interruptor que liguei primeiro. Se estiver acessa, o ultimo que liguei. Se estiver desligada e fria, é o que eu nao liguei
  /


  */

  /**questao 5 */


  function inversor(palavra) {
    let resultado = '';
    for(let i = palavra.length - 1; i>=0 ; i--) {
        resultado += palavra[i];
    }

    return resultado;
  }


  const escrita = "Meu nome é Gabriel";
  const escritaInversa = inversor(escrita);
  console.log(escrita)
