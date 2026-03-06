//operador nullish coalescing
let nombre = "Jos";
let nombreFinal = nombre ?? "Invitado";
console.log(nombreFinal);

//Se activa cuando la variable es null/undefined
let edad;
let edadFinal = edad ?? "18";
console.log(edadFinal);

//OPERADOR AND
let numero = 0; // Va tomar el valor como falso si utilizamos AND

let resultado = numero || 10;
console.log(resultado);