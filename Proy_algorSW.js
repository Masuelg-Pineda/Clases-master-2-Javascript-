function findLongestWord(text) {
    // Dividir el texto en palabras
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo
    for (let i = 0; i < words.length; i++) {

        // Limpiar signos de puntuación (opcional pero recomendado)
        let palabra = words[i].replace(/[.,]/g, '');

        // Comparar longitudes
        if (palabra.length > longestWord.length) {
            longestWord = palabra;
        }
    }

    return longestWord; // Nos da el resultado
}

// Ejemplo
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); 
// "programación"