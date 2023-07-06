var variableHora;
var fechaActual;

var horaYFecha;
var variableFecha; 

var horaActual;

function obtenerHora() {
  fechaActual = new Date();

  var hora = fechaActual.getHours();
  var minutos = fechaActual.getMinutes();
  var segundos = fechaActual.getSeconds();

  variableHora = hora + ":" + minutos + ":" + segundos;

  return variableHora;
}

function obtenerFecha() {
  fechaActual = new Date();

  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1;
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