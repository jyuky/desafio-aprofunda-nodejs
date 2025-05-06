    
    //1️⃣ Imprimindo Números Pares

    var n = 10;

    function imprimePares(n){

        for(let i = 0; i <= n; ++i){
    
            if(i % 2 === 0){
            
            console.log(i)
            }
        
        }
    }

    imprimePares(n)

    //Resultado:
    /*
    0
    2
    4
    6
    8
    10
    */

    /*************************************************************/


    //2️⃣ Soma dos Números de um Array

    var arrASomar = [1, 2, 3, 4, 5];

    function somaArray(arrASomar){
        var total = 0;

        for (let i = 0; i < arrASomar.length; i++){
            total += arrASomar[i]; 
        
            }
        return total;

    }

    console.log(somaArray(arrASomar));

    //Resultado: 15

    /*************************************************************/


    //3️⃣ Identificar Número Primo

    var numero;

    function ePrimo(numero) {

        if (numero <= 1) {
        return false;
        }
    
        for (let i = 2; i < numero; i++) {
        
        if (numero % i === 0) {
            return false;
        
        }
        }
    
        return true;
    }

    console.log(ePrimo(7));
    console.log(ePrimo(10));


    //Resultado 1:true
    //Resultado 2:false

    /*************************************************************/


    //4️⃣ FizzBuzz

    var valorAtual = 0;

    function fizzBuzz() {
        for (let valorAtual = 1; valorAtual <= 50; valorAtual++) {
        
        if(valorAtual % 3 === 0 && valorAtual % 5 === 0){
            console.log("FizzBuzz");

        }else if(valorAtual % 3 === 0){
            
            console.log("Fizz");

        } else if (valorAtual % 5 === 0){
        
            console.log("Buzz");
        } else {
            console.log(valorAtual);
        }     

        }
        
    }
    
    fizzBuzz(); 

    //Resultado: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz

    /*************************************************************/

    //5️⃣ Contador de Vogais

    var mensagem = "Node.js é incrível";

    function contaVogais(mensagem){

        const vogais = mensagem.match(/[aeiouáéíóúàèìòùâêîôûãõäëïöü]/gi);
        const cont = vogais.length;
    
    return cont;

    } 

    console.log(contaVogais(mensagem)); 

    //Resultado: 6

    /*************************************************************/


    //6️⃣ Tabuada de um Número

    var numeroMultiplicador = 5;

    function tabuada(numeroMultiplicador){

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        arr.forEach(element => {
            var total = element * numeroMultiplicador;
            
            console.log(element + " x " + numeroMultiplicador + " = " + total );
        
        });

    }

    tabuada(numeroMultiplicador);

    //Resultado:
    /*
    1 x 5 = 5
    2 x 5 = 10
    3 x 5 = 15
    4 x 5 = 20
    5 x 5 = 25
    6 x 5 = 30
    7 x 5 = 35
    8 x 5 = 40
    9 x 5 = 45
    10 x 5 = 50
    */

    /*************************************************************/


    //7️⃣ Inverter String

    var texto = "hello";

    function inverteString(texto){

        texto = texto.split('').reverse().join('');
        return texto;

    }

    console.log(inverteString(texto));

    //Resultado: olleh

    /*************************************************************/


    //8️⃣ Encontre o Maior Número

    var listaDeNumeros = [3, 10, 6, 2];

    function maiorNumero(listaDeNumeros){
    
        var maior = Math.max(...listaDeNumeros);
        return maior;
    }

    console.log(maiorNumero(listaDeNumeros));

    //Resultado:10

    /*************************************************************/


    //9️⃣ Palíndromo

    var fraseVerificada;

    function ePalindromo(fraseVerificada){
        
        if(fraseVerificada.toLowerCase() == fraseVerificada.split('').reverse().join('').toLowerCase()){
            
            return true;
        } else {
            return false;
        }

    }

    console.log(ePalindromo("Ame a ema"));
    console.log(ePalindromo("Olá mundo"));


    //Resultado 1: true
    //Resultado 1: false

    /*************************************************************/


    //🔟 Média de Notas

    var notas = [8, 7, 6];

    function calculaMedia(notas){

    let soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma += notas[i];

    }

    var media = soma / notas.length;
    var avaliacaoFinal = media >= 7 ? "Aprovado" : "Reprovado";

    console.log(`${avaliacaoFinal} - Média: ${media.toFixed(1)}`);
    
    }

    calculaMedia(notas);

    //Resultado: Aprovado - Média: 7.0

    /*************************************************************/



