//Programa para mostrar los multiplos de 5 hasta un numero dado por el usuario

let numero = 20;

let contador = 1;

while(contador <= numero) {
    //codigo a iterar
    if (contador % 5 ===0){
        console.log(contador);
    }
    contador++; //incremento del contador
}

//output
console.log("final del programa");

//numeros inpares

let numero2 = 35;

for(let indice = 0; indice <= numero2; indice++){
    if(indice % 2 !== 0){
        console.log(indice);
    }
}

console.log("fin del programa");

//imprimir los numeros del 1 al 10

let inicio = 0; //inicializacion
//bucle while, cuando NO sabemos cuantas veces se va a repetir el codigo

while(inicio <= 10){
    console.log(inicio);
    inicio++;
}

console.log("fin del programa");

//Bucle for es para cuando ya sabemos cuantas veces se va a repetir
//sirve para arreglos
for(let i = 1; i <= 10; i++){
    console.log(i); //imprimiendo el valor actual de i
}