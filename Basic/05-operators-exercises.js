/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 5;
let b = 10;

const suma = a + b;
const resta = a - b;
const multiplicacion = a * b;
const division = a / b;
const modulo = a % b;
const exponente = a ** b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let sumaAsignacion = 0;
sumaAsignacion += suma;

let restaAsignacion = 0;
restaAsignacion -= resta;

let multiplicacionAsignacion = 1;
multiplicacionAsignacion *= multiplicacion;

let divisionAsignacion = 1;
divisionAsignacion /= division;

let moduloAsignacion = 0;
moduloAsignacion %= modulo;

let exponenteAsignacion = 1;
exponenteAsignacion **= exponente;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a < b);
console.log(b > a);
console.log(a != b);
console.log(b != a);
console.log(a == 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b);
console.log(b < a);
console.log(a == b);
console.log(b == a);
console.log(a != 5);

// 5. Utiliza el operador lógico and

console.log(a > 0 && b > 0);

// 6. Utiliza el operador lógico or

console.log(a > 0 || b > 0);

// 7. Combina ambos operadores lógicos

console.log((a > 0 && b > 0) || (a < 0 && b < 0));

// 8. Añade alguna negación

console.log((a > 0 && b > 0) || (a < 0 && b < 0) || a != 4);

// 9. Utiliza el operador ternario

const semaforo = "Verde";

semaforo == "Verde" ? console.log("Puede pasar") : console.log("No puede pasar");


// 10. Combina operadores aritméticos, de comparáción y lógicas


semaforo == "Rojo" && suma == 5 || b == 15 ? console.log("Puede pasar") : console.log("No puede pasar");