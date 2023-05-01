let bienvenue = document.querySelector(".bienvenue");
let btnStock = document.getElementById("btnstock");
let btnConsult = document.getElementById("btnconsultation");
let btnRetour = document.getElementById("retour");
let stock = document.querySelector(".gestion")
let gestion = document.querySelector(".consultation")
let retour = document.getElementById("retour")


// Bouton Menu Gestion Stock
btnStock.addEventListener("click", function () {
    bienvenue.style.display = "none";
    stock.style.display = "flex";
    gestion.style.display = "none";
    retour.style.display = "flex"


})
//Bouton Menu Consultation Stock
btnConsult.addEventListener("click", function () {
    bienvenue.style.display = "none";
    stock.style.display = "none";
    gestion.style.display = "flex";
    retour.style.display = "flex"


})
//Bouton Retour
btnRetour.addEventListener("click", function () {
    bienvenue.style.display = "flex";
    stock.style.display = "none";
    gestion.style.display = "none";
    retour.style.display = "none"


})