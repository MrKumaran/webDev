let countEL = document.getElementById("count")
let count = countEL.innerText
let welcomeEl = document.getElementById("welcome-el")
let name = " Braverat"
let greeting = "Welcome back!"
let previous = document.getElementById("previous")
welcomeEl.innerText = greeting + ',' + name


function increment(){
  count += 1
  countEL.innerText = count
}

function clearCount(){
  count = 0
  countEL.innerText = count
}

function saveCount(){
  previous.innerText += count + " - "
  console.log(count)
  count = 0
  countEL.innerText = count

}


