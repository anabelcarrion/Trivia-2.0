function mostrarname(insertarname) {
  //dar valor al h1 de la siguiente seccion
  document.getElementById("mensajename").innerHTML = "Hola " + insertarname.value;
  //ocultando div index y mostrando div seleccion de tema
  document.getElementById("index").style.display = "none";
  document.getElementById("seleccion-tema").style.display = "block";
}

//eligir por cual juego tomar
function iratematica(select1) {
  if (select1.value == "geometria") {
    document.getElementById("seleccion-tema").style.display = "none";
    document.getElementById("geometria").style.display = "block";
  } else if (select1.value == "problema") {
    document.getElementById("seleccion-tema").style.display = "none";
    document.getElementById("problemas").style.display = "block";
  } else {
    document.getElementById("seleccion-tema").style.display = "none";
    document.getElementById("seleccione").style.display = "block";
  }
}
//mostrar resultados del juego geometria
function guardarresulatdogeometria(select1, select2, select3) {
  if (select1.value == "" || select2.value == "" || select3.value == "") {
    document.getElementById("geometria").style.display = "none";
    document.getElementById("seleccione1").style.display = "block";
  } else {
    document.getElementById("respuesta1").innerHTML = "La respuesta 1 fue " + select1.value;
    document.getElementById("respuesta2").innerHTML = "La respuesta 2 fue " + select2.value;
    document.getElementById("respuesta3").innerHTML = "La respuesta 3 fue " + select3.value;
    document.getElementById("geometria").style.display = "none";
    document.getElementById("resultado").style.display = "block";
  }
}

//mostrar resultados juego problemas
function guardarresulatdoproblemas(select1, select2, select3) {
  if (select1.value == "" || select2.value == "" || select3.value == "") {
    document.getElementById("problemas").style.display = "none";
    document.getElementById("seleccione2").style.display = "block";
  } else {
    document.getElementById("respuesta1").innerHTML = "La respuesta 1 fue " + select1.value;
    document.getElementById("respuesta2").innerHTML = "La respuesta 2 fue " + select2.value;
    document.getElementById("respuesta3").innerHTML = "La respuesta 3 fue " + select3.value;
    document.getElementById("problemas").style.display = "none";
    document.getElementById("resultado").style.display = "block";
  }
}
// funciones para volver a las paginas anteriores
//este es para regresar a la pagina inicio
function volver() {
  limpiar();
  document.getElementById("seleccion-tema").style.display = "none";
  document.getElementById("index").style.display = "block";
}

function volver1() {
  limpiar();
  document.getElementById("geometria").style.display = "none";
  document.getElementById("seleccion-tema").style.display = "block";
}

function volver2() {
  limpiar();
  document.getElementById("problemas").style.display = "none";
  document.getElementById("seleccion-tema").style.display = "block";
}

function volver3() {
  limpiar();
  document.getElementById("resultado").style.display = "none";
  document.getElementById("seleccion-tema").style.display = "block";
}

function volver4() {
  limpiar();
  document.getElementById("resultado").style.display = "none";
  document.getElementById("index").style.display = "block";
}

function volver5() {
  limpiar();
  document.getElementById("seleccione1").style.display = "none";
  document.getElementById("geometria").style.display = "block";
}

function volver6() {
  limpiar();
  document.getElementById("seleccione2").style.display = "none";
  document.getElementById("problemas").style.display = "block";
}

function volver7() {
  limpiar();
  document.getElementById("seleccione").style.display = "none";
  document.getElementById("seleccion-tema").style.display = "block";
}

function limpiar() {
  var ele1 = document.getElementsByName("select1");
  for (var i = 0; i < ele1.length; i++)
    ele1[i].checked = false;
  var ele2 = document.getElementsByName("select2");
  for (var i = 0; i < ele2.length; i++)
    ele2[i].checked = false;
  var ele2 = document.getElementsByName("select3");
  for (var i = 0; i < ele2.length; i++)
    ele2[i].checked = false;
}