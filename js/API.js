const url = "http://localhost:4000/clientes"

// crear un cliente y alojarlo
export const newCliente = async cliente=>{
  
  try {

    await fetch(url,{
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        'Content-type':'application/json',
      
      }
    })
    window.location.href = "index.html"
    
  } catch (err) {
    console.log(err)
  }
}

// obtener el listado de clientes
export const getData = async ()=>{
  try {
    const respon = await fetch(url);
    const clientes = await respon.json();
    return clientes
  } catch (err) {
    console.log(err)
  }
}

// eliminar del listado de clientes
export const deleteRegistro = async id =>{
  try {
    await fetch(`${url}/${id}`,{
      method: "Delete"
    })
    
  } catch (error) {
    console.log(error)
  }

}

export const  getCliente = async id =>{
  try {
  const result = await fetch(`${url}/${id}`)
  const cliente = await result.json();
  return(cliente)
  } catch (error) {
    console.log(error)
  }
}

export const editCliente = async cliente=>{
  try {
    await fetch(`${url}/${cliente.id}`,{
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        'Content-type':'application/json'
      }
    })
    window.location.href ="index.html"
  } catch (error) {
    console.log(error)
  }
}