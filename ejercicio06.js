// EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
// en cuenta lo siguiente:
// Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
// descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
// es Puerto el Triunfo el descuento será del 15%
function calcularDescuentoTuristico() {
    const origen = document.getElementById('selecionOrigen').value;
    const destino = document.getElementById('selecionLugar').value;
    let descuento;
    const fila = document.getElementById('resultado');
    switch (destino) {
        case "Costa del Sol":
            if (origen === "Palma") {
                descuento = 5;
            }else{
                descuento = 0;
            }
            break;
        case "Panchimalco":
            descuento = 10;
            break;
        case "Puerto el Triunfo":
            descuento = 15;
            break;
        default:
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Destino no valido! ingrese destino nuevamente"
            });
            break;
    }
            fila.innerHTML = `<h3>Descuento calculado:</h3>
                        <hr>
                        <p>Origen: ${origen}</p>
                        <hr>
                        <p>Destino: ${destino}</p>
                        <hr>
                        <p>Descuento: ${descuento}%</p>`;
                            // resultado.appendChild(fila);
    return descuento;
}