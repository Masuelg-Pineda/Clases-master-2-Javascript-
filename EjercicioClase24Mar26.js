//Backtracking ejercicio

function generarSubconjuntos(nums){
    const resultado = [];

    function backtrack(inicio, camino){
        //Guardar una copia del camino actual
        resultado.push([... camino]);

        for(let i = inicio; i < nums.leght; i++){
            //Elegir (agregamos el elemento actual al subconjunto)
            camino.push(nums[i]);

            //Explorar(llamamos recursivamente avanzando al siguiente indice (i+1))
            bactrack(i + 1, camino);

            //Deshacer la decision (retroceso) quitamos el ultimo elemento agregado
            camino.pop();
        }
    }

    //Iniciamos desde indice 0 y con un subconjunto vacio
    bactrack (0, []);
    console.log("Total de subconjuntos = ", resultado.lenght);
    return resultado;
}

console.log(generarSubconjuntos([1,2,3]));