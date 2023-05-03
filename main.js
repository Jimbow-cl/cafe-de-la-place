let bienvenue = document.querySelector(".bienvenue");
let btnStock = document.getElementById("btnstock");
let btnRetour = document.getElementById("retour");
let stock = document.querySelector(".gestion");
let retour = document.getElementById("retour");
let form = document.querySelector(".form");
let info = document.querySelector(".info");
let nom = document.getElementById("nom");
let qdt = document.getElementById("quantite");
let px = document.getElementById("prixachat");
let pv = document.getElementById("prixvente");
let margeht = document.getElementById("margeht");
let prixttc = document.getElementById("prixttc");
let tva = document.getElementById("tva");
let produit = document.getElementById("produit");

// Bouton Menu Gestion Stock avec Mot de Passe
btnStock.addEventListener("click", function () {
    let passwd = document.querySelector("#passwd");
    passwd.style.display = "block";
    passwd.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && passwd.value == "0000") {
            bienvenue.style.display = "none";
            stock.style.display = "flex";
            retour.style.display = "flex";
            passwd.value = "";
            passwd.style.display = "none";
        }
        if (e.key === "Enter" && passwd.value == "1111") {
            bienvenue.style.display = "none";
            stock.style.display = "flex";
            retour.style.display = "flex";
            passwd.value = "";
            passwd.style.display = "none";
            nom.disabled = "true";
            px.disabled = "true";
            pv.disabled = "true";
            tva.disabled = "true";
            produit.disabled = "true";
        } else {
        }
    });
});
//Bouton Retour
btnRetour.addEventListener("click", function () {
    bienvenue.style.display = "flex";
    stock.style.display = "none";
    retour.style.display = "none";
});


let listing;
addEventListener("DOMContentLoaded", () => {
    // recuperation du local storage
    let cafe = JSON.parse(localStorage.getItem("cafe"));

    if (cafe == null) {
        listing = [];

    } else {
        listing = cafe;
        render(listing);
    }


})



function render(array) {
    let li = "";

    array.forEach((element, index) => {
        li = li + `<li> ${element.produit} ${element.nom} ${element.quantite}: Prix achat ${element.prixachat}, Prix vente  ${element.prixvente} <br> Votre marge est de:${element.margeht} <br> Prix TTC est de: ${element.prixttc}<button class="modifybutton">Modifier</button><button class="deleteButton">Supprimer</button></li>`;

    })

    info.innerHTML = li;

    //bouton suprime liste
    let btnsupp = document.querySelectorAll(".deleteButton");
    btnsupp.forEach((element, index) => {
        element.addEventListener("click", () => {
            listing.splice(index, 1);
            console.log(listing);
            localStorage.setItem("cafe", JSON.stringify(listing));
            render(listing);
        });
    });
    //bouton modifier liste
    //  let btnmod = document.querySelectorAll(".modifybutton");
    // btnmod.forEach((element, index) => {
    //      element.addEventListener("click", function () {
    //console.log(listing.quantite"));

    //     })
    //});
}

// Appui sur le bouton Submit avec EPreventDefault
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(form);
    console.log(
        data.get("nom"),
        data.get("quantite"),
        data.get("prixachat"),
        data.get("prixvente"),
        data.get("tva"),
        data.get("margeht"),
        data.get("prixttc"),
        data.get("produit")
    );
    let information = new Information(
        data.get("nom"),
        data.get("quantite"),
        data.get("prixachat"),
        data.get("prixvente"),
        data.get("tva"),
        data.get("margeht"),
        data.get("prixttc"),
        data.get("produit")
    );

    listing.push(information);
    localStorage.setItem("listing", JSON.stringify(listing));
    render(listing);
});

// Function constructeur

function Information(
    nom,
    quantite,
    prixachat,
    prixvente,
    tva,
    margeht,
    prixttc,
    produit
) {
    this.nom = nom;
    this.quantite = quantite;
    this.prixachat = prixachat + "€";
    this.prixvente = prixvente + "€";
    this.tva = tva;
    this.margeht = prixvente - prixachat + "€";
    this.prixttc = prixvente * (1 + tva / 100) + "€";
    this.produit = produit;

}

function Afficher() {
    let saisie = document.getElementById()

}