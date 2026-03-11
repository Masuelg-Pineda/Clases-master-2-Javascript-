// Crea arreglo vacío
let listaDeCompras = [];

// Función que agrega productos
const agregarProducto = (producto) => {

    const existe = listaDeCompras.some(
        item => item.toLowerCase() === producto.toLowerCase() //toLowerCase() para evitar problemas con mayusculas y minusculas, se busco en internet
    );

    if (!existe) { //Esta función nos ayuda a evitar duplicados, se busco en internet
        listaDeCompras.push(producto);
        console.log("Se agrega un producto a la lista: " + producto);
    } else {
        console.log("El producto ya está en la lista. No se puede agregar");
    }
};

// Función que elimina productos
const eliminarProducto = (producto) => {

    const nuevaLista = listaDeCompras.filter(
        item => item.toLowerCase() !== producto.toLowerCase()
    );

    if (nuevaLista.length !== listaDeCompras.length) {
        listaDeCompras = nuevaLista;
        console.log("Producto eliminado de la lista.");
    } else {
        console.log("El producto", producto, "no está en la lista");
    }
};

// Función para mostrar la lista
const mostrarLista = () => {

    console.log("Esta es nuestra lista de compras:");

    listaDeCompras.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
};


// PRUEBAS
agregarProducto("Leche");
agregarProducto("Dulces");
agregarProducto("Pan");
agregarProducto("Leche"); // Ejemplo de duplicado
eliminarProducto("Huevos"); // Ejemplo que no existe
eliminarProducto("Pan");

mostrarLista();