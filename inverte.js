let string = 'string';//Valor sendo invertido
let inverted ='';   //console.log(string[0]);
const write = document.querySelector('.res');
write.innerHTML += `O texto sendo invertido é: ${string}<br>`;
for(var i = string.length -1;i>=0;i--){
    
    console.log(string[i])//array invertido
    inverted += string[i];
}
write.innerHTML += `O resultado da inversão é: ${inverted}`;//texto invertido
