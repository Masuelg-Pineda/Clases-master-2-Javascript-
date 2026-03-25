//funion de countdown

function countdown(n){
//Caaso base; cuando n llega a , termina
    if(n===0){
        console.log("Fin");
        return;
    }
    //Accion actual
    console.log(n);

    //Llamada recursiva (reducimos el problema)
    countdown(n-1);
}
countdown(5);