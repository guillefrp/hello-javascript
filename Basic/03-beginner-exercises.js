/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Esto es un comentario en una línea:)

// 2. Escribe un comentario en varias líneas

/*
    Esto es un comentario
    en varias líneas:)
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//Strings
let cadenaTexto = "Hola JS";

//Numbers
let entero = 2;
let decimal = 2.5;

//Booleanos
let esVerdadero = true;
let esFalso = false;

//Undefined
let undefinedValue = undefined;

//Null
let nullValue = null;

//Symbol
let mySymbol = Symbol("my-symbol");

//Big Int
let bigInt = BigInt(2311231223213445213213123231);

// 4. Imprime por consola el valor de todas las variables

console.log(cadenaTexto);
console.log(entero);
console.log(decimal);
console.log(esVerdadero);
console.log(esFalso);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof cadenaTexto);
console.log(typeof entero);
console.log(typeof decimal);
console.log(typeof esVerdadero);
console.log(typeof esFalso);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadenaTexto = "Hola, soy Guille";
entero = 3;
decimal = 3.5;
esVerdadero = false;
esFalso = true;
undefinedValue = null;
nullValue = undefined;
mySymbol = Symbol("my-other-symbol");
bigInt = BigInt(234567219281379281321892321);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadenaTexto = 4;
entero = "Holaa";
decimal = 3;
esVerdadero = null;
esFalso = undefinedValue;
undefinedValue = false;
nullValue = true;
mySymbol = "Hola?";
bigInt = 4.3;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const cadenaTexto2 = "Hola JS";
const entero2 = 2;
const decimal2 = 2.5;
const esVerdadero2 = true;
const esFalso2 = false;
const undefinedValue2 = undefined;
const nullValue2 = null;
const mySymbol2 = Symbol("my-symbol");

// 9. A continuación, modifica los valores de las constantes

cadenaTexto2
entero2 = 3;
decimal2 = 3.5;
esVerdadero2 = false;
esFalso2 = true;
undefinedValue2 = null;
nullValue2 = undefined;
mySymbol2 = Symbol("my-other-symbol");

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// cadenaTexto2
// entero2 = 3;
// decimal2 = 3.5;
// esVerdadero2 = false;
// esFalso2 = true;
// undefinedValue2 = null;
// nullValue2 = undefined;
// mySymbol2 = Symbol("my-other-symbol");