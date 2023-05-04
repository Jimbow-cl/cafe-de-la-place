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
    let textdonne = document.querySelector(".textonne");
    passwd.style.display = "block";
    passwd.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && passwd.value == "1") {
            bienvenue.style.display = "none";
            stock.style.display = "flex";
            retour.style.display = "flex";
            passwd.value = "";
            passwd.style.display = "none";
        }
        if (e.key === "Enter" && passwd.value == "1") {
            bienvenue.style.display = "none";
            stock.style.display = "flex";
            retour.style.display = "flex";
            passwd.value = "";
            passwd.style.display = "none";
            form.style.display = "none"
            textdonne.style.display = "none"
            modifybutton.disabled = "true";
            deletebutton.disabled = "true";
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


});

function update(currentIdToUpdate) {
    let information = listing.find(function (element) {
        return element.id == currentIdToUpdate;
    });

    form.elements["currentIdToUpdate"].value = information.id;
    form.elements["produit"].value = information.produit;
    form.elements["nom"].value = information.nom;
    form.elements["quantite"].value = information.quantite;
    form.elements["prixachat"].value = information.prixachat;
    form.elements["prixvente"].value = information.prixvente;
    form.elements["tva"].value = information.tva;
    form.elements["degre"].value = information.degre;
};

function render(array) {
    let tr = "";

    array.forEach((element, index) => {

        tr = tr + `<tr><td>${element.id}</td>
        <td> ${element.produit} </td>
        <td> ${element.nom} </td>
        <td > <input type="number" value="${element.quantite}"  /> </td>
        <td>${element.prixachat}</td>
        <td> ${element.prixvente} </td>
        <td>${element.tva}</td>
        <td> ${element.margeht} </td>
        <td> ${element.prixttc}</td>
        <td> ${element.degre} </td>
        <td><button class="modifybutton" onclick="update(${element.id})">Modifier</button></td>
        <td><button class="deletebutton">Supprimer</button></td>`;

    })

    info.innerHTML = tr;

    //bouton suprime liste
    let btnsupp = document.querySelectorAll(".deletebutton");
    btnsupp.forEach((element, index) => {
        element.addEventListener("click", () => {
            listing.splice(index, 1);
            console.log(listing);
            localStorage.setItem("cafe", JSON.stringify(listing));
            render(listing);
        });
    });
    //bouton modifier liste
    let btnmod = document.querySelectorAll(".modifybutton");

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
        data.get("produit"),
        data.get("degre")
    );
    let information;
    if (data.get("currentIdToUpdate") == "") {
        information = new Information(
            Date.now(),
            data.get("nom"),
            data.get("quantite"),
            data.get("prixachat"),
            data.get("prixvente"),
            data.get("tva"),
            data.get("margeht"),
            data.get("prixttc"),
            data.get("produit"),
            data.get("degre")
        );
        listing.push(information);
    } else {
        let currentIdToUpdate = data.get("currentIdToUpdate");
        information = listing.find(function (element) {
            return element.id == currentIdToUpdate;
        });
        information.nom = data.get("nom");
        information.quantite = data.get("quantite");
        information.prixachat = data.get("prixachat");
        information.prixvente = data.get("prixvente");
        information.tva = data.get("tva");
        information.margeht = data.get("margeht");
        information.prixttc = data.get("prixttc");
        information.produit = data.get("produit");
        information.degre = data.get("degre");
    }
    form.reset();
    localStorage.setItem("listing", JSON.stringify(listing));
    render(listing);
    
});

// Function constructeur

function Information(
    id,
    nom,
    quantite,
    prixachat,
    prixvente,
    tva,
    margeht,
    prixttc,
    produit,
    degre
) {
    this.id = id;
    this.nom = nom;
    this.quantite = quantite;
    this.prixachat = prixachat + "€";
    this.prixvente = prixvente + "€";
    this.tva = tva + "%";
    this.margeht = prixvente - prixachat + "€";
    this.prixttc = prixvente * (1 + tva / 100) + "€";
    this.produit = produit;
    this.degre = degre;

}



