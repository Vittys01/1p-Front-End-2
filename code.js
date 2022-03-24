/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  nombre = prompt("Ingresa tu nombre");
  fechaNacimiento = 2022 - prompt("Ingresa el año que naciste");
  ciudad = prompt("Ingresa la ciudad donde vives ");
  interesa = confirm("Te interesa javascript?");
  if(interesa){interesa = "Si"} else{interesa = "No"}
  
  datosPersona.nombre = nombre;
  datosPersona.edad = fechaNacimiento;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesa;

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  infoUsuario=document.querySelector(".card-header");
  infoUsuario.innerHTML=`<h3> Nombre : ${datosPersona.nombre}</h3> <h3> Edad : ${datosPersona.edad}</h3> <h3> Ciudad : ${datosPersona.ciudad}</h3> <h3> Te interesa Js : ${datosPersona.interesPorJs}</h3> `;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let containerDiv = document.querySelector("#fila");
  // for(materia of listado){
  
    // let itemDiv = document.createElement("div");
    // itemDiv.classList.add("caja");
    // itemDiv.innerHTML = `<img src=${materia.imgUrl} alt=${materia.lenguajes}>
    // <p>${materia.lenguajes}</p>
    // <p>${materia.bimestre}</p>`;
    // containerDiv.appendChild(itemDiv);
  // }

  listado.forEach((materia, index) => {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("caja");
    itemDiv.innerHTML = `<img src=${materia.imgUrl} alt=${materia.lenguajes}>
      <p>${materia.lenguajes}</p>
      <p>${materia.bimestre}</p>`;
    containerDiv.appendChild(itemDiv);
  });

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");

}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
//divOculto=querySelector("sobre-mi");
divOculto=document.getElementById("sobre-mi");
window.addEventListener("keypress",function(e){
  if ((e.key == "f") || (e.key == "F")){
    divOculto.classList.remove("oculto");
  }
});
