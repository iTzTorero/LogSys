const bregistrar = document.querySelector("#bregistrarchofer");
const nombrechofer = document.getElementById("nombrechofer");
const apellidoP = document.getElementById("apellido_paterno_chofer");
const apellidoM = document.getElementById("apellido_materno_chofer");
const tabla = document.getElementById("ipi-table");
const tbody = tabla.getElementsByTagName('tbody')[0];
const tdBotones = document.getElementById("tdBotones");

//Consultar Base de datos
fetch("/chofer",{
  method: "GET"
}).then((res) => res.json())
  .then((data) => {
    tbody.innerHTML = '';

    data.forEach(element =>{
      
      let newRow = tbody.insertRow();

      let cellNombre = newRow.insertCell();
      let txtNombre = document.createTextNode(element.nombre);
      cellNombre.appendChild(txtNombre);
      
      let cellBotones = newRow.insertCell();
      cellBotones.innerHTML = tdBotones.innerHTML;
    });
  });


bregistrar.addEventListener("click", () => {

  //Validar campos 
  if (nombrechofer.value.trim() === "" || apellidoP.value.trim() === "" || apellidoM.value.trim() === "") return false;

  let nombre_completo = nombrechofer.value+" "+apellidoP.value+" "+apellidoM.value;

  fetch("/chofer", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ nombre: nombre_completo }),

  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
