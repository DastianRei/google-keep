const formBuscar = document.querySelector("#form-buscar");
const tituloBuscar = document.getElementById("titulo-buscar");
const divBuscar = document.querySelector("#div-buscado");
const formulario = document.querySelector("#formulario");
const tituloInput = document.querySelector("#titulo");
const textoInput = document.querySelector("#texto");
const divNotas = document.querySelector(".div-notas");

const objNota = {
  fecha: "",
  titulo: "",
  texto: "",
};

let listaNotas = [];
let editando = true;

formBuscar.addEventListener("submit", (event) => {
  event.preventDefault();
  divBuscar.innerHTML = "<p>" + tituloBuscar.value + "</p>";
});

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  if (tituloInput.value === "" || textoInput.value === "") {
    alert("Todos los campos se deben llenar");
    return;
  }
  objNota.fecha = Date.now();
  objNota.titulo = tituloInput.value;
  objNota.texto = textoInput.value;
  crearNota();
}

function crearNota() {
  listaNotas.push({ ...objNota });
  mostrarNotas();
  formulario.reset();
  limpiarObjeto();
}

function mostrarNotas() {
  refrescarHTML();
  const divNotas = document.querySelector(".div-notas");

  listaNotas.forEach((nota) => {
    const { fecha, titulo, texto } = nota;
    const parrafo = document.createElement("p");
    parrafo.textContent = `${fecha} - ${titulo} - ${texto} - `;
    parrafo.dataset.id = fecha;
    const hr = document.createElement("hr");
    divNotas.appendChild(parrafo);
    divNotas.appendChild(hr);
  });
}

function limpiarObjeto() {
  objNota.fecha = "";
  objNota.titulo = "";
  objNota.texto = "";
}

function refrescarHTML() {
  const divNotas = document.querySelector(".div-notas");
  while (divNotas.firstChild) {
    divNotas.removeChild(divNotas.firstChild);
  }
}
