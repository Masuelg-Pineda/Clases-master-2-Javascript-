const COSTODESTINO = {
    Paris: 500,
    Londres: 400,
    NuevaYork: 600,
    Madrid: 350
    Tokyo: 70_0,
}:

const COSTOTRANSPORTE = {
    Avion: 200,
    Tren: 100,
    Autobus: 60,
};

const COSTOALOJAMIENTOXNOCHE = {
    Hotel: 90,
    Hostal: 30,
    Airbnb: 30,
};

const CalcularCosto = ({
    destino,
    transporte,
    alojamiento,
    noches = 0,
    personas = 1,
}) => {
    const baseDestino = COSTODESTINO[destino] ?? 0;
    const extraTransporte = COSTOTRANSPORTE[transporte] ?? 0;
    const costoAlojamiento = COSTOALOJAMIENTOXNOCHE[alojamiento] ?? 0;
    let subtotal = (baseDestino + extraTransporte) * personas;
    //Sumamos el costo del alojamiento
    //Noche * precio por noche
    subtotal += noches * costoAlojamiento;
}