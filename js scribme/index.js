let countEL = document.getElementById("count")
let count = countEL.innerText
/*
console.log(count);

let myAge = 22;
console.log(myAge);

let humanToDogRatio = 7;
console.log(myAge * humanToDogRatio);
*/

function increment(){
  count += 1
  countEL.innerText = count
}

function clearCount(){
  count = 0
  countEL.innerText = count
}
