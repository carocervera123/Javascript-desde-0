// Tipo de mascotas = Gato, Perro, Hamster

// Condicionales (Jaula mediana, Jaula grande, Jaula peque;a)

let tipodemascota = "Perro";

if (tipodemascota === "Perro"){
    console.log("si tienes un perro, necesitas la jaula grande.")
} else if (tipodemascota === "Gato"){
    console.log("si tienes un gato, necesitas la jaula peque;a")
} else { //ELSE es el bloque falso (se ejecuta si no se cumple ninguna de las condiciones anteriores)
    console.log("no contamos con jaulas para esa mascota.")
}

//semaforo color = Rojo, Amarillo, Verde
// Rojo= Alto, Amarillo= Detente, Verde=Siga

let color = "Rojo";

if (color === "Rojo"){
    console.log("Alto")
}
else if(color === "Amarillo"){
    console.log("Detente")
}
else if(color === "Verde"){
    console.log("Pase")
}
else {
    console.log("El color no existe")
}


let edad = 17;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// Para poder obtener una beca

let creditos = 10; // Minimo 10 creditos
let promedio = 7.5; // Minimo 8.5

if(creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca");
}else{
    console.log("No tienes derecho a una beca");
}

// Agregar el mensaje de - Te hacen falta creditos 
// Agregar el mensaje de - Tu promedio debe subir
let nota = 30.0; // Puedes cambiar este valor para probar diferentes casos

if (nota === "") {
    console.log("No pusiste la nota");
} else if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Bien");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("No apruebas");
}


//Proyecto 2
//Si la nota es 90 o más, el estudiante aprueba con "Excelente".
//Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
//Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
//Si la nota es menor de 60, el estudiante no aprueba.

let calific = 59;

if (calific >= 90){
    console.log("Excelente");
}
else if (calific >= 75 && nota <= 89){
    console.log("Bien");
}
else if (calific >=60 && nota <=74) {
    console.log("Suficiente");
}
else {
    console.log("No aprobado");
}