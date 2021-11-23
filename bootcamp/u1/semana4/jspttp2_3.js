var preguntas =[
    "cual objeto le pertenecia a Salazar Slytherin",
    "segun tu criterio ¿Crees que la gente es buena por naturaleza?",
    "cual es su elemento",
    ];
    var opciones = [
        ["anillo","guardapelo","peineta"],
        ["no todos ven por si mismos","si todos son buenos","creo q depende de muchas cosas"],
        ["agua",
        "aire","fuego"]
        ]
        var puntajePorOpcion = [
            [ 0, 9, 1],
            [ 1, 9, 0],
            [ 9, 1, 0],
        ]
        // Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;


// Despliegue de los resultados
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    // Se actualiza la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);

    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    // Determinamos estilo de vida (max = 35)
    if (puntaje > 16) {
        estiloVida = "<span id='estilo-excelente'>slytherin</span>";
    } else if (puntaje > 10) {
        estiloVida = "<span id='estilo-bueno'>algo</span>";
    } else {
        estiloVida = "<span id='estilo-malo'>MALO</span>";
    }


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que tu  ${estiloVida}.</p>`;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    
    if (i < preguntas.length) {
        puntaje += puntajePorOpcion[i][indice];
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    i++;
}

siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});