import{viewAlert} from "./funciones.js"
import{newCliente} from "./API.js"



// crear un nuevo cliente
(function(){

  const form = document.querySelector("#formulario");
  form.addEventListener("submit",validateForm)

  function validateForm(e){
    e.preventDefault()
    
    const nombre = document.querySelector("#nombre").value
    const email = document.querySelector("#email").value
    const telefono = document.querySelector("#telefono").value
    const empresa= document.querySelector("#empresa").value

    const clientes ={
      nombre,
      email,
      telefono,
      empresa
    }

    if(Object.values(clientes).every(input => input ==="")){
      viewAlert("Todos los campos son obligatorios")
      return
    }
    newCliente(clientes)
  }



  
})()