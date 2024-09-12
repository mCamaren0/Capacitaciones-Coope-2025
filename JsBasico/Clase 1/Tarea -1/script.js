/* 

Instrucciones del Laboratorio #1 

Complete los cuatro ejercicios a continuación.

Cree un archivo de html que invoque este archivo de JavaScript para probarlo desde el navegador.

*/


/* 

Paso 1

Un profesor ha terminado de calificar los exámenes de sus estudiantes y necesita su ayuda para calcular el promedio de calificaciones para la clase.

Complete la función obtenerPromedio que toma como parámetro un array de calificaciones y devuelve el promedio.

El promedio se calcula sumando todas las calificaciones y dividiendo por el total de calificaciones.

Ejemplo de código

Promedio = Suma de todas las calificaciones dividido entre el total de calificaciones
Se aportan algunas llamadas a la función para que pueda probar su código.

Consejos

Puedes usar un bucle para iterar sobre el array de calificaciones y sumar todas las calificaciones.
Puedes usar la propiedad length para obtener el total de calificaciones. 

*/


function obtenerPromedio(puntos) {
    let suma = 0;
    for (let i = 0; i < puntos.length; i++) {
        suma += puntos[i];
    }
    return suma / puntos.length;
}


/* 

Paso 2
Ahora el profesor necesita su ayuda para convertir la calificación del estudiante a una letra.

Completa la función obtenerCalificacion que toma como parámetro una calificación numérica. Su función debe devolver una cadena que represente una letra de calificación basada en la calificación.

Aquí están las calificaciones y sus correspondientes letras:

Rango de Calificación	Calificación
-------------------
| 100	    | "A++" |
| 90 - 99	| "A"   |
| 80 - 89	| "B"   |
| 70 - 79	| "C"   |
| 60 - 69	| "D"   |
| 0 - 59	| "F"   |
-------------------

Consejos

Use las declaraciones condicionales (if, else if y else).
Use operadores de comparación (>, <, >=, <=, ===). 

*/

function obtenerCalificacion(puntos) {
    if (puntos === 100) {
        return "A++";
    } else if (puntos >= 90) {
        return "A";
    } else if (puntos >= 80) {
        return "B";
    } else if (puntos >= 70) {
        return "C";
    } else if (puntos >= 60) {
        return "D";
    } else {
        return "F";
    }
}


/* 
Paso 3
El profesor está realmente contento con el programa que has creado hasta ahora. 
Pero ahora quieren tener una forma fácil de verificar si un estudiante tiene una calificación aprobatoria.
 Una calificación aprobatoria es cualquier cosa que no sea una "F".

Completa la función haAprobado que toma como parámetro la calificación del estudiante. 
Su función debe retornar true si el estudiante tiene una calificación mayor a F y false si no la tiene.

Consejos

Utiliza la función obtenerCalificacion para obtener la calificación del estudiante.
Luego verifica si la calificación aprueba o no.
*/

function haAprobado(puntaje) {
    let calificacion = obtenerCalificacion(puntaje);
    return calificacion !== "F";
}

/* 

Paso 4
Ahora que el profesor tiene toda la información que necesita, quiere poder enviar un mensaje al estudiante con los resultados.

Complete la función enviarMensajeEstudiante con los parámetros totalPuntos y puntosEstudiante.

La función debe devolver un string que represente un mensaje para el estudiante.

Si el estudiante aprobó el curso, la cadena debe seguir este formato:

Ejemplo de código
Promedio de la clase: {promedio-va-aquí}. Tu calificación: {calificación-va-aquí}. Aprobaste el curso.
Si el estudiante no aprobó el curso, la cadena debe seguir este formato:

Promedio de la clase: {promedio-va-aquí}. Tu calificación: {calificación-va-aquí}. No aprobaste el curso.

Reemplace {promedio-va-aquí} con el promedio de los puntos totales. Reemplace {calificación-va-aquí} con la calificación del estudiante.

Consejos

Utiliza la función obtenerPromedio para obtener el promedio de la clase.
Utiliza la función obtenerCalificacion para obtener la calificación del estudiante.
Utiliza la concatenación de cadenas (+) para construir el mensaje.

*/

function enviarMensajeEstudiante(totalPuntos, puntosEstudiante) {
    
    let promedioClase = obtenerPromedio(totalPuntos);
    let calificacionEstudiante = obtenerCalificacion(puntosEstudiante);
    let mensaje = `Promedio de la clase: ${promedioClase}. Tu calificación: ${calificacionEstudiante}. `;
    
    if (haAprobado(puntosEstudiante)) {
        mensaje += "Aprobaste el curso.";
    } else {
        mensaje += "No aprobaste el curso.";
    }
    
    return mensaje;
}



/* Funciones para llamar en el html*/

function calcularPromedio() {
    const input = document.getElementById('Promedio').value;
    const puntos = input.split(',').map(Number);
    const promedio = obtenerPromedio(puntos);
    alert(promedio);
}

function mostrarCalificacion() {
    const input = document.getElementById('Calificacion').value;
    const calificacion = obtenerCalificacion(Number(input));
    alert(calificacion);
}

function verificarAprobacion() {
    const input = document.getElementById('Aprobacion').value;
    const aprobado = haAprobado(Number(input));
    alert(aprobado ? 'Aprobado' : 'No Aprobado');
}

function enviarMensaje() {
    const totalPuntosInput = document.getElementById('Puntos').value;
    const puntosEstudiante = document.getElementById('PuntosEstudiante').value;
    const totalPuntos = totalPuntosInput.split(',').map(Number);
    const mensaje = enviarMensajeEstudiante(totalPuntos, Number(puntosEstudiante));
    alert(mensaje);
}