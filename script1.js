//Ejemplo 1
function ejemplo1() {
    console.log("Hola mundo");
}
//ejemplo1();


//==============================================================================================
//==============================================================================================
//Ejemplo 2
function ejemplo2() {
    var nombre = "Martin";
    console.log("Hola " + nombre);
}
//ejemplo2();


//==============================================================================================
//==============================================================================================
//Ejemplo 3
function ejemplo3() {
    var nombre = window.prompt("Introduce tu nombre: ");
    console.log("Hola " + nombre);
}
//ejemplo3();


//==============================================================================================
//==============================================================================================
//Ejemplo 4
function ejemplo4() {
    var edad = window.prompt("Introduce tu edad: ");
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("No eres mayor de edad");
    }
}
//ejemplo4();


//==============================================================================================
//==============================================================================================
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
//calcula_edad();


//==============================================================================================
//==============================================================================================
//Ejemplo 6
let auxiliar;
auxiliar = 10;
//console.log(auxiliar);

auxiliar = "Mi casa es roja";
//console.log(auxiliar);

auxiliar = true;
//console.log(auxiliar);

auxiliar = 14432.12;
//console.log(auxiliar);


//==============================================================================================
//==============================================================================================
//Ejemplo 7: Primer bucle
function potencia(base, exponente) {
    let result = 1;

    while (exponente > 0) {
        result *= base;
        exponente--;
    }

    return result;
}

let base = 2;
let exponente = 3;

//console.log(`El resultado de ${base} elevado ${exponente} es:${potencia(base, exponente)}`)


//==============================================================================================
//==============================================================================================
//Ejemplo 8: Mas bucles, solicita numero y muestra el acumulado de 10 en 10. 
function suma_diez(num_vueltas) {
    let result = 0;

    for (let i = 0; i < num_vueltas; i++) {
        result += 10; //reuslt = result + 10; 
    }

    return result;
}

//console.log("Ejercicio 8: " + suma_diez(50));


//==============================================================================================
//==============================================================================================
//Ejemplo 9: Mas bucles, solicita numero y muestra el acumulado de 10 en 10. 
//error si introduces un numero negativo
function suma_diez_v2(num_vueltas) {
    let result = 0;

    if (num_vueltas < 0) {
        console.error("El numero de vueltas debe de ser positivo");
    } else {
        for (let i = 0; i < num_vueltas; i++) {
            result += 10; //reuslt = result + 10; 
        }
    }


    return result;
}

//console.log("Ejercicio 8: " + suma_diez_v2(-50));


//==============================================================================================
//==============================================================================================
//Ejemplo 10: Calculadora. Pide dos numeros y muestra un menu para que los
//sume, reste, multiplique o divida segun la opción marcada. Valida los datos.

