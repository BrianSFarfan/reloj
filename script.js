var variableHora;

var horaYFecha;
var variableFecha;
var lunaSol;
var sol;
var luna;
var horaActual;
var minutosActual;
var fechaActual;
var segundosActual


function obtenerHora() {
  fechaActual = new Date();

  var hora = fechaActual.getHours().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  variableHora = hora;
  return variableHora;
}
function obtenerMinutos() {
  fechaActual = new Date();
  var minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito

  variableMinutos = minutos;
  return variableMinutos;
}
function ObtenerSegundos(){
  segundosActual = new Date();

  var variableSegundos = segundosActual.getSeconds().toString().padStart(2, '0'); // Agrega cero delante si tiene un solo dígito
  return variableSegundos;
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
var variableMinutosActual = document.getElementById("variableMinutosActualCompleto");
var variableSegundosActual = document.getElementById("variableSegundosCompleta");

var variableFechaActual = document.getElementById("variableFechaActualCompleta");

// Actualizar la hora y fecha cada segundo

setInterval(function() {
  horaActual = obtenerHora();
  minutosActual = obtenerMinutos();

  fechaActual = obtenerFecha();
  segundosActual= ObtenerSegundos();


  variableHoraActual.textContent = variableHora;
  variableMinutosActual.textContent = variableMinutos;
  variableSegundosActual.textContent= segundosActual;

  variableFechaActual.textContent = variableFecha;
  console.log(variableHora + variableMinutos);


  if (horaActual>= "06" && horaActual < "17") {
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



var dia="16";
var mes="November";
var anio="2016";
diaSemana(dia, mes,anio);

function diaSemana(dia,mes,anio){
  var dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; //Lista de dias :D
  var dt = new Date(mes+' '+dia+', '+anio+' 12:00:00');
  console.log("Dias posicion: " +(dt.getUTCDay()));
  document.getElementById('diaFecha').innerHTML = dias[dt.getUTCDay()];    
};

 

