let bienvenue = document.querySelector(".bienvenue");
let btnStock = document.getElementById("btnstock");
let btnConsult = document.getElementById("btnconsultation");
let btnRetour = document.getElementById("retour");
let stock = document.querySelector(".gestion");
let gestion = document.querySelector(".consultation");
let retour = document.getElementById("retour");
let form = document.querySelector(".form")

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
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data.get("nom"), data.get("quantite"), data.get("prixachat"), data.get("prixvente"), data.get("tva"), data.get("marheht"), data.get("prixventettc"));
    let info = new Information(data.get("nom"), data.get("quantite"), data.get("prixachat"), data.get("prixvente"), data.get("tva"), data.get("marheht"), data.get("prixventettc"),);

});

function render() {

    let consult = "";
    array.forEach(element => {
        consult = consult + `<p> ${element.nom} ${element.quantite} ${element.prixachat} ${element.prixvente}${element.tva}${element.margeht}${element.prixventettc}  </p>`;

        consultation.innerHTML = consult;

        btnStock.forEach((element, index) => {

            element.addEventListener("click", () => {
                consult.splice(index, 1);

            })
        })

    });

}



// Function constructeur

function Information(nom, quantite, prixachat, prixvente, tva, margeht, prixvente) {
    this.nom = nom;
    this.quantite = quantite;
    this.prixachat = prixachat;
    this.prixvente = prixvente;
    this.tva = tva;
    this.marght = margeht;
    this.prixventettc = prixvente;



}