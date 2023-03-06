const formBuscar = document.querySelector("#form-buscar");
const tituloBuscar = document.getElementById("titulo-buscar");
const divBuscar = document.querySelector("#div-buscado");
const formulario = document.querySelector("#formulario");
const tituloInput = document.querySelector("#titulo");
const textoInput = document.querySelector("#texto");
const divNotas = document.querySelector(".div-notas");

formBuscar.addEventListener("submit", (event) => {
  event.preventDefault();
  divBuscar.innerHTML = "<p>" + tituloBuscar.value + "</p>";
});
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  divNotas.innerHTML = "<p>" + tituloInput.value + textoInput.value + "</p>";
});
