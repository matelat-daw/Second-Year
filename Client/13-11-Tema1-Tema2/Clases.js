// función constructora sin encapsulamiento
let agenda = [];
function Persona(pNombre, pApellidos){
    this.nombre = pNombre; //Propiedad pública
    this.apellidos = pApellidos; //Propiedad pública
    this.mostrar=function(){console.log(`${this.apellidos}, ${this.nombre}`)};
}
let p1=new Persona("Juan", "Pérez");
let p2=new Persona("Pedro", "Pérez");
agenda.push(p1,p2);
agenda.forEach(persona=>{persona.mostrar()});

// función constructora con encapsulamiento
let agenda2 = [];
function Persona(pNombre, pApellidos){
    let nombre = pNombre; //propiedad privada
    let apellidos = pApellidos; //propiedad privada
    this.setNombre = function(pNombre){nombre=pNombre} //Método público
    this.setApellidos = function(pApellidos){apellidos=pApellidos} //Método público
    this.mostrar=function(){console.log(`${apellidos}, ${nombre}`)} //Método público
} 
let p12=new Persona("Juan", "Pérez")
let p22=new Persona("Pedro", "Pérez")
agenda.push(p1,p2);
agenda.forEach(persona=>{persona.mostrar()});