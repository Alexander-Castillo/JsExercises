/**
 * EJERCICIO 5:Realizar una función para una tienda de coches en donde se deberá calcular:
    Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
    coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
    el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
    aplicara en base a lo que selecciono el usuario
 */
function calcularPrecioFord() {
    let seleccionFord = document.getElementById('vehiculo').value;
    let valorFord;
    let descuentoFord;
    let precioFinal;
    switch (seleccionFord) {
        case "1":
            valorFord = 45000;
            descuentoFord = 0.2;
            precioFinal = valorFord-(valorFord*descuentoFord);
            Swal.fire(`Su seleccion fue el FORD SCAPE con valor de $${valorFord}.00 con un descuento del 20% precio final es $${precioFinal.toFixed(2)}`);
            // alert();
            break;
        case "2":
            valorFord = 37460;
            descuentoFord = 0.1;
            precioFinal = valorFord-(valorFord*descuentoFord);
            Swal.fire(`Su seleccion fue el FORD FOCUS con valor de $${valorFord}.00 con un descuento del 10% precio final es $${precioFinal.toFixed(2)}`);
            break;
        case "3":
            valorFord = 32106;
            descuentoFord = 0.05;
            precioFinal = valorFord-(valorFord*descuentoFord);
            Swal.fire(`Su seleccion fue el FORD FIESTA con valor de $${valorFord}.00 con un descuento del 05% precio final es $${precioFinal.toFixed(2)}`);
            break;
        default:
            alert(`Seleccione una opcion valida`);
            break;
    }
}