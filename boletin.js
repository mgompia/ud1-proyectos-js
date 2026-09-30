//Boletin de repaso ejercicios
// 7 Intercambio de valores. Declara dos variables a y b e intercambia sus valores.
// Muestra el resultado antes y después del intercambio.

function ejemplo7(){
    let a = parseInt(window.prompt("Introduce un número"));
    let b = parseInt(window.prompt("Introduce un número"));
    let varIntermedioA = a; 
    let varIntermedioB = b; 

    if(a != null || b != null){
        a = varIntermedioB; 
        b = varIntermedioA; 
        console.log("La variable a tiene el valor de: " + a + " y la variable b tiene el valor de: " + b);
    }else{
        console.log("La varible no tiene valor"); 
    }
}

//ejemplo7(); 


//================================================================================================================
//================================================================================================================
// 8 Mayor de edad. Dada una edad, indica mediante un mensaje si la persona es
// mayor o menor de edad.

function ejemplo8(){
    let edad = parseInt(window.prompt("Introduce tu edad"));
    
    if(edad < 0 || edad > 150){
        console.log("Es imposible que tengas esa edad monstro");
    }else{
        if(edad > 17){
            console.log("Eres mayor de edad enhorabuena");
        }else{
            console.log("Eres menor de edad");
        }
    }
}

//ejemplo8(); 

//================================================================================================================
//================================================================================================================
// 9 Número positivo, negativo o cero. Dado un número, indica si es positivo,
// negativo o igual a cero.

function ejemplo9(){
    let num = parseInt(window.prompt("Introduce un número (negativo o positivo)"));

    if(num > 0){
        console.log("El número que has introducido es positivo");
    }else if(num < 0){
        console.log("El número que has insertado es negativo");
    }else if(num == 0){
        console.log("El número es 0"); 
    }
}

//ejemplo9();

//================================================================================================================
//================================================================================================================
// 10 Número mayor. Dados dos números, muestra cuál de ellos es mayor o indica si
// son iguales.

function ejemplo10(){
    let num1 = parseInt(window.prompt("Introduce un número"));
    let num2 = parseInt(window.prompt("Introduce un número"));

    if(num1 > num2){
        console.log("El primer numero que has insertado que es " + num1 + " es mayor al segundo numero que es " + num2 ); 
    }else if(num1 < num2){
        console.log("El segundo numero que has insertado que es " + num2 + " es mayor al primer numero que es " + num1 );
    }else if(num1 == num2){
        console.log("Los dos numeros son iguales, num1 " + num1 + " num2 " + num2);
    }
}

//ejemplo10(); 

//================================================================================================================
//================================================================================================================
// 11  Calificación. Dada una nota entre 0 y 10, muestra si corresponde a un suspenso,
// aprobado, notable o sobresaliente.

function ejemplo11(){
    let nota = parseInt(window.prompt("Introduce tu nota (0-10)"));

    if(nota >= 0 || nota <= 10){
        if(nota >= 0 && nota <= 4){
            console.log("Estas suspenso");
        }else if(nota >= 5 && nota <= 6){
            console.log("Estas aprobado");
        }else if(nota >= 7 && nota <= 8){
            console.log("Estas notable");
        }else if(nota >= 9 && nota <= 10){
            console.log("Estas sobresaliente");
        }

    }else{
        console.log("Esa nota no la puedes tener");
    }

}

ejemplo11();