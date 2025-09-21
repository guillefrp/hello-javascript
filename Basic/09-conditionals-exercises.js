/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

const numero = 8;

if (numero == 8) {
  console.log("Guille");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

const usuario = "Guille";
const contrasenia = 1234;

if (usuario == "Guille" && contrasenia == 1234) {
  console.log("La contraseña coincide con lo establecido :)");
} else {
  console.log(
    "La contraseña NO coincide con lo establecido, inténtelo otra vez"
  );
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

const num = 4;

if (num > 0) {
  console.log("Es positivo");
} else if (num < 0) {
  console.log("Es negativo");
} else if (num == 0) {
  console.log("Es igual a 0");
} else {
  console.log(
    "Datos incorrectos, porfavor introduzca un número positivo, negativo o 0"
  );
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

const edad = 16;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else if (edad < 18) {
  console.log(
    "Es menor de edad, le faltan " + (18 - edad) + " años para poder votar"
  );
} else {
  console.log("Datos incorrectos, porfavor introduzca una edad de 0 a 100");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

const mes = "septiembre";

switch (mes) {
  case "enero":
  case "febrero":
  case "marzo":
    console.log("Estamos en invierno");
    break;
  case "abril":
  case "mayo":
  case "junio":
    console.log("Estamos en primavera");
    break;
  case "julio":
  case "agosto":
  case "septiembre":
    console.log("Estamos en verano");
    break;
  case "octubre":
  case "noviembre":
  case "diciembre":
    console.log("Estamos en otoño");
    break;
  default:
    console.log("Mes incorrecto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

switch (mesDias) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("Este mes tiene 31 días");
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("Este mes tiene 30 días");
    break;
  case "febrero":
    console.log("Este mes tiene 28 o 29 días");
    break;
  default:
    console.log("Mes incorrecto");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

const idioma = "es";

switch (idioma) {
  case "es":
    console.log("Hola");
    break;
  case "en":
    console.log("Hello");
    break;
  case "fr":
    console.log("Bonjour");
    break;
  default:
    console.log("Idioma no soportado");
}