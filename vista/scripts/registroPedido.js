const bregistrar = document.querySelector("#bregistrar")
const tabla = document.getElementById("ipi-table");
const tbody = tabla.getElementsByTagName('tbody')[0];
const npedido = document.getElementById('npedido');
const preciokg = document.getElementById('preciokg');
const tdBotones = document.getElementById("tdBotones");

//Consultar Base de datos
fetch("/pedido",{
  method: "GET"
}).then((res) => res.json())
  .then((data) => {
    tbody.innerHTML = '';

    data.forEach(element =>{
      console.log(element);
      let newRow = tbody.insertRow();

      let cellnPedido = newRow.insertCell();
      let txtnPedido = document.createTextNode(element.nPedido);
      cellnPedido.appendChild(txtnPedido);
      
      let cellPreciokg = newRow.insertCell();
      let txtPreciokg = document.createTextNode(element.preciokg);
      cellPreciokg.appendChild(txtPreciokg);

      let cellBotones = newRow.insertCell();
      cellBotones.innerHTML = tdBotones.innerHTML;
      
    });
  });




bregistrar.addEventListener('click', () => {

        //Validar placas con RegExS
        let np = npedido.value.trim();
        let pattern = /[A-Z]{1}[0-9]{6}/;
        let resultNPedido = pattern.test(np);
        console.log(resultNPedido);
        
              //Validar campos
             
              console.log(npedido + "  " +preciokg);
              if (preciokg.value.trim() === '' || npedido.value.trim() === '' || resultNPedido === false) return alert("Error: Campo Inválido.");
              fetch('/pedido', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ 
                    preciokg:preciokg.value, 
                    nPedido:npedido.value 
                })
              }).then(res => res.text())
                .then(data => {
                  console.log(data);
              })
 })