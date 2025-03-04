//Declaracion del objeto
const libro = {
    nombre: "Cien años de soledad",
    paginas: 422,
    autor: "Gabriel García Márquez",
    anio: 1967,
    editorial: "Editorial Sudamericana",
    estado: "disponible"
};

//llamar informacion basica del libro

console.log(`libro titulado ${libro.nombre}, tiene ${libro.paginas} paginas, el autor es ${libro.autor}, se publico en el anio ${libro.anio}, de la editorial ${libro.editorial} y se encuentra ${libro.estado}`)