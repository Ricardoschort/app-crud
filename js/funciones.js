export function viewAlert(message){
  const alert = document.querySelector(".alert");

  if(!alert){
    const p = document.createElement("P")
    p.classList.add("mx-auto","bg-red-300","border-red-400","text-center","alert","mt-5","p-3")
    p.innerHTML = `
      <strong>Error!
        <span class="d-inline">${message}</span>
      </strong>
     `
    const form = document.querySelector("#formulario").appendChild(p)
    setTimeout(() => {
      p.remove()
    }, 2500);
  }
}