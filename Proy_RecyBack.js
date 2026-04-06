// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {

    // Caso base 1: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: Si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva (avanzamos al siguiente índice)
    return findGift(gifts, giftName, index + 1);
}

// Pruebas
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); // "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); // "Camión no está en la lista."