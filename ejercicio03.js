/**
 *    CATEGORIA    AUMENTO
 *        A         15%
 *        B         30%
 *        C         10%
 *        D         20%
 *  Calcular el aumento de trabajador tomando en cuenta la tabla
 *  de categorías de aumento.
 *  Para este ejercicio deberá de asignar las siguientes 
 *  variables: nombre, salario, categoría y aumento. Deberá 
 *  demostrar los datos del empleado y el aumento salarial.
 */
//declaro variable constante del tbody de la tabla
const bodyEmpleado = document.querySelector('#tabla_empleado tbody');
// function para calcular el aumento salarial del empleado
function calcularAumentoSalarial(){
    //declaramos las variables que necesitamos y almacenamos los datos
    //extraidos de las cajas segun la id
    let nombre = document.getElementById('nombreEmpleado').value;
    console.log(nombre);
    let salario = document.getElementById('salario').value;
    console.log(salario);
    let categoriaAumento = document.getElementById('categoria').value;
    console.log(categoriaAumento);
    //variables que contendran informacion para el calculo y para mostrar
    let aumento = 0;
    let salarioTotal = 0;
    let lecturaAumento;
    switch (categoriaAumento) {
        case "A":
            lecturaAumento = '15%';
            aumento = parseInt(salario) * 0.15;
            salarioTotal = parseInt(salario)+aumento;
            break;
        case "B":
            lecturaAumento = '30%';
            aumento = parseInt(salario) * 0.30;
            salarioTotal = parseInt(salario)+aumento;
            break;
        case "C":
            lecturaAumento = '10%';
            aumento = parseInt(salario) * 0.10;
            salarioTotal = parseInt(salario)+aumento;
            break;
        case "D":
            lecturaAumento = '20%';
            aumento = parseInt(salario) * 0.20;
            salarioTotal = parseInt(salario)+aumento;
            break;
        default:
            alert('seleccione un valor correcto');
            break;
    }
    console.log(aumento);
    console.log(salarioTotal);
    //insertamos los datos en el cuerpo de la tabla
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td></td>
        <td>${nombre}</td>
        <td>$${salario}</td>
        <td>${lecturaAumento}</td>
        <td>$${aumento}</td>
        <td>$${salarioTotal}</td>
    `;
    bodyEmpleado.appendChild(fila);
}
