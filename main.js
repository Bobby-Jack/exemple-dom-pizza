//initialisation de la logique du jeu
let pizza = 0
let chrono = 3
let bestScore = 0

//récupération des éléments html
let btnClick = document.getElementById('btnClick')
let pizzaCount = document.getElementById('pizzaCount')
let chronoDiv = document.getElementById('chronoDiv')
let score = document.getElementById('score')

//fonction d'incrémentation du score
//et création du poper
function plusPizza(){
    pizza++
    pizzaCount.innerText = pizza
    //création du poper
    let poper = document.createElement("span")
    poper.innerText = "+1🍕"
    poper.classList.add('poper')
    btnClick.append(poper)
    //après 1 seconde, le poper est retirer de html
    setTimeout(()=>{
        poper.remove()
    }, 1000)
}

// récuperation du meilleur score si il est présent
if (localStorage.getItem("scorePizza")) {
    bestScore = parseInt(localStorage.getItem("scorePizza"))
}

//application des valeurs js dans le html
score.innerText = bestScore
chronoDiv.innerText = chrono
pizzaCount.innerText = pizza

//création de l'écouteur d'evnet au bouton
btnClick.addEventListener('click',plusPizza)

//initialisation du chrono et de la logique de fin du jeu
let interval = setInterval(() => {
    chrono --
    chronoDiv.innerText = chrono

    //fin de la partie
    if (chrono === 0) {
        //suppression de l'interval en cache
        clearInterval(interval)
        //suppression de l'event 
        btnClick.removeEventListener("click",plusPizza)
        //si un score est stocké en local storage 
        //elle est comparé avec le score réalisé dans cette partie
        if (localStorage.getItem("scorePizza")) {
            let previousScore = parseInt(localStorage.getItem("scorePizza"))
            // si le score actuel est dépassé il est remplacé par l'actuel.
            if (previousScore< pizza) {
                alert("new record !")
                localStorage.setItem("scorePizza", pizza)
            }
        }
    }
}, 1000);



