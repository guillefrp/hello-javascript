/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = new Array(5);
animales[0] = "Perro";
animales[1] = "Gato";
animales[2] = "Caballo";
animales[3] = "León";
animales[4] = "Elefante";
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.push("Gallina");
animales.unshift("Ratón");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

let setLibros = new Set([
  "Libro 1",
  "Libro 2",
  "Libro 3",
  "Libro 4",
  "Libro 5",
]);
console.log(setLibros);

// 5. Añade dos más. Uno de ellos repetido

setLibros.add("Libro 6");
setLibros.add("Libro 6");
console.log(setLibros);

// 6. Elimina uno concreto a tu elección

setLibros.delete("Libro 3");
console.log(setLibros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapaMeses = new Map([["11", "Noviembre"]]);
console.log(mapaMeses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log("¿Existe el mes 5? --> " + mapaMeses.has("5"));
console.log(mapaMeses.get("5"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapaMeses.set("Verano", ["Junio", "Julio", "Agosto"]);
console.log(mapaMeses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = new Array(1, 2, 3, 4, 5);
let set = new Set(array);
let map = new Map([["Set", set]]);
console.log(map);