const form = document.getElementById("form")
const content = document.getElementById("content")


const adicionarCanal = (nome, imagem, link) => {
  let canal = document.createElement("section")
  let imagemCanal = document.createElement("img")
  let nomeCanal = document.createElement("h1")
  let linkCanal = document.createElement("a")

  linkCanal.setAttribute("href", link)
  linkCanal.setAttribute("target", "_blank")
  linkCanal.innerHTML = nome
  nomeCanal.appendChild(linkCanal)
  imagemCanal.setAttribute("src", imagem)

  canal.appendChild(imagemCanal)
  canal.appendChild(nomeCanal)

  content.appendChild(canal)
}

/* ----------- */
/* RUN PROGRAM */
/* ----------- */
form.addEventListener("submit", e => {
  e.preventDefault(); 
  adicionarCanal(e.srcElement[1].value, e.srcElement[3].value, e.srcElement[5].value); 
})
