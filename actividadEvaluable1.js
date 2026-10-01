//Tenemos que hacer la siguiente actividsad:
//Pedir al usuario el precio de un producto, pedir la cantidad de unidades, 
//calcular el importe de compra, aplicar un descuento segun el importe:
//Menos de 50€ = sin descuento
//Entre 50€ y 99,99€ = 5%
//Entre 100€ y 199,99€ = 10%
//200€ o más = 15%
//Hay que calcular el iva del 21% sobre el precio despues del descuento
//Al acabar debe de preguntar si desea realizar otra operación. 
//Si se indica que si volver a realizar todo si no terminar y salir. 
//Al salir debe de mostrar un último mensaje por consola indicando el numero de operaciones realizadas, 
//el gasto total, el gasto medio, el mayor y el menor. 
function calcularIva(base) {
    return base * 0.21;
}
function gestionCompras() {
    let precio = 0;
    let cantidad = 0;
    let importe = 0;
    let descuento = 0;
    let precioTotal = 0;
    let precioFinal = 0;
    let decision = 0;
    let iva = 0;
    let salir = false;
    let contador = 0; 
    let operacion = 0; 

    do {

        precio = parseInt(window.prompt("Escribe el precio del producto"));
        cantidad = parseInt(window.prompt("Escribe la cantidad de productos que desea comprar"));
        importe = precio * cantidad;
        operacion++; 
        console.log(importe);

        if (importe > 0) {
            if (importe >= 200) {
                descuento = importe * 0.15;
            } else if (importe >= 100 || importe <= 199.99) {
                descuento = importe * 0.10;
            } else if (importe >= 50 || importe <= 99.99) {
                descuento = importe * 0.05;
            }
            precioTotal = importe - descuento;
            operacion++; 
        } else {
            console.log("El importe debe ser mayor a 0");
        }

        if (precioTotal > 0) {
            iva = calcularIva(precioTotal);
            precioFinal = precioTotal + iva;
            operacion++; 
        }



        decision = window.prompt("Si deseas salir escribe 1 si deseas poner otro producto escriba 2");
        if (decision == 1) {
            salir = true;
        }

        contador++; 

    } while (!salir);

    console.log(precio);
    console.log(cantidad);
    console.log(importe);
    console.log(descuento);
    console.log(precioTotal);
    console.log(iva);
    console.log(precioFinal);
    console.log(decision);
    console.log(salir);
    console.log(contador);

    console.log("Se han realizado " + contador + " compras, se han realizado " + operacion + " operaciones")

}

gestionCompras();

