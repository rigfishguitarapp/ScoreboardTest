let countH = 0
let countG = 0
let hscoreEl = document.getElementById("hscore-el")
let gscoreEl = document.getElementById("gscore-el")


function homeAdd1() {
    countH += 1
    hscoreEl.textContent = countH 
    
}

function homeAdd2() {
    countH += 2
    hscoreEl.textContent = countH 
}

function homeAdd3() {
    countH += 3
    hscoreEl.textContent = countH 
}

function guestAdd1() {
    countG += 1
    gscoreEl.textContent = countG 
}

function guestAdd2() {
    countG += 2
    gscoreEl.textContent = countG
}

function guestAdd3() {
    countG += 3
    gscoreEl.textContent = countG 
}