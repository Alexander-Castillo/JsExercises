// EJERCICIO 7:
// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// • La cantidad de valores negativos ingresados.
// • La cantidad de valores positivos ingresados.
// • La cantidad de múltiplos de 15.
// • El valor acumulado de los números ingresados que son pares.
function determinarNumerosEnteros() {
    // leer los datos mandados desde el navegador
let secuencia = document.getElementById('cargarValores').value;
console.log(secuencia);
// convertir los datos en un array y pasamos todo el arreglo a numeros
let arregloDeSecuencia = secuencia.split(",").map(Number);
console.log(arregloDeSecuencia);
let valoresNegativos = 0;
let valoresPositivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;
// validamos que se ingresen solo 10 numeros enteros y que sean valores numericos
if (arregloDeSecuencia !== 10 || arregloDeSecuencia.some(isNaN)) {
    document.getElementById('resultado07').innerHTML = "<p>Por favor, ingrese 10 valores enteros válidos.</p>";
    //return; eb teoria deberia funcionar con esta validacion pero no se en que me equivoque
}
arregloDeSecuencia.forEach(numero => {
    if (numero < 0) {
        valoresNegativos++;
    } else if(numero > 0){
        valoresPositivos++;
    }
    if (numero % 15 === 0) {
        multiplosDe15++;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    }
});
let resultado = `<h3>Cantidad de valores negativos = ${valoresNegativos}</h3>
    <h3>Cantidad de valores positivos = ${valoresPositivos}</h3>
    <h3>Cantidad de valores multiplos de 15 = ${multiplosDe15}</h3>
    <h3>Cantidad de valores multiplos de 15 = ${sumaPares}</h3>`;
    document.getElementById('resultado07').innerHTML = resultado;
}