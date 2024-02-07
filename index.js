let scoreEl = document.getElementById("score")
let scoreEt = document.getElementById("score2")

let hscore = 0
let gscore = 0

function add1() {
    scoreEl.textContent = hscore +=1
}
function add2() {
    scoreEl.textContent = hscore +=2
}
function add3() {
    scoreEl.textContent = hscore +=3
}

function addOne() {
    scoreEt.textContent = gscore +=1
}
function addTwo() {
    scoreEt.textContent = gscore +=2
}
function addThree() {
    scoreEt.textContent = gscore +=3
}
function reset() {
   scoreEl.textContent = hscore = 0
   scoreEt.textContent = gscore = 0
}