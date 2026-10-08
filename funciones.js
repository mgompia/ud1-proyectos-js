//Funciones efinitivas
//Convertir texto a num entero
let numero = parseInt("25");
console.log(numero);

let edad = parseInt("20 años");
console.log(edad);

//Convertir texto a num decimal
let precio = parseFloat("15.50");
console.log(precio);

//Convertir valor a num
let num = Number("50");
console.log(numero);

//Convertir valor a texto 
let edad2 = 20;
let texto = String(edad2);

console.log(texto);

//Comprueba si un valor NO es un número válido.
console.log(isNaN(25));

//Redondea un número.
let numero3 = 4.7;
console.log(Math.round(numero3));

//Redondea siempre hacia abajo.
console.log(Math.floor(4.9));

//Redondea siempre hacia arriba.
console.log(Math.ceil(4.1));

//Genera un número aleatorio entre 0 y 1.
let numero4 = Math.random();
console.log(numero4);

//Para generar un número entre 1 y 10:
let numero5 = Math.floor(Math.random() * 10) + 1;
console.log(numero5);


//Funciones definidas por el programador
//Ejemplo básico
function saludar() {
    console.log("Hola mundo");
}

saludar();

//Funciones con parámetros
function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Americano");

//Otro ejemplo
function sumar(a, b) {
    console.log(a + b);
}

sumar(5, 3);

//Funciones que devuelven un valor
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);

console.log(resultado);

//Funciones con varios parámetros
function calcularPrecio(precio, cantidad) {
    return precio * cantidad;
}

let total = calcularPrecio(5, 4);

console.log(total);

//Parámetros con valores por defecto
function saludar(nombre = "Invitado") {
    console.log("Hola " + nombre);
}

saludar();

//Funciones con condiciones
function comprobarEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "Eres menor de edad";
    }
}

console.log(comprobarEdad(20));

//Funciones con bucles
function mostrarNumeros() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

mostrarNumeros();

//Expresiones de función
const sumar = function(a, b) {
    return a + b;
};

console.log(sumar(4, 6));