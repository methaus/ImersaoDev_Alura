const main = document.getElementById('main')
const content = document.getElementById('content')
const areaCarta = document.getElementById("carta_sorteada")
const cartaOponente = document.getElementById("carta_oponente")
const botaoJogar = document.createElement("button")
const cartas = [
  {
    nome: "Popplio",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png",
    atributos: {
      fisico: 1,
      especial: 3,
      att: "water"
    }
  },
  {
    nome: "Rowlet",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png",
    atributos: {
      fisico: 2,
      especial: 2,
      att: "grass"
    }
  },
  {
    nome: "Litten",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/725.png",
    atributos: {
      fisico: 3,
      especial: 1,
      att: "fire"
    }
  }
]

const sortearCarta = () => {
  let random = Math.round(Math.random() * (cartas.length - 1))

  cartaOponente.innerHTML = ''
  areaCarta.setAttribute("class", cartas[random].atributos.att)
  areaCarta.innerHTML = `
    <h2>Carta sorteada: ${cartas[random].nome}</h2>
    <img src="${cartas[random].img}" alt="imagem de ${cartas[random].nome}">
    <p>Escolha um atributo:</p>
    <div class="options">
      <a onclick="escolher('atk.p', ${cartas[random].atributos.fisico})">atk.p<br>${cartas[random].atributos.fisico}</a>
      <a onclick="escolher('atk.s', ${cartas[random].atributos.especial})">atk.s<br>${cartas[random].atributos.especial}</a>
      <a onclick="escolher('type', '${cartas[random].atributos.att}')">type<br>${cartas[random].atributos.att}</a>
    </div>
  `
}

const escolher = (dano_tipo, dano) => {
  botaoJogar.innerHTML = `Jogar com ${dano_tipo.toUpperCase()} (${dano})`
  botaoJogar.setAttribute("onclick", `jogar('${dano_tipo}', '${dano}')`)

  main.appendChild(botaoJogar)
}

const jogar = (dano_tipo, dano) => {
  let random = Math.round(Math.random() * (cartas.length - 1))

  cartaOponente.setAttribute("class", cartas[random].atributos.att)
  cartaOponente.innerHTML = `
    <h2>Carta sorteada: ${cartas[random].nome}</h2>
    <img src="${cartas[random].img}" alt="imagem de ${cartas[random].nome}">
    <p>O atributo escolhido foi ${dano_tipo.toUpperCase()}</p>
    <div class="options">
      <span>atk.p<br>${cartas[random].atributos.fisico}</span>
      <span>atk.s<br>${cartas[random].atributos.especial}</span>
      <span>type<br>${cartas[random].atributos.att}</span>
    </div>
  `
}

/* ----------- */
/* RUN PROGRAM */
/* ----------- */
