/**
 * EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
 * calcular cual número es el mayor y devolverlo
 */
function calcularNumero(){
    let numero1 = parseInt(document.getElementById('n1').value);
    let numero2 = parseInt(document.getElementById('n2').value);
    if (numero1 > numero2) {
        alert(`el numero `+numero1+` es mayor que `+numero2);
    }else if (numero1 < numero2) {
        alert(`el numero `+numero2+` es mayor que `+numero1);
    }else if (numero1 === numero2) {
        alert(`el numero `+numero1+` y el numero `+numero2+` son iguales`);
    }
    console.log(calcularNumero);
}