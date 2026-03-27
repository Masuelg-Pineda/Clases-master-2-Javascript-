// "Busqueda binaria"

function binarySearch(arr, target, low = 0, high = arr.length - 1){
    //Caso base, donde ya no podamos buscar
    if (low > high){
        return -1;
    }

    //Paso 1. Dividir
    let mid = Math.floor((low + high) / 2);

    //Paso 2. Conquistar
    if(arr[mid] === target){
        return mid; //Si encontramos ese valor
    }

    //Paso 3. Seguir dividiendo
    if(arr[mid] > target){
        //Buscamos en la mitad izquierda
        return binarySearch(arr, target, low, mid - 1);
    }else {
        //Buscar en la mitad derecha
        return binarySearch(arr, target, low, mid + 1, high);
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5));
