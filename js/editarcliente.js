import { getCliente,editCliente } from "./API.js";
import {viewAlert} from "./funciones.js"

(function(){

  // obteniendo los campos

  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");

  

  document.addEventListener("DOMContentLoaded", async ()=>{

    //buscar por id 
    const paramentUrl = new URLSearchParams(window.location.search);

    const idCliente = parseInt(paramentUrl.get("id"));
    const cliente = await getCliente(idCliente)

    // mostrar la info a la vista
    viewClienteEditar(cliente);

    // validar el nuevo formulario en editar
    const form = document.querySelector("#formulario");
    form.addEventListener("submit",validateEdit)

  })

  function viewClienteEditar(cliente){
    const {nombre,email,telefono,empresa,id}= cliente;

    nameInput.value = nombre;
    emailInput.value = email;
    phoneInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
    

  }

  function validateEdit(e){
    e.preventDefault();

      const cliente ={
      nombre:nameInput.value,
      email: emailInput.value,
      telefono:phoneInput.value,
      empresa: empresaInput.value,
      id: parseInt(idInput.value)
    }


    if(!Object.values(cliente).every(input => input !=="")){
      viewAlert("Todos los campos son obligatorios")
      return
    }
    editCliente(cliente)
  }

})();
