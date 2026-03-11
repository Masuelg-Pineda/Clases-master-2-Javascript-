//Un arreglo puede tener cualquier tipo de dato JS
//De preferencia usamos const, let solo si reemplazaremos
const listadeCompras = ["Leche", "Pan", "Huevos"]

//Se pueden mezclar tipos
const mezcla = ["Ariel",23, true, false, {rol: "Estudiante"}, ["Sublista"]]

//Imprimir nuestro arreglo para ver que tiene dentro
console.log(listadeCompras)
console.log(mezcla)

//Aunque usemos const podemos modificar el contenido del arreglo
listadeCompras.push("Mantequilla")
//Lo que NO se puede es reasignar la referencia
console.log(listadeCompras)

//Usar let solo si se va a reemplazar el arreglo completo
let numeros = [1,2,3,22,11]
numeros = [4,5,6,18,77]
console.log(numeros)

//Indice
console.log(mezcla[1]);
//Si accedemos a un elemento que no existe, nos entrega un undefined
console.log(mezcla[78]);
//Cuantos elementos tenemos
console.log(mezcla.length);
//Acceder al ultimo elemento
console.log(mezcla[mezcla.length - 1]);

const frutas = ["Manzana", "Pera", "Durazno", "Uva", "Sandia"]

for(let i = 0; i < frutas.length; i++){
    console.log("Indice: " + i + " Valor: " + frutas[i])
}

frutas.unshift("Fresa") //Agrega al inicio de mi arreglo
frutas.unshift("Cereza")
console.log(frutas)

frutas.shift() //Elimina el primer elemento del arreglo
console.log(frutas)

frutas.pop() //Elimina el ultimo elemento del arreglo
console.log(frutas)

const usuarios = [
    {id: 1, nombre: "Ariel"},
    {id: 2, nombre: "Maria"},
    {id: 3, nombre: "Juan"},
    {id: 4, nombre: "Luisa"},
]

//El metodo find() sirve para encontrar ek+l primer elemento que cumpla una condicion
//Usarlo cuando necesitamos una sola cosa
const encontrado = usuarios.find((u) => u.id === 2)
console.log(encontrado)

//El metodo filter() crea un arreglo con los elementos que cumplen una condicion
//No modifica el arreglo original
const pares = numeros.filter((n) => n % 2 === 0)
console.log("Original: " , numeros)
console.log("Copia de Pares: " , pares)

//El metodo map() crea un nuevo arreglo pero con el resultado de la funcion

const precios = [100, 200, 300, 600, 400]
const preciosconIVA = precios.map((p) => {
    const iva = p * 0.16;
    const total = p + iva;
    return total; //Esto se guarda en el nuevo arreglo
});

console.log("Originales: ", precios)
console.log("Con IVA: ", preciosconIVA)

//El metodo foreach() NO es para construir un nuevo arreglo, es para ejecutar una funcion por cada elemento del arreglo
const apellidos = ["Gomez", "Perez", "Lopez"]

apellidos.forEach((apellido, index)=> {
    console.log("Posicion " , index , " Apellido: " , apellido)
})

//El metodo some() nos va a decir si existe AL MENOS un elemento que cumpla con la condicion
const preciosNuevos = apellidos.some((p) => p === "Lopez");
console.log(preciosNuevos)

//El metodo every() es si todos cumplen
//El method sort() ordena...