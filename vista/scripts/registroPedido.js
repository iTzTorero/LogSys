const bregistrar = document.querySelector("#bregistrar")
const tabla = document.getElementById("ipi-table");
const tbody = tabla.getElementsByTagName('tbody')[0];
const npedido = document.getElementById('npedido');
const preciokg = document.getElementById('preciokg');
const tdBotones = document.getElementById("tdBotones");

//variables modal
const nPedidoModal = document.getElementById('npedidoModal');
const preciokgModal = document.getElementById('preciokgModal');
const btnActualizarPedido = document.querySelector("#btnActualizar");


//Consultar Base de datos
fetch("/pedido", {
  method: "GET"
}).then((res) => res.json())
  .then((data) => {
    tbody.innerHTML = '';

    data.forEach(element => {
      console.log(element);
      let newRow = tbody.insertRow();

      let cellIdPedido = newRow.insertCell();
      let txtIdPedido = document.createTextNode(element.idPedido);
      cellIdPedido.appendChild(txtIdPedido);

      let cellnPedido = newRow.insertCell();
      let txtnPedido = document.createTextNode(element.nPedido);
      cellnPedido.appendChild(txtnPedido);

      let cellPreciokg = newRow.insertCell();
      let txtPreciokg = document.createTextNode(element.preciokg);
      cellPreciokg.appendChild(txtPreciokg);

      let cellBotones = newRow.insertCell();
      //cellBotones.innerHTML = tdBotones.innerHTML;
      let botonEliminar = document.createElement("button")
      botonEliminar.textContent = 'Eliminar'
      let botonEditar = document.createElement("button")
      botonEditar.textContent = 'Editar'
      cellBotones.appendChild(botonEliminar)
      cellBotones.appendChild(botonEditar)




      botonEliminar.addEventListener("click", () => {
        let idPedido = botonEliminar.parentNode.parentNode.firstChild.textContent

        fetch('/pedido', {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: idPedido
          })
        }).then(res => res.json())
          .then(data => {
            console.log(data.body)
            $('#modalEliminar').modal('show');
            location.reload();
          })
          
      })




      botonEditar.addEventListener("click", () => {
        // console.log(botonEliminar.parentNode.parentNode.firstChild.textContent);
        //et idCamion = botonEditar.parentNode.parentNode.firstChild.textContent
        $('#modalEditar').modal('show');
        idPedidoModal.value = element.idPedido;
        nPedidoModal.value = element.nPedido;
        preciokgModal.value = element.preciokg;

      })
      

    })
  });



bregistrar.addEventListener('click', () => {

  //Validar pedido con RegExS
  let np = npedido.value.trim();
  let pattern = /[A-Z]{1}[0-9]{6}/;
  let resultNPedido = pattern.test(np);
  console.log(resultNPedido);

  //Validar campos

  console.log(npedido + "  " + preciokg);
  if (preciokg.value.trim() === '' || npedido.value.trim() === '' || resultNPedido === false) return alert("Error: Campo Inválido.");
  fetch('/pedido', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      preciokg: preciokg.value,
      nPedido: npedido.value
    })
  }).then(res => res.text())
    .then(data => {
      console.log(data);
      location.reload()
    })
})

btnActualizarPedido.addEventListener("click", function () {

  fetch('/pedido', {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      id: idPedidoModal.value,
      nPedido: nPedidoModal.value,
      preciokg: preciokgModal.value,
    })

  }).then(res => {
    location.reload();
    res.json();
  }).catch(err => console.log(err))

});