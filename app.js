import { registrarDestino, mostraritinerario } from "./viajes.js";
//Registrar algunos destinos
const iniciarApp = () => {

    //Registrar algunos destinos de ejemplo
    registrarDestino("Londres", "2026-05-26", "Avión", {
        alojamiento: "Hotel",
        noches: 4, 
        personas: 3
    });

    registrarDestino("Londres", "2026-07-26", "Tren", {
        alojamiento: "Airbnb",
        noches: 5, 
        personas: 2
    });

    registrarDestino("Tokyo", "2026-08-26", "Avión", {
        alojamiento: "Hostal",
        noches: 7, 
        personas: 1
    });

        //Mostrar todos los viajes registrados
        mostraritinerario();
};

//Ejecutamos la aplicación
iniciarApp();