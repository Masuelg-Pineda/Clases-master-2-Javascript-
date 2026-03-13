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

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultado = encontrarPar(numeros, 9);
console.log(resultado); // Debería imprimir [1, 8] o [2, 7] o [3, 6] o [4, 5] dependiendo de la implementación.
