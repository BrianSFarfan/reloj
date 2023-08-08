var variableHora;
var fechaActual;
var segundosActual
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

  variableHora = hora + ":" + minutos;
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
function ObtenerSegundos(){
  segundosActual = new Date();

  var variableSegundos = segundosActual.getSeconds().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  return variableSegundos;
}  

// Obtener el elemento con el id "variableHoraActualCompleto"
var variableHoraActual = document.getElementById("variableHoraActualCompleto");
var variableFechaActual = document.getElementById("variableFechaActualCompleta");
var variableSegundosActual = document.getElementById("variableSegundosCompleta");

// Actualizar la hora y fecha cada segundo

setInterval(function() {
  horaActual = obtenerHora();
  fechaActual = obtenerFecha();
  segundosActual= ObtenerSegundos();


  variableHoraActual.textContent = variableHora;
  variableFechaActual.textContent = variableFecha;
  variableSegundosActual.textContent= segundosActual;
  console.log(variableHora);


  if (horaActual>= "06:00" && horaActual < "17:00") {
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




