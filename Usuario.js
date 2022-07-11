class Usuario {
  constructor (nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  // Getter - Devuelve el Nombre completo del usuario, utilizando un método auxiliar
  get getFullName() {
     return this.calcFullName();
   }
  // Método auxiliar que usa template literals para devolver un string compuesto con las variables
  calcFullName () {
    return `El nombre es ${this.nombre} y el apellido es ${this.apellido}`;
  }
  //Método para agregar una mascota al array
  addMascota(mascota){
    this.mascotas.push(mascota);
  }

  //Método
  countMascotas(){
    return this.mascotas.length;
  }

  //Método
  addBook(nombre, autor){
    this.libros.push({ nombre: nombre, autor: autor});
  }

  //Método
  getBookNames(){
    return this.libros.map(function(i){return i.nombre});
  }

}

const alumno = new Usuario('Matias', 'Marangone',[{ nombre: "La Biblia", autor: "Jesus"},{ nombre: "1984", autor: "George Orwell"}],['perro','gato']);
alumno.addMascota('pajaro');
console.log(alumno.getFullName);
console.log(alumno.mascotas);
console.log(alumno.countMascotas());
alumno.addBook("La Biblia1","Jesus2");
console.log(alumno.libros);
console.log(alumno.getBookNames());
