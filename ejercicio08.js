/**
 * EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar 
del 1 al 10 del número ingresado
por el usuario.
 */
function tablaDeMultiplicar() {
    // obtenemos los datos del input y lo convertimos a entero
    let multiplo = parseInt(document.getElementById('tablaMultiplicar').value); 
    console.log(multiplo);
    // constante para leer los datos del div donde se mostrara la tabla
    const contenedorTabla = document.getElementById('resultado08');
    contenedorTabla.innerHTML = "";
    //declaramos la variable para crear la tabla
    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-striped", "text-center");
    const cuerpo = tabla.createTBody();

    for (let i = 1; i <= 10; i++) {
        const resultado = i * multiplo;
        console.log(resultado);
        // variables para crear filas y celdas
        const fila = cuerpo.insertRow();
        const celdaNumero = fila.insertCell();
        const celdaResultado = fila.insertCell();
        // ingresar los datos
        celdaNumero.textContent = i;
        celdaResultado.textContent = `${multiplo} * ${i} = ${resultado}`;
    }
    // imprimimos los datos
    let mensaje = `<h3>Tabla del = ${multiplo}</h3>`;
    document.getElementById('resultado08').innerHTML = mensaje;

    contenedorTabla.appendChild(tabla);

}