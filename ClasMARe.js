//funion de countdown

function countdown(n){
//Caaso base; cuando n llega a , termina
    console.log("Entrando con n =");
    if(n===0){
        console.log("Caso base alcanzado");
        return;
    }
    //Accion actual
    console.log(n);

    //Llamada recursiva (reducimos el problema)
    countdown(n-1);
    console.log("Saliendo de n= ", n);
}
countdown(5);