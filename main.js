let bienvenue = document.querySelector(".bienvenue");
let btnStock = document.getElementById("btnstock");
let btnConsult = document.getElementById("btnconsultation");
let btnRetour = document.getElementById("retour");
let stock = document.querySelector(".gestion");
let gestion = document.querySelector(".consultation");
let retour = document.getElementById("retour");
let form = document.querySelector(".form")
let info = document.querySelector(".info")

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
// création de la fonction pour calculer la marge faite 
function calculer(prixvente, prixht) {
    let calcul = prixvente - prixht;
    return calcul;
}

// Création de la fonctio qui permeettra de calculer le prix ttc
function ttc(prixvente, tva) {
    let ttc = prixvente * tva;
    return ttc;
}



// Appui sur le bouton Submit avec EPreventDefault
submit.addEventListener("click", function (e) {
    e.preventDefault();
    let marge = calculer(inputprixdeventeHT.value, inputPrixdeVenteHT.value);
    let prixtaxer = ttc(inputPrixdeVenteHT.value, tva.value);



});

let listing;
// recuperation du local storage
if (localStorage.getItem("listing") == null) {

    listing = [];
} else {
    listing = JSON.parse(localStorage.getItem("listing"));
    render(listing);
}

function render(array) {

    let li = "";

    array.forEach((element, index) => {
        li = li + `<li> ${element.nom} ${element.quantite} ${element.prixachat} ${element.prixvente}${element.tva}${element.margeht}${element.prixttc}<button class="deleteButton">Supprimer</button></li>`;

    })

    info.innerHTML = li;

    //bouton suprime liste
    let btnsupp = document.querySelectorAll(".deleteButton");
    btnsupp.forEach((element, index) => {
        element.addEventListener("click", () => {
            listing.splice(index, 1);
            console.log(listing);

            render(listing);
        });
    })

}



// Appui sur le bouton Submit avec EPreventDefault
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data.get("nom"), data.get("quantite"), data.get("prixachat"), data.get("prixvente"), data.get("tva"), data.get("margeht"), data.get("prixttc"));
    let information = new Information(data.get("nom"), data.get("quantite"), data.get("prixachat"), data.get("prixvente"), data.get("tva"), data.get("margeht"), data.get("prixttc"),);

    listing.push(information);
    localStorage.setItem("listing", JSON.stringify(listing));
    render(listing);

});

// Function constructeur

function Information(nom, quantite, prixachat, prixvente, tva, margeht, prixttc) {
    this.nom = nom;
    this.quantite = quantite;
    this.prixachat = prixachat;
    this.prixvente = prixvente;
    this.tva = tva;
    this.margeht = margeht;
    this.prixttc = prixttc;

}
