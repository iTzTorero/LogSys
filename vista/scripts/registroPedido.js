const bregistrar = document.querySelector("#bregistrar")

bregistrar.addEventListener('click', () => {
              //Validar campos
              const npedido = document.getElementById('npedido').value
              const preciokg = document.getElementById('preciokg').value
              console.log(npedido + "  " +preciokg);
              if (preciokg.trim() === '' || npedido.trim() === '') return false;
              fetch('/pedido', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ 
                    preciokg:preciokg, 
                    nPedido:npedido 
                })
              }).then(res => res.text())
                .then(data => {
                  console.log(data);
              })
 })