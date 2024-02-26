let countH = 0
let countG = 0
let homescoreEl = document.getElementById("homescore-el")
let guestscoreEl = document.getElementById("guestscore-el")


function homeAdd1() {
    countH += 1
    homescoreEl.textContent = countH 
    
}

function homeAdd2() {
    countH += 2
    homescoreEl.textContent = countH 
}

function homeAdd3() {
    countH += 3
    homescoreEl.textContent = countH 
}

function guestAdd1() {
    countG += 1
    guestscoreEl.textContent = countG 
}

function guestAdd2() {
    countG += 2
    guestscoreEl.textContent = countG
}

function guestAdd3() {
    countG += 3
    guestscoreEl.textContent = countG 
}