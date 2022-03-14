const content = document.getElementById("form")
const saida = document.createElement('p')
let tentativas = 0
let random = 0

const gerateRandom = () => {
  random = Math.round(Math.random() * 10)
}

const jogar = num => {
  let resposta = compare(num)

  tentativas++

  if (resposta == "Você acertou!") {
    tentativas = 0
    alert(resposta)
    if(confirm("Tentar de novo?")) {
      saida.innerHTML = ''
      gerateRandom()
    } else {
      alert("Para jogar de novo atualize a página.")
    }
  } else {
    saida.innerHTML = resposta + "<br>Tentativas: " + tentativas
  }
}

const compare = num => {
  if(num < random) {
    return "Chute um número maior!"
  } else if(num > random) {
    return "Chute um número menor!"
  } else {
    return "Você acertou!"
  }
}

/* ----------- */
/* RUN PROGRAM */
/* ----------- */
gerateRandom()
content.appendChild(saida)
content.addEventListener("submit", e => { e.preventDefault(); jogar(parseInt(e.srcElement[0].value)) })