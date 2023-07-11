var variableHora;
var fechaActual;

var horaYFecha;
var variableFecha;
var lunaSol;
var sol;
var luna;
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

  variableFecha = dia + " / " + mes + " / " + año;

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
  console.log(variableHora);


  if (horaActual>= "06:00:00" && horaActual < "17:00:00") {
    console.log("es de dia");

    // lunaSol = document.getElementById("lunaSol");
    luna = document.getElementById("luna");
    sol = document.getElementById("sol");

    luna.classList.add("apagar");
    sol.classList.remove("apagar");

  }else{
    console.log("es de noche");
    luna = document.getElementById("luna");
    sol = document.getElementById("sol");

    luna.classList.remove("apagar");
    sol.classList.add("apagar");
  }
}, 1000);




