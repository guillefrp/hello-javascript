/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

console.log("Hola, " + "JS!");

// 2. Muestra la longitud de una cadena de texto

let cadena = "Hola, JS!";
console.log("Longitud cadena: " + cadena.length);

// 3. Muestra el primer y último carácter de un string

console.log("Primer carácter: " + cadena[0]);
console.log("Último carácter: " + cadena[cadena.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log("Mayúsculas: " + cadena.toUpperCase());
console.log("Minúsculas: " + cadena.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

console.log(`Hola 
   JS, esto es una cadena 
   en varias líneas`);

// 6. Interpola el valor de una variable en un string

console.log(`Holaaa, ${cadena}!`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let cadena2 = "Hola js mi nombre es Guille";
console.log(cadena2.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena2.includes("Guille"));

// 9. Comprueba si dos strings son iguales

console.log(cadena == cadena2);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena.length == cadena2.length);
