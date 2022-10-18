class Usuario{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(nombre, apellido){
        return `Full name: ${this.nombre} ${this.apellido}`
    }
    countMascotas(mascotas){
        return ("Cantidad de mascotas:" + Number(this.mascotas.length))
    }
    addMascota(mascotas){
        this.mascotas.push(mascotas)
    }
    addBook(bookName, author){
        this.libros.push({ bookName, author })
    }
    getBookNames(){
        return `Libro: ${this.bookName}. 
        Autor: ${this.author}`
    }
}

const test = new Usuario("emiliano", "marchese", ["Harry potter y el caliz de fuego", "JK Rowling"], "gata")


test.countMascotas;
test.addBook("1984", "Jeorge Orwell");
test.addBook("Un Mundo Feliz", "Aldous Huxley");
test.addMascota("pez");

console.log(test)