let bienvenue = document.querySelector(".bienvenue");
let btnStock = document.getElementById("btnstock");
let btnConsult = document.getElementById("btnconsultation");
let btnRetour = document.getElementById("retour");
let stock = document.querySelector(".gestion");
let gestion = document.querySelector(".consultation");
let retour = document.getElementById("retour");
let submit = document.getElementById("submit");
let liste = [];

// Bouton Menu Gestion Stock avec Mot de Passe : 0000
btnStock.addEventListener("click", function () {
    let passwd = document.querySelector("#passwd");
    passwd.style.display = "block";
    passwd.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && passwd.value == "0000") {
            bienvenue.style.display = "none";
            stock.style.display = "flex";
            gestion.style.display = "none";
            retour.style.display = "flex"
            passwd.value = "";
            passwd.style.display = "none";
        }
        else {

        }
    })


});
//Bouton Menu Consultation Stock
btnConsult.addEventListener("click", function () {
    bienvenue.style.display = "none";
    stock.style.display = "none";
    gestion.style.display = "flex";
    retour.style.display = "flex"


});
//Bouton Retour
btnRetour.addEventListener("click", function () {
    bienvenue.style.display = "flex";
    stock.style.display = "none";
    gestion.style.display = "none";
    retour.style.display = "none";



});

// Appui sur le bouton Submit avec EPreventDefault
submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(`Bien Validé.`)

});
//Envoi du Formulaire 
function Refresh() {


}