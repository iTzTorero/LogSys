const bregistrar = document.querySelector("#bregistrarchofer");
const nombrechofer = document.getElementById("nombrechofer");
const apellidoP = document.getElementById("apellido_paterno_chofer");
const apellidoM = document.getElementById("apellido_materno_chofer");


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
