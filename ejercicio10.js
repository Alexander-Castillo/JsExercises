/**
 * Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
 */
function determinarMedia() {
    // designamos variables para capturar los datos mandados mediante el id luego formamos
    // un array separados por coma y recorremos los valores del arreglo para convertirlos en Numeros
    let secuenciaMatutina = document.getElementById('estudianteMañana').value.split(",").map(Number);
    console.log(secuenciaMatutina);
    let secuenciaVespertina = document.getElementById('estudianteTarde').value.split(",").map(Number);
    console.log(secuenciaVespertina);
    let secuenciaNocturna = document.getElementById('estudianteNoche').value.split(",").map(Number);
    console.log(secuenciaNocturna);
    // if (secuenciaMatutina !== 5 || secuenciaMatutina.some(isNaN)) {
    //     document.getElementById('resultado10M').innerHTML = "<p>Por favor, ingrese las edades de 5 estudiantes del turno de la mañana.</p>";
    //     //return; eb teoria deberia funcionar con esta validacion pero no se en que me equivoque
    // }
    // if (secuenciaVespertina !== 6 || secuenciaVespertina.some(isNaN)) {
    //     document.getElementById('resultado10T').innerHTML = "<p>Por favor, ingrese las edades de 6 estudiantes del turno de la mañana.</p>";
    //     //return; eb teoria deberia funcionar con esta validacion pero no se en que me equivoque
    // }
    // if (secuenciaNocturna !== 11 || secuenciaNocturna.some(isNaN)) {
    //     document.getElementById('resultado10N').innerHTML = "<p>Por favor, ingrese las edades de 11 estudiantes del turno de la mañana.</p>";
    //     //return; eb teoria deberia funcionar con esta validacion pero no se en que me equivoque
    // }

    let sumaEdadMatutina = 0;
    for (let i = 0; i < secuenciaMatutina.length; i++) {
        let edadMatutina = parseInt(secuenciaMatutina[i]);
        sumaEdadMatutina += edadMatutina;
        
    }
    let mediaMatutina = sumaEdadMatutina / secuenciaMatutina.length;
    let resultadoM = `<h3>El turno matutino tiene el promedio de edad de = ${mediaMatutina} años de edad</h3>`;
        document.getElementById('resultado10M').innerHTML = resultadoM;
    console.log(mediaMatutina);
    console.log(resultadoM);

    
    let sumaEdadVespertina = 0;
    for (let i = 0; i < secuenciaVespertina.length; i++) {
        let edadVespertina = parseInt(secuenciaVespertina[i]);
        sumaEdadVespertina += edadVespertina;
    }
    let mediaVespertina = sumaEdadVespertina / secuenciaVespertina.length;
    let resultadoV = `<h3>El turno vespertino tiene el promedio de edad de = ${mediaVespertina} años de edad</h3>`;
        document.getElementById('resultado10V').innerHTML = resultadoV;
    console.log(mediaVespertina);
    console.log(resultadoV);

    
    let sumaEdadNocturna = 0;
    for (let i = 0; i < secuenciaNocturna.length; i++) {
        let edadNocturna = parseInt(secuenciaNocturna[i]);
        sumaEdadNocturna += edadNocturna;
        
    }
    let mediaNocturna = sumaEdadNocturna / secuenciaNocturna.length;
    let resultadoN = `<h3>El turno nocturno tiene el promedio de edad de = ${mediaNocturna} años de edad</h3>`;
        document.getElementById('resultado10N').innerHTML = resultadoN;
    console.log(mediaNocturna);
    console.log(resultadoN);

    if (mediaMatutina > mediaVespertina && mediaMatutina > mediaNocturna) {
        let resultado = `<h3>El turno matutino tiene el promedio de edad mayor, el promedio es = ${mediaMatutina} años de edad</h3>`;
    document.getElementById('resultado10MT').innerHTML = resultado;
    }else if (mediaVespertina > mediaMatutina && mediaVespertina > mediaNocturna) {
        let resultado = `<h3>El turno matutino tiene el promedio de edad mayor, el promedio es = ${mediaMatutina} años de edad</h3>`;
        document.getElementById('resultado10MT').innerHTML = resultado;
    }else if (mediaNocturna > mediaMatutina && mediaNocturna > mediaVespertina) {
        let resultado = `<h3>El turno matutino tiene el promedio de edad mayor, el promedio es = ${mediaMatutina} años de edad</h3>`;
        document.getElementById('resultado10MT').innerHTML = resultado;
    }

}