//Ejemplo 1
console.log("Hola mundo");

//Ejemplo 2
var nombre = "Martin";
console.log("Hola " + nombre);

//Ejemplo 3
var nombre = window.prompt("Introduce tu nombre: ");
console.log("Hola " + nombre);

//Ejemplo 4
var edad = window.prompt("Introduce tu edad: ");
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}

//Ejemplo 5
//Definicion de variables: let, var, const. 
//const: constante (su valor no varía)
//let: ambito de bloque
//var: ambito de funcion

function calcula_edad() {
    const edad2 = window.prompt("Introduce tu edad: ");
    if (edad2 >= 18) {
        let mensaje = "Eres mayor de edad";
        console.log(mensaje);
    } else {
        let mensaje = "Eres menor de edad";
        console.log(mensaje);
    }
}

calcula_edad(); 

//Ejemplo 6
let auxiliar; 
auxiliar = 10; 
console.log(auxiliar);

auxiliar = "Mi casa es roja";
console.log(auxiliar);

auxiliar = true;
console.log(auxiliar);

auxiliar = 14432.12; 
console.log(auxiliar); 

//Ejemplo 7: Primer bucle
function potencia(base, exponente){
    let result = 1; 

    while(exponente > 0){
        result *= base; 
        exponente --;
    }

    return result; 
}

let base = 2;
let exponente = 3; 

console.log(`El resultado de ${base} elevado ${exponente} es:${potencia(base, exponente)}`)