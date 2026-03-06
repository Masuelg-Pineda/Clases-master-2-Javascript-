//importar la funcion que calcula costos
import { CalcularCosto } from "./costos.js";

//Se usa const porque no vamos a cambiar el arreglo, solo agregamos elementos
const destinos = [];

//funcion para crear un nuevo viaje
export const registrarDestino = (
    destino, 
    fecha, 
    transporte, 
    {alojamiento = "Hotel", noches = 0, personas = 1} = {}
) => {
    //Crear un objeto que represente un viaje

    const nueoviaje = {
        //guardamos los datos del viaje
        destino,
        fecha,
        transporte,
        alojamiento,
        noches,
        personas,

        //Calcular el costo llamando a nuestra funcion
        costo: CalcularCosto({
            destino, 
            transporte, 
            alojamiento, 
            noches, 
            personas
        })
    };
    //agregamos el viaje al arreglo
    destinos.push(nueoviaje);
    //devolvemos el objeto
    return nueoviaje;
};

export const obteneritinerario = () => {
    return [...destinos]; //devolvemos una copia del arreglo de destinos
};

export const mostraritinerario = () => {
    //Si no hay viajes registrados
    if (destinos.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }
    //recorremos el arreglo
    destinos.forEach((viaje, idx) => {
        console.log(`${idx + 1}`);
        
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento}`);
        console.log(`Personas: ${viaje.personas}`);
        
        console.log(`Costo Total: $${viaje.costo}`);
        console.log('-----------------------');
    })
};