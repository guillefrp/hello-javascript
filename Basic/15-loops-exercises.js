/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 0; i <= 100; i++) {
  suma += i;
}

console.log("Suma: " + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let num = 2;
while (num <= 50) {
  console.log(num);
  num += 2;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = new Array("Pepe", "Juan", "Lucas", "Carlos");

nombres.forEach((nombreActual) => {
  console.log(nombreActual);
});

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadenaTexto = "HOLA, soy Guille";
let vocales = 0;

cadenaTexto = cadenaTexto.toLowerCase();

for (let i = 0; i < cadenaTexto.length; i++) {
  if (
    cadenaTexto[i] == "a" ||
    cadenaTexto[i] == "e" ||
    cadenaTexto[i] == "i" ||
    cadenaTexto[i] == "o" ||
    cadenaTexto[i] == "u"
  ) {
    vocales++;
  }
}

console.log("Vocales: " + vocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = new Array(1, 2, 3);
let producto = 1;

numeros.forEach((numeroActual) => {
  producto *= numeroActual;
});

console.log("Producto: " + producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaTexto2 = "Hola, soy Guille";
let cadenaTextoInvertida = "";

for (let i = cadenaTexto2.length - 1; i >= 0; i--) {
  cadenaTextoInvertida += cadenaTexto2[i];
}

console.log(cadenaTextoInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
  let siguiente = a + b;
  console.log(siguiente);
  a = b;
  b = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros2 = new Array(13, 9, 22, 12, 15);
let numerosMayores10 = [];

numeros2.forEach((numeroActual) => {
  if (numeroActual > 10) {
    numerosMayores10.push(numeroActual);
  }
});

console.log(numerosMayores10);
