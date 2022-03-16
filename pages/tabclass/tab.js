const tabelaJogadores = document.getElementById('tabelaJogadores')
let Jogadores = []
let qtdJogadores = 0


const adicionarJogador = () => {
  qtdJogadores++
  Jogadores.push({ "number": qtdJogadores, "nome": `Jogador ${qtdJogadores}`, "win": 0, "draw": 0, "lose": 0 })
}

const adicionarVitoria = index => {
  Jogadores[index]["win"]+= 1
}

const adicionarEmpate = index => {
  Jogadores[index]["draw"]+= 1
}

const adicionarDerrota = index => {
  Jogadores[index]["lose"]+= 1
}

const mostrarTabela = () => {
  let linhas = ''
  let num = 0

  Jogadores.forEach(jogador => {
    linhas+= `
    <tr>
      <td>${jogador["nome"]}</td>
      <td>${jogador["win"]}</td>
      <td>${jogador["draw"]}</td>
      <td>${jogador["lose"]}</td>
      <td>${jogador["win"] * 3 + jogador["draw"]}</td>
      <td><button onClick="adicionarVitoria(${jogador["number"] - 1})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${jogador["number"] - 1})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${jogador["number"] - 1})">Derrota</button></td>
    </tr>
    `
    num++
  })

  tabelaJogadores.innerHTML = linhas + `
    <tr style="text-align: center;">
      <td colspan="8"><button onclick="adicionarJogador()">Adicionar Jogador</button></td>
    </tr>`
}

/* ----------- */
/* RUN PROGRAM */
/* ----------- */
tabelaJogadores.addEventListener("click", () => { mostrarTabela() })
