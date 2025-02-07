//var es una forma antigua de declarar variables, let es la forma moderna


var nombre = "Ana";

var nombre = "Fernanda";

var nombre = "victor";


console.log(nombre);

//let no permite redeclarar variables, lo que significa que no puedes declarar dos variables al mismo tiempo

let apellido1 = "Gutierrez";

let apellido2 = "Lopez";
//let tiene un scope de bloque, lo que significa que solo vive en el bloque donde fue declarado. un bloque es {}

//let si permite cambiar el valor
//reasignaci'on de valor
apellido1 = "perez";

console.log(apellido1);

//const en una constante, no se puede reasignar un valor
const PI = 3.1416