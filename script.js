var variableHora;
var fechaActual;

var horaYFecha;
var variableFecha;

var horaActual;

function obtenerHora() {
  fechaActual = new Date();

  var hora = fechaActual.getHours().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  var minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  var segundos = fechaActual.getSeconds().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito

  variableHora = hora + ":" + minutos + ":" + segundos;

  return variableHora;
}

function obtenerFecha() {
  fechaActual = new Date();

  var dia = fechaActual.getDate().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  var año = fechaActual.getFullYear();

  variableFecha = dia + "/" + mes + "/" + año;

  return variableFecha;
}

// Obtener el elemento con el id "variableHoraActualCompleto"
var variableHoraActual = document.getElementById("variableHoraActualCompleto");
var variableFechaActual = document.getElementById("variableFechaActualCompleta");

// Actualizar la hora y fecha cada segundo

setInterval(function() {
  horaActual = obtenerHora();
  fechaActual = obtenerFecha();
  variableHoraActual.textContent = variableHora;
  variableFechaActual.textContent = variableFecha;
}, 1000);
