const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {

        // Obtiene las iniciales en minúscula
        let inicial1 = arr[inicio][0].toLowerCase();
        let inicial2 = arr[siguiente][0].toLowerCase();

        // Compara las iniciales
        if (inicial1 === inicial2) {
            return [arr[inicio], arr[siguiente]];
        }

        // Avanzan los punteros como en clase
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

// Puesto a prueba se ve así
console.log(encontrarPareja(invitados)); 