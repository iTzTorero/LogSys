const bregistrarcamion = document.querySelector("#bregistrarcamion")
const placas = document.getElementById('placas');
const marca = document.getElementById('marca');
const color = document.getElementById('color');

bregistrarcamion.addEventListener('click', () => {

      //Validar campos
      if (color.value.trim() === '' || marca.value.trim() === '' || placas.value.trim()==='') return false;
      fetch('/camion', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            marca: marca.value, 
            color:color.value, 
            placas:placas.value 
        })
      }).then(res => res.json())
        .then(data => console.log(data.body))
})