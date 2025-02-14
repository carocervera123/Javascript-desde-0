//declarar un arreglo llamado frutas con cada tipo de fruta 
let frutas = ["Manzana", "Platano", "Manzana", "lulo", "platano", "lulo", "Manzana"];

//crear un objeto para almecenar la cantidad de cada tipo de fruta
let conteofrutas = {};

//usar un ciclo for para recorrer el arreglo y contar las frutas
for (let indice = 0; indice < frutas.length; indice++){
    let fruta = frutas[indice];
    if (conteofrutas[fruta]){
        //si la fruta ya existe incrementa el contador
        conteofrutas[fruta]++ //conteofrutas[fruta] + conteofrutas[fruta] +1
    } else{
        conteofrutas[fruta] =1;
        //si la fruta no exite inicializar el contador en 1
    }
}

//imprimir en la consola la cantidad de cad tipo de fruta
console.log("conteo de frutas usando ciclo for");
for(let fruta in conteofrutas){
    console.log(`${fruta}: ${conteofrutas[fruta]}`);
}


suma= 3+2+"7";


console.log(suma) 