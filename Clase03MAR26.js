if (true) {
    var nombre = "Jostin";
}

console.log(nombre); // VAR NO respeta el alcance del bloque

//var permite redeclarar y reasignar 
var x = 1;
var x = "vaca";
var x = true;

if (true) {
    let apellido = "Perez"; //reference error, porque let respecta el scope de bloque
}

console.log(apellido);

let y = 10;

//NO permite redeclarar, ni reagsinar
const z = 5;

const usuario = {nombre: "Jostin", edad: 26};

//Mutado
usuario.edad = 27;

console.log(usuario);

console.log(mascota);
var mascota = "Padentro";
console.log(mascota);
