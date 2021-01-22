var currentScore = 0
var card = [
    document.getElementById("card1"), 
    document.getElementById("card2"), 
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5"),
    document.getElementById("card6"),
    document.getElementById("card7"),
    document.getElementById("card8"),
    document.getElementById("card9"),
    document.getElementById("card10"),
] 

function iniciaJogo(){
//Armazena os containers dos cards na váriavel indexada pelo id

    for (let i = 0; i < quizDeck.length; i++) {

        card[i].innerHTML = //Pega os containers da variável card de acordo com o estágio do loop [i]; 
        `<div id="questTitle"> 
            <h1>${quizDeck[i].question}</h1>     
        </div>
        <div id="questImg"> 
            <img src="${quizDeck[i].imgsrc}" class="img" alt="image"><br>
        </div>
        <div id="questAlt"> 
            <strong><label for="${quizDeck[i].id1}"><input type="radio" name="${quizDeck[i].nameId}" id="${quizDeck[i].id1}">${quizDeck[i].a}</label></strong><br>
            <strong><label for="${quizDeck[i].id2}"><input type="radio" name="${quizDeck[i].nameId}" id="${quizDeck[i].id2}">${quizDeck[i].b}</label></strong><br>
            <strong><label for="${quizDeck[i].id3}"><input type="radio" name="${quizDeck[i].nameId}" id="${quizDeck[i].id3}">${quizDeck[i].c}</label></strong><br>
            <strong><label for="${quizDeck[i].id4}"><input type="radio" name="${quizDeck[i].nameId}" id="${quizDeck[i].id4}">${quizDeck[i].d}</label></strong><br>
        </div>
        `
        
         
//O Código HTML é exbidos em seus respectivos containers, junto com seus atributos definidos nos Objetos JSON, de acordo com o estágio do loop for [i];
//Ao final, os conteudos dos cards são exibidos em um loop.   
    }

}
iniciaJogo()

var answer
function enviaResposta() {
     answer = [
        document.getElementById("q1altA").checked,
        document.getElementById("q2altC").checked,
        document.getElementById("q3altC").checked,
        document.getElementById("q4altB").checked,
        document.getElementById("q5altD").checked,
        document.getElementById("q6altA").checked,
        document.getElementById("q7altA").checked,
        document.getElementById("q8altB").checked,
        document.getElementById("q9altC").checked,
        document.getElementById("q10altC").checked,
    ]
        for (let j = 0; j < answer.length; j++) {
            if (answer[j]) {
                card[j].innerHTML = `<h1>VOCÊ ACERTOU!</h1>`
                
                currentScore += quizDeck[j].score
            }
            else {
                card[j].innerHTML = card.innerHTML = `<h1>VOCÊ ERROU!</h1>`
                
            }
        }
        var usuario = document.getElementById("usuario").value
        var pontuacao = document.getElementById("pontuacaoFinal")
        localStorage.getItem
        localStorage.setItem(usuario, currentScore)
        pontuacao.innerHTML = `<h1>Sua pontuação total foi:</h1><h1>${currentScore} pontos!</h1>`

}


                
                
           



