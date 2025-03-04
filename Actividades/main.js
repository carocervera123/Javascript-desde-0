function cambiarTexto(){
    let titulo = document.getElementById('titulo');
    titulo.textContent = "Hola, desde el DOM";
}

function cambiarTextoClase(){
    let parrafos = document.getElementsByClassName('texto');
    for (let i=0; 1 < parrafos.length; i++){
        parrafos[i].style.color = "blue";
    }
}

/*selecciona todos los elementos con la clase texto, y luego usamos un bucle para cambiar de color todos los parrafos seleccionados */


function ocultarParrafo(){
    let segundoParrafo = document.getElementsByTagName('p')[4];
    segundoParrafo.style.display = 'none';
}

/*seleccionamos todos los elementos p y despues indicams mediante el indice ccual tocaremos []*/

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector('div p')
    parrafoDiv.textContent = "Texto cambiado dentro del Div";
}

/*selecciona el primer parrafo que se encunetra dentro de un div*/

function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach (item => {
        item.style.backgroundColor = "yellow";
    });
}

/* selecciona todos los elementos li y cambia su color de fondo a amarillo*/
/*querySelector()
Selecciona el primer elemento que coincide con un selector especificado 

querySelectorAll()
Selecciona todos los elementos que coinciden con el selector especificado -> devuelve mi objeto NodeList 
Cuando necesitas seleccionar multiples elementos 
Cuando necesitas iterar sobre una coleccion*/

