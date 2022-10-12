class Usuario{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        console.log(`${nombre} ${apellido}`)
    }
    countMascotas(){
        let cantidadMascotas = length.mascotas;
        console.log(cantidadMascotas);
    }
    addMascota(){

    }
    addBook(){

    }
    getBookNames(){

    }
}