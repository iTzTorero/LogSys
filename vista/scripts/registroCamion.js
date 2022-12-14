const bregistrarcamion = document.querySelector("#bregistrarcamion")
const btnActualizarCamion = document.querySelector("#btnActualizar")

const placas = document.getElementById('placas');
const marca = document.getElementById('marca');
const color = document.getElementById('color');
const tabla = document.getElementById("ipi-table");

const tbody = tabla.getElementsByTagName('tbody')[0];
//const modalEditar = document.getElementById('modalEditar');
const tdBotones = document.getElementById("tdBotones");

const idCamionModal = document.getElementById('idCamionModal');
const placasModal = document.getElementById('placasModal');
const marcaModal = document.getElementById('marcaModal');
const colorModal = document.getElementById('colorModal');




//Consultar Base de datos
fetch("/camion", {
  method: "GET"
}).then((res) => res.json())
  .then((data) => {
    tbody.innerHTML = '';

    data.forEach(element => {
      let newRow = tbody.insertRow();

      let cellIdCamion = newRow.insertCell();
      let txtIdCamion = document.createTextNode(element.idCamion);
      cellIdCamion.appendChild(txtIdCamion);

      let cellPlacas = newRow.insertCell();
      let txtPlacas = document.createTextNode(element.placas);
      cellPlacas.appendChild(txtPlacas);

      let cellMarca = newRow.insertCell();
      let txtMarca = document.createTextNode(element.marca);
      cellMarca.appendChild(txtMarca);

      let cellColor = newRow.insertCell()
      let txtColor = document.createTextNode(element.color);
      cellColor.appendChild(txtColor)

      let cellBotones = newRow.insertCell();
      //cellBotones.innerHTML = tdBotones.innerHTML;
      let botonEliminar = document.createElement("button")
      //tdBotones.querySelector("button")

      botonEliminar.textContent = 'Eliminar'
      cellBotones.appendChild(botonEliminar)

      let botonEditar = document.createElement("button")
      //tdBotones.querySelector("button")
      botonEditar.textContent = 'Editar'
      cellBotones.appendChild(botonEditar)


      //Evento para eliminar un elemento de la base de datos.
      botonEliminar.addEventListener("click", () => {
        // console.log(botonEliminar.parentNode.parentNode.firstChild.textContent);
        let idCamion = botonEliminar.parentNode.parentNode.firstChild.textContent
        fetch('/camion', {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: idCamion
          })
        }).then(res => res.json())
          .then(data => {
            console.log(data.body)
            $('#modalEliminar').modal('show');
            location.reload()
          })


        //Evento para eliminar un elemento de la base de datos.

      });
      botonEditar.addEventListener("click", () => {
        // console.log(botonEliminar.parentNode.parentNode.firstChild.textContent);
        //et idCamion = botonEditar.parentNode.parentNode.firstChild.textContent
        $('#modalEditar').modal('show');
        idCamionModal.value = element.idCamion;
        placasModal.value = element.placas;
        marcaModal.value = element.marca;
        colorModal.value = element.color;


        //location.reload();
      })
    });
  })

bregistrarcamion.addEventListener('click', () => {

  //Validar placas con RegEx
  let lcsPlate = placas.value.trim();
  let pattern = /[A-Z]{3}-[0-9]{2}-[A-Z]{1}/;
  let resultPlate = pattern.test(lcsPlate);
  console.log(resultPlate);

  //Validar campos
  if (color.value.trim() === '' || marca.value.trim() === '' || placas.value.trim() === '' || resultPlate === false) return alert("Error: Campo Inv??lido.");
  fetch('/camion', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      marca: marca.value,
      color: color.value,
      placas: placas.value
    })
  }).then(res => res.json())
    .then(data => {
      console.log(data.body)
      location.reload()
    })
})

btnActualizarCamion.addEventListener("click", function () {
  fetch('/camion?id=' + idCamionModal.value, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      id: idCamionModal.value,
      placas: placasModal.value,
      marca: marcaModal.value,
      color: colorModal.value
    })

  }).then(res => {
    location.reload();
    res.json();
  }).catch(err => console.log(err))
});