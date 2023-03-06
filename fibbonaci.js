let fib = [];
fib[0] = 0;
fib[1] = 1;
                    //console.log(fib)"Testando se esta começando certo"
let aux = 40;       //Numero de valores em fibonacci
let number = 34;    //Numero de escolha para o teste
for(let i = 2; i<aux; i++){
    fib[i] = fib[i-2]+fib[i-1]; //Fibonacci
}
console.log(fib);              //Array de fib ate 40 valores como definido no aux;
if(fib.indexOf(number) !==-1){ //Testando se pertence ou não ao Array fib.
    console.log('Pertence a Fibonacci'); 

}
else{
 console.log('Não pertence a Fibonacci');
}


// r - f = 100

