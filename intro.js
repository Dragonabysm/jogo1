//Get input, parent for appendChild() and title
const nameTitle = document.getElementById("nameTitle")
const nameInput = document.getElementById("nameInput")
const parent = document.getElementById("parent")

//Lock for if
var lock = true

var lock2 = false

nameInput.addEventListener('input', () => {
  //Event Listener of input name for validate name and create button
  var valor = nameInput.value

  nameTitle.innerHTML = valor

  check(valor)
})

//Check parameters of name
function check(valor) {
  if (valor.length >= 4 && lock) {
    const btn = document.createElement('button');
    parent.appendChild(btn)
    btn.innerHTML = "Esse é meu nome!"
    btn.setAttribute("id", "btn")

    lock = false
    lock2 = true
  }
  if (valor.length >= 4) {
    button(valor)
  }

  if (valor.length < 4 && lock2) {
    parent.removeChild(btn)
    lock = true
    lock2 = false

  }
}

function button(valor) {
  const btnId = document.getElementById("btn");

  btnId.addEventListener('click', () => {
    window.location.replace('jogo.html')
    localStorage.setItem("Name", valor)
    
    const upload = () => {
     localStorage.setItem("money", 0)
    
     localStorage.setItem("lvl", 0)
     
     localStorage.setItem("inventory", {})
    }

  upload()
  })
}
