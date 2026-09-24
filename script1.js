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
    //const edad2 = window.prompt("Introduce tu edad: ");
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

function calculadora() {
    let num1 = parseInt(window.prompt("Introduce el primer operando: "));
    let num2 = parseInt(window.prompt("Introduce el segundo operando: "));

    let salir = false;
    let resultado;

    do {
        let opc = window.prompt("Elija una operacion: \n" +
            "a. Suma \n" +
            "b. Resta \n" +
            "c. Multiplicación \n" +
            "d. División \n" +
            "e. Potencia \n" +
            "f. Salir");

        switch (opc) {
            case 'a':
                resultado = num1 + num2;
                console.log(resultado);
                break;
            case 'b':
                resultado = num1 - num2;
                console.log(resultado);
                break;
            case 'c':
                resultado = num1 * num2;
                console.log(resultado);
                break;
            case 'd':
                //Validar division por 0
                if (num2 == 0) {
                    console.error("No se puede dividir por 0");
                } else {
                    resultado = num1 / num2;
                }
                console.log(resultado);
                break;
            case 'e':
                resultado = potencia(num1, num2);
                console.log(resultado);
                break;
            case 'f':
                salir = true;
                break;
            default:
                console.error("Introduce un valor correcto");
                break;

        }

    } while (!salir);
}

//console.log(calculadora());

//==============================================================================================
//==============================================================================================
//Ejemplo ternario
function ejemplo11() {
    let precio = 150;
    console.log("Precio original: " + precio);

    let edad = window.prompt("Introduce tu edad");

    //if(edad > 18){
    //    precio = precio*0.80;
    //}else{
    //    precio = precio*0.75;
    //}

    //variable = condicion ? caso_true : caso_false;
    precio = edad > 18 ? precio * 0.80 : precio * 0.75;

    console.log("El precio tras el descuentp es " + precio);
}


//==============================================================================================
//==============================================================================================
//Ejemplo 12: Pide el precio del producto por pantalla. Si es superior a 50 euros
//el envio sale gratis, Si no 5€, el sistema debe mostrar al principio el precio
//original y al final el precio total. 

function ejemplo12() {
    let precio = parseInt(window.prompt("Introduce el precio del producto: "));
    let envio = 0;

    envio = (precio > 50) ? envio : envio + 5;

    let precioTotal = precio + envio;

    console.log("El envio del producto costará " + envio + ". La suma de el precio del producto y el envio es de " + precioTotal);
}

//ejemplo12();

//==============================================================================================
//==============================================================================================
//Ejemplo 13: Crea un programa que calcule un número aleatorio y pida
//al usuario números hasta que lo acierte. Al finalizar, si el numero de intentos es
//superior a la 10 pintará por pantalla has perdido y has ganado si es inferior.

function ejemplo13() {
    let numAleatorio = Math.floor(Math.random() * 100 + 1);
    let numUsuario = 0;
    let numIntentos = 0;

    console.log(numAleatorio);

    do {
        numUsuario = window.prompt("Escribe un número para acertar.")

        if (numUsuario == numAleatorio) {
            console.log("Has ganado");
            break;
        } else {
            numIntentos++;
            console.log("Has fallado un intento de 10 llevas " + numIntentos);
        }

        if (numIntentos == 10) {
            console.log("Has perdido"); 1
        }

        if (numIntentos > 14) {
            console.log("Se acabaron los intentos");
            break;
        }


    } while (numIntentos < 151 || numUsuario == numAleatorio);


}

// ejemplo13(); 


//==============================================================================================
//==============================================================================================
//Ejemplo 14: Pide  números hasta introducir el 0 y pinta por pantalla, el menor
//el mayor y la media 
function ejemplo14() {
    let numeros;
    let contador = 0;
    let sumaNumeros = 0;
    let numMenor = Infinity;
    let numMayor = -Infinity;
    let media;

    do {
        numeros = parseInt(window.prompt("Introduce un número cuando sea 0 se acaba")); 

        if (numeros != 0) {
            if (numeros > numMayor) {
                numMayor = numeros;
            } 
            if (numeros < numMenor) {
                numMenor = numeros;
            }

            sumaNumeros = sumaNumeros + numeros;
            contador++;
        } else {
            console.log("Has introducido el 0")
            break;
        }


    } while (numeros != 0);

    if (contador > 0) {
        media = sumaNumeros / contador;
        console.log("El numero mayor de la lista de números es " + numMayor + " el numero menor es "
            + numMenor + " y la media es de " + media
        )
    }

}

//ejemplo14();


//==============================================================================================
//==============================================================================================
//Ejemplo 15: Pide una nota numérica y muestra por pantalla si es Suspenso (0-5),
//, suficiente (5-6), bien (7-8), sobresaliente (9-10).
function ejemplo15(){
    let nota = window.prompt("Pon la nota que has sacado entre [0-10]");
    let tipo;

    if(nota >= 0 && nota<= 10){
        if(nota >= 0 && nota <= 4){
            tipo = "Suspenso"; 
        }else if(nota >= 5 && nota <= 6){
            tipo = "Suficiente"; 
        }else if(nota >= 7 && nota <= 8){
            tipo = "Bien"; 
        }else if(nota >= 9 && nota <= 10){
            tipo = "Sobresaliente"; 
        }

        console.log("Tu nota es un " + nota + " eso significa que tu nota es " + tipo);
    }else{
        console.log("Pon una nota que este entre el [0-10]")
    }
}

ejemplo15(); 

//==============================================================================================
//==============================================================================================
//Ejemplo 16: Pide un número por pantalla y muestra el número de digitos que tiene

//==============================================================================================
//==============================================================================================
//Ejemplo 17: Calcula el factorial de un número solicitado por pantalla
//siempre y cuando este numero sea positivo y par.

//==============================================================================================
//==============================================================================================
//Ejemplo 18: Pide un número por pantalla e imprimelo invertido.

//==============================================================================================
//==============================================================================================
//Ejemplo 19: Muestra todos los divisores de un numero solicitado por pantalla

//==============================================================================================
//==============================================================================================
//Ejemplo 20: Numero perfecto: Pide un numero y determina si es perfecto.
//Un numero es perfecto cuando la suma de sus divisores sea igual al propio numero. 