function loadRecord() {
    let campoRecord = document.getElementById("recordAtual")
    campoRecord.innerHTML = `<h1>Recorde Atual: ${0}</h1>`
    if (localStorage.getItem("recordAtual") != null &&
    localStorage.getItem("recordAtual") != undefined) {
        campoRecord.innerHTML = `<h1>Recorde Atual: ${localStorage.getItem("recordAtual")}</h1>`
    }
}

function newRecord() {
    localStorage.setItem("recordAtual", currentScore)
    loadRecord()
}

loadRecord()