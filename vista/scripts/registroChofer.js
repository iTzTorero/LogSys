const bregistrar = document.querySelector("#bregistrarchofer");
const nombrechofer = document.getElementById("nombrechofer");
const apellidoP = document.getElementById("apellido_paterno_chofer");
const apellidoM = document.getElementById("apellido_materno_chofer");
const tabla = document.getElementById("ipi-table");
const monto = document.getElementById("montoPres");
const descripcionPres = document.getElementById("descripcionPres");
const tbody = tabla.getElementsByTagName('tbody')[0];
const tdBotones = document.getElementById("tdBotones");
const btngGuardarPrestamo = document.getElementById("btnRegistarPrestamo");
const prestamoModal = document.getElementById('modalRegistrarPrestamo');
const idChoferLbl = document.getElementById('idChofer');
const botonAceptar = document.getElementById('aceptarEliminar');

//Consultar Base de datos
fetch("/chofer", {
  method: "GET"
}).then((res) => res.json())
  .then((data) => {
    tbody.innerHTML = '';

    data.forEach(element => {

      let newRow = tbody.insertRow();

      let cellIdChofer = newRow.insertCell();
      let txtIdChofer = document.createTextNode(element.idChofer);
      cellIdChofer.appendChild(txtIdChofer);

      let cellNombre = newRow.insertCell();
      let txtNombre = document.createTextNode(element.nombre);
      cellNombre.appendChild(txtNombre);

      let cellBotones = newRow.insertCell();
      //cellBotones.innerHTML = tdBotones.innerHTML;
      let botonEliminar = document.createElement("button")
      //tdBotones.querySelector("button")

      let botonRegistrarPrestamo = document.createElement("button");
      //tdBotones.querySelector("button")
      botonRegistrarPrestamo.textContent = 'Registrar Prestamo';
      cellBotones.appendChild(botonRegistrarPrestamo);
      

      botonEliminar.textContent = 'Eliminar'
      cellBotones.appendChild(botonEliminar)

      //Evento para eliminar un elemento de la base de datos.

      botonRegistrarPrestamo.addEventListener("click", () => {
        idChoferLbl.value = element.idChofer
        $('#modalRegistrarPrestamo').modal('show');
        
    
      });
    

      botonEliminar.addEventListener("click", () => {
        // console.log(botonEliminar.parentNode.parentNode.firstChild.textContent);
        let idChofer = botonEliminar.parentNode.parentNode.firstChild.textContent
        fetch('/chofer', {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: idChofer
          })
         
        }).then(()=>{
          $('#modalEliminar').modal('show');
        }).then(()=>location.reload())

      });
    });
  });



  
  btngGuardarPrestamo.addEventListener("click", ()=>{
    fetch( '/prestamo', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        idChofer: idChoferLbl.value,
        monto: monto.value,
        detalle: descripcionPres.value,
      })
  
    }).then( res => { 
      res.json();
      $('#modalRegistrarPrestamo').modal('hide');
      $('#modalExitoRegistro').modal('show');

      monto.value=''
      descripcionPres.value=''
      

    }).catch( err => console.log(err) )
  });

bregistrar.addEventListener("click", () => {

  //Validar campos 
  if (nombrechofer.value.trim() === "" || apellidoP.value.trim() === "" || apellidoM.value.trim() === "") return false;

  let nombre_completo = nombrechofer.value + " " + apellidoP.value + " " + apellidoM.value;

  fetch("/chofer", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ nombre: nombre_completo }),

  })
    .then((res) => res.json())
    .then((data) => {

      console.log(data);
      location.reload();
    });
});

botonAceptar.addEventListener("click",()=>{
  
})
