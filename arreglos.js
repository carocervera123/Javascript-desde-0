
let verduras = [ 'lechuga', 'tomate', 'cebolla', 'jitomate', 'papa', 'pimiento']; //arreglo con datos

console.log(verduras[0]);
console.log(verduras[1]);
console.log(verduras[2]);
console.log(verduras[3]);

console.log(verduras.length);

for(let indice =0; indice < verduras.length; indice++){
    console.log(verduras[indice]);
}

console.log("Metodos de arreglos");


let personas = [];//arreglo vacio

personas.push('Ana'); //agrega elementos al final del arreglo
personas.push('diego')
personas.push('Liset')
personas.push('Marsela')

console.log(personas);

personas.pop()//elimina el ultimo elemento del arreglo

console.log(personas);

personas.unshift('Alex'); //agrega un elemto al inicio de mi arreglo
personas.unshift('yolanda');
console.log(personas);

personas.shift(); //elimina el primer elemento del arreglo
console.log(personas);


personas[1] = 'Monica'; //modificar un elemento del arreglo
console.log(personas);







