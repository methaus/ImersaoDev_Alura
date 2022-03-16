const form = document.getElementById("form")
const content = document.getElementById("content")
let listaCanais = [
  {
    nome: "Filipe Deschamps",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLTnTjoDN70zAxQqnSOBfj9RxVQ5H0HMZXciBQHY=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/c/FilipeDeschamps"
  },
  {
    nome: "Alura Cursos Online",
    imagem: "https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/c/Alura"
  },
  {
    nome: "Jovem Nerd",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLSQN3SUsEVV7XrEnTJxkRPLVY4hajsObHpczJXu=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/c/JovemNerd"
  },
  {
    nome: "Quadro em Branco",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLTpNiJdEPeKMmsOCh6l_kk7DdJte3EIbSJ75Y6zjw=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/c/QuadroemBranco"
  }
]

const adicionarCanal = (nomeC, imagemC, linkC) => {
  listaCanais.push({ nome: nomeC, imagem: imagemC, link: linkC })
}

const mostrarCanais = listaDeCanais => {
  content.innerHTML = ''

  listaDeCanais.forEach(canalDaLista => {
    let canal = document.createElement("section")
    let imagemCanal = document.createElement("img")
    let nomeCanal = document.createElement("h1")
    let linkCanal = document.createElement("a")

    linkCanal.setAttribute("href", canalDaLista["link"])
    linkCanal.setAttribute("target", "_blank")
    linkCanal.innerHTML = canalDaLista["nome"]
    nomeCanal.appendChild(linkCanal)
    imagemCanal.setAttribute("src", canalDaLista["imagem"])

    canal.appendChild(imagemCanal)
    canal.appendChild(nomeCanal)

    content.appendChild(canal)
  })
}

/* ----------- */
/* RUN PROGRAM */
/* ----------- */
mostrarCanais(listaCanais)
form.addEventListener("submit", e => {
  e.preventDefault()
  adicionarCanal(e.srcElement[1].value, e.srcElement[3].value, e.srcElement[5].value)
  mostrarCanais(listaCanais) 
})
