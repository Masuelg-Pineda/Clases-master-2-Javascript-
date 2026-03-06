//Objeto donde guardaremos el costo base dependiendo del destino
const COSTODESTINO = {
    Paris: 500,
    Londres: 400,
    NuevaYork: 600,
    Madrid: 350
    Tokyo: 700,
};

//Objeto donde guardaremos el costo adicional dependiendo del transporte
const COSTOTRANSPORTE = {
    Avion: 200,
    Tren: 100,
    Autobus: 60,
};

//Costo por noche dependiendo del alojamiento
const COSTOALOJAMIENTOXNOCHE = {
    Hotel: 90,
    Hostal: 30,
    Airbnb: 30,
};

//Funcion que va a recibir los datos del viaje
export const CalcularCosto = ({
    destino,
    transporte,
    alojamiento,
    noches = 0,
    personas = 1,
}) => {
    const baseDestino = COSTODESTINO[destino] ?? 0; //si el destino no existe usamos 0 por defecto y asi con todos
    const extraTransporte = COSTOTRANSPORTE[transporte] ?? 0;
    const costoAlojamiento = COSTOALOJAMIENTOXNOCHE[alojamiento] ?? 0;
    let subtotal = (baseDestino + extraTransporte) * personas; //costo del destino + el transporte (multiplicado por el numero de personas)
    //Sumamos el costo del alojamiento
    //Noche * precio por noche
    subtotal += noches * costoAlojamiento;

    const descuento = 
    personas >= 5 ? 0.12 : //12% de descuento
    personas >= 3 ? 0.07 : //7% de descuento    
    0; //sin descuento

    //Usando operador ternario = 
    //condicion ? valor si es true : valor si es false

    //Aplicando el des cuento al subtotal
    const total = subtotal * (1 - descuento);

    //Redondear el resultado
    return Math.round
 };

 /* esto seria sin usar operador ternario
 let descuento;
 if (personas >= 5) {
    descuento = 0.12; //12% de descuento
 } else if (personas >= 3) {
    descuento = 0.07; //7% de descuento
 } else {
    descuento = 0; //sin descuento
 } */

