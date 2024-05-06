/**
 * EJERCICIO 2: Crear una función que determine la nota final de 
 * un alumno, la cual depende de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
 * Al final deberá mostrar los datos del alumno, nombre, carnet y
 * nota final
 */
function determinarNotaFinal(){
    // declara variables constantes para almacenar los resultados de las notas 
    // por los porcentajes
    const bodyNotas = document.querySelector('#tabla_estudiante tbody');

    let  nombreEstudiante = document.getElementById('nombreEs').value;
    console.log(nombreEstudiante);
    let  carnet = document.getElementById('carnet').value;
    console.log(carnet);
    let exa = parseInt(document.getElementById('examen').value);
    let tare = parseInt(document.getElementById('tareas').value);
    let asis = parseInt(document.getElementById('asistencia').value);
    let inv = parseInt(document.getElementById('investigacion').value);
    let notaExamen = exa * 0.2;
    console.log(notaExamen);
    let notaTareas = tare * 0.4;
    console.log(notaTareas);
    let notaPorAsistencia = asis * 0.1;
    console.log(notaPorAsistencia);
    let notaDeInvestigacion = inv * 0.3;
    console.log(notaDeInvestigacion);

    let notaFinal = notaExamen + notaTareas + notaPorAsistencia + notaDeInvestigacion;
    
    // delvolver un objetos con los datos del estudiante y su nota fianl
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td></td>
        <td>${nombreEstudiante}</td>
        <td> ${carnet}</td>
        <td>${exa}</td>
        <td>${tare}</td>
        <td>${asis}</td>
        <td>${inv}</td>
        <td>${notaFinal}</td>
    `;
    bodyNotas.appendChild(fila);
}
