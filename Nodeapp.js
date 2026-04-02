//Node.js modulo llamado fs files System, o sistema de archivo

// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = './ejemplo.txt'; //Vemos la ruta

if (fs.existsSync(filePath)) { //Indica que nuestra funcion es sincrona
  console.log('El archivo existe.');
} else {
  console.log('El archivo no existe.');
}

//Leer el contenido
fs.readFile('./Ejemplo.txt', 'utf8', (error, contenido) => {
    if(error){
        console.error('Ocurio un error al leer el archivo:', error);
        return; //Con return detenemos esta funcion
    }

    //Si no existio ningun error
    console.log('---Contenido del archivo---')
    console.log(contenido);

})