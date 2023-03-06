const formBuscar = document.querySelector("#form-buscar");
const tituloBuscar = document.getElementById("titulo-buscar");
const divBuscar = document.querySelector("#div-buscado");

formBuscar.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(tituloBuscar.value);
  divBuscar.innerHTML = "<p>" + tituloBuscar.value + "</p>";
});
