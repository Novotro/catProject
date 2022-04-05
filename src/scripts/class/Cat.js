class Cat{
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  } 
}

function decirNombre(){
  console.log(this.nombre);
}