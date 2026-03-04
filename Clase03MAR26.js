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

//HOISTING con var/undefined
//console.log(mascota);
var mascota = "Padentro";
console.log(mascota);

//TDZ, no podemos acceder a una variable antes de que se inicialice
//console.log(ciudad);
var ciudad = "Bogotá";
console.log(ciudad);

//Funcion tradicional, this depende de como se llama la funcion
function sumar(a, b) {
    return a + b;
}

//Funcion flecha, return explicito, this se hereda del contexto donde se fue creada
const sumar = (num1, num2) => {
    return num1 + num2;
}

//Arrow function en una sola linea
const Sumar1 = (a, b) => a + b; //return implicito

//Parametro sin ()
const duplicar = n => n * 2; //return implicito
console.log(duplicar(5));

//Retornando un objeto con return implicito
const crearUser = (nombre) => ({nombre: nombre, activo: true});
console.log(crearUser("Jostin"));

let perro = "Cata";
let comida = "Pollito";

//Concatencacion
let frase1 = "Hola soy " + perro + " y me gusta el " + comida;
console.log(frase1);

//Template literal
let frase2 = `Hola soy ${perro} y mi platillo favorito es el ${comida}`;
console.log(frase2);
