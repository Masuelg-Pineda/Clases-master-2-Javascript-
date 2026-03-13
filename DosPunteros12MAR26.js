function encontrarPar(arr, objetivo) {
    //Puntero que inicia al principio de mi arreglo
    let izquierda = 0;
    
    //Puntero que inicia al final del arreglo
    let derecha = arr.length - 1;

    //Mientras que los punteros no se crucen
    while (izquierda < derecha) {

        //Calcular la suma de ambos valores
        let suma = arr[izquierda] + arr[derecha];

        //SI encobtramos el objetivo
        if (suma === objetivo) {
            //Regresar el par encontrado
            return [arr[izquierda], arr[derecha]];
        }   
        else if (suma < objetivo) {
            //Si la suma es menor al objetivo, nos movemos hacia la izquierda
            izquierda++;
        }   
        else {
            //Si la suma es mayor al objetivo, nos movemos hacia la derecha
            derecha--;
        }
    }
    //Si no encontramos ningún par
    return null;
}

let numeros = [2, 4, 7, 10, 11, 15, 20, 40, 80];
let resultado = encontrarPar(numeros, 25);
console.log(resultado); // Debería imprimir [2, 60] o [4, 58] o [7, 55] o [42, 20] dependiendo de la implementación.

//Ejercicio; crear una funcion que revise si un string espalindromo(string)
//Anita lava la tina
//radar
//Palabra extra

function esPalindromo(texto) {
    // Texto homogeneo sin espacios ni mayusculas
    texto = texto.toLowerCase().replace(/\s/g, "");

    let izquierda = 0;
    let derecha = texto.length - 1;

    while (izquierda < derecha) {

        if (texto[izquierda] !== texto[derecha]) {
            return false; // Si no coinciden, no es palíndromo
        }

        izquierda++;
        derecha--;
    }

    return true; // Si nunca falló, sí es palíndromo
}

let frase = "Anita lava la tina";
console.log(esPalindromo(frase));
let frase2 = "OSo";
console.log(esPalindromo(frase2));