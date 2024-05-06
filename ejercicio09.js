/**
 * EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 */
function convertirTemperatura() {
    let celsius = parseInt(document.getElementById('gradosTemperatura').value);
    console.log(celsius);
    multiplicado = celsius * 1.8;
    let fahrenheit = multiplicado + 32;
    console.log(fahrenheit);
    if(fahrenheit >= 14 && fahrenheit <= 32){
        Swal.fire(`${fahrenheit}°F Temperatura Baja`);
    }else if(fahrenheit > 32 && fahrenheit <= 68){
        Swal.fire(`${fahrenheit}°F Temperatura Adecuada`);
    }else if(fahrenheit > 68 && fahrenheit <= 96){
        Swal.fire(`${fahrenheit}°F Temperatura Alta`);
    }else{
        Swal.fire(`Temperatura Desconocida`);
    }
}