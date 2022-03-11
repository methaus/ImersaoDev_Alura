const content = document.getElementById("content")
const form = document.createElement("form")

// Mostrando o formulário
const printForm = notasnum => {
  let html = ''

  for (let i = 0; i < notasnum; i++) {
    html+=`
    <label for="nota${i}">Nota ${i+1}:</label>
    <input id="nota${i}" type="number" min="0" max="10" name="nota${i}" required>
    `
  }

  form.innerHTML = html + "<button type='submit'>Enviar</button>"
}

// Pegando os valores do formulário e calculo da media
const formSubmit = eventobj => {
  let res = document.getElementById("res")
  let formElement = eventobj.srcElement
  let length = formElement.length - 1
  let values = []
  let media = 0

  if (res != null) {
    res.remove()
  }
  res = document.createElement("p")
  content.appendChild(res)

  for (let i = 0; i < length; i++) {
    values.push(parseInt(formElement[i].value))
  }

  values.forEach(val => { 
    media+= val 
  })

  media/=length
  
  res.setAttribute("id", "res")
  res.innerHTML = `&nbsp;Média ${media}&nbsp;`
}

/* ----------- */
/* RUN PROGRAM */
/* ----------- */
content.appendChild(form)
content.children[0].children[0].addEventListener("click", value => { printForm(value.srcElement.attributes.value.value) })
content.children[0].children[1].addEventListener("click", value => { printForm(value.srcElement.attributes.value.value) })
form.addEventListener("submit", e => { e.preventDefault(); formSubmit(e) })
printForm(2)