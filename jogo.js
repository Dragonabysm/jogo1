const money = document.getElementById("money")
const name = document.getElementById("name")
const lvl = document.getElementById("lvl")
const trabalho = document.getElementById("trabalho")
const comprar = document.getElementById("comprar")
const vender = document.getElementById("vender")

var moneyValue = 0

var nameValue = localStorage.getItem("Name")

var lvlValue = 0

var inventory = {}

function update() {
  
  moneyValue = parseInt(localStorage.getItem("money"))
  
  nameValue = localStorage.getItem("Name")
  
  lvlValue = parseInt(localStorage.getItem("lvl"))
  
  inventory = localStorage.getItem("inventory");
  
  const upload = () => {
    localStorage.setItem("money", moneyValue)
    
    localStorage.setItem("lvl", lvlValue)
    
    localStorage.setItem("inventory", inventory)
}

  upload()
  
  updateValues()
  
}

function updateValues() {
  const money = document.getElementById("money")
  const name = document.getElementById("name")
  const lvl = document.getElementById("lvl")

  money.innerHTML = `Money: ${moneyValue}`

  name.innerHTML = `Name: ${nameValue}`

  lvl.innerHTML = `lvl.: ${lvlValue}`
}

update()

trabalho.addEventListener('click', () => {
  update()
  window.location.replace("/html/trabalho.html")
})

comprar.addEventListener('click', () => {
  update()
  window.location.replace("/html/comprar.html")
})

vender.addEventListener('click', () => {
  update()
  window.location.replace("/html/vender.html")
})
