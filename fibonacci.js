let fib = [];
fib[0] = 0;
fib[1] = 1; //console.log(fib)"Testando se esta começando certo"
const write = document.querySelector('.resultado'); 
let aux = 40;       //Numero de valores no Array fib
let number = 34;    //Numero de escolha para o teste

for(let i = 2; i<aux; i++){
    fib[i] = fib[i-2]+fib[i-1]; //Fibonacci
}

write.innerHTML += `Valor sendo testado: ${number}<br>`;
console.log(fib);              //Array de fib ate 40 valores como definido no aux;
if(fib.indexOf(number) !==-1){ //Testando se pertence ou não ao Array fib.
    write.innerHTML +='Pertence a Fibonacci<br>'; 

}
else{
    write.innerHTML += 'Não pertence a Fibonacci';
}

//TESTANDO EM OUTRAS CONDIÇÕES: "Valor não pertence"
let number2 = 33;
write.innerHTML += `Valor sendo testado: ${number2} <br>`;
if(fib.indexOf(number2) !==-1){ //Testando se pertence ou não ao Array fib.
    write.innerHTML +=('Pertence a Fibonacci'); 

}
else{
    write.innerHTML += 'Não pertence a Fibonacci';
}

