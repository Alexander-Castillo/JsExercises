/** EJERCICIO 1: 
 * Crear una función que en base a la edad que ingreso el usuario devolver un
 * mensaje si la persona es mayor de edad o no. Utilizar para la condición el 
 * operador ternario. */
function calcularEdad(){
    let edad = parseInt(prompt("Por favor ingrese su edad: "));
edad >= 18 ? alert("Eres mayor de edad.") : alert("Eres menor de edad.");
}