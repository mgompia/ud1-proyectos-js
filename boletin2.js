//Ejercicio 1
//Introduce un numero de segundos.
//Introduce un mensaje
//Dicho mensaje debe aparecer por alert transcurrido esos segundos.
function ejercicio1() {
    let segundos = Number(prompt("Introduce un número de segundos: "));
    let mensaje = prompt("Introduce un mensaje: ");

    setTimeout(() => {
        alert(mensaje);
    }, segundos * 1000);
}
ejercicio1();

function ejercicio1ej2() {
    const segundos = parseInt(window.prompt("Introduce los segundos"));
    const mensaje = window.prompt("Introduce un mensaje");
    setTimeout(() => window.alert(mensaje), segundos * 1000);
}

//Ejercicio 2
//Modifica el ejercicio anterior para que mientras muestra el
//mensaje se muestre por consola la cuenta atrás antes de
//pintarse el mensaje
function ejercicio2() {
    const segundos = parseInt(window.prompt("Introduce los segundos"));
    const mensaje = window.prompt("Introduce un mensaje");

    let cuentaAtras = segundos;

    const intervalo = setInterval(() => {
        console.log(cuentaAtras);
        cuentaAtras--;

        if (cuentaAtras < 0) {
            clearInterval(intervalo);
            window.alert(mensaje);
        }
    }, 1000);
}

function ejercicio2ej2() {
    const segundos = parseInt(window.prompt("Introduce los segundos"));
    const mensaje = window.prompt("Introduce un mensaje");
    setTimeout(() => window.alert(mensaje), segundos * 1000);
}

//Ejercicio 3
//Pide por prompt una URL y redirige la página a la misma
function ejercicio3(){
    const url = window.prompt("Introduce una URL");
    window.location.href = url; 
}
//Ejercicio 4
//Muestra un menú con variad opciones
//a. Ir atrtás
//b. Ir hacia delante
//c. Ir a una direccion (entonces la solicitará)
//d. Mostrar la direccion actual
//e. Actualizar página
//f. No hacer nada. Salir. 

//Ejercicio 5
//Al cargar la pagina consulta el nombre de usuario
//almacenado en el localStorage. si existe saluda si no lo pide

//Ejercicio 6
//Contador de recargas. Cada vez que el usuario abra la página,
//acceda o actualice debe incrementar el numero de visitas 