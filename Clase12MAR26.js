//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Encadenamiento de metodos
const resultado = productos
//filter
.filter(producto => producto.precio < 100) //Productos que cuesten menos de 100
//Sort
.sort((a, b) => a.nombre.localeCompare(b.nombre)) //LocalCompare compara string 
//map
.map(producto => producto.nombre); //Devuelve solo el nombre del producto

console.log("Resultados de usar los metodos Filter, Sort, y Map");
console.log(resultado); 