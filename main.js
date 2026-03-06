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

/* const descuento = 
    personas >= 5 ? 0.12 : //12% de descuento
    personas >= 3 ? 0.07 : //7% de descuento    
    0; //sin descuento
    //Usando operador ternario = 
    //condicion ? valor si es true : valor si es false
*/

//spread operator
let numeros = [1, 2, 3];
let copia = [...numeros];
console.log(copia);
//poder copiasr arreglos sin modificar el original
let frutas = ["manzana", "banana", "naranja"];
let nuevasfrutas = [...frutas];
nuevasfrutas.push("pera");
console.log(frutas);
console.log(nuevasfrutas);