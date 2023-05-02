let bienvenue = document.querySelector(".bienvenue");
let btnStock = document.getElementById("btnstock");
let btnConsult = document.getElementById("btnconsultation");
let btnRetour = document.getElementById("retour");
let stock = document.querySelector(".gestion")
let gestion = document.querySelector(".consultation")
let retour = document.getElementById("retour")



btnStock.addEventListener("click", function () {
    bienvenue.style.display = "none";
    stock.style.display = "flex";
    gestion.style.display = "none";
    retour.style.display = "flex"


})

btnConsult.addEventListener("click", function () {
    bienvenue.style.display = "none";
    stock.style.display = "none";
    gestion.style.display = "flex";
    retour.style.display = "flex"


})

btnRetour.addEventListener("click", function () {
    bienvenue.style.display = "flex";
    stock.style.display = "none";
    gestion.style.display = "none";
    retour.style.display = "none"


})


    

let produit =document.createElement ("input");
produit.placeholder= "Produit";
stock.appendChild(produit);

let quantite =document.createElement ("input");
quantite.placeholder= "Quantité";
stock.appendChild(quantite);

let prix =document.createElement ("input");
prix.placeholder= "Prix HT";
stock.appendChild(prix);

let marge =document.createElement ("input");
marge.placeholder= "Marge";
stock.appendChild(marge);

let pvht =document.createElement ("input");
pvht.placeholder= "Prix vente TTC";
stock.appendChild(pvht);


let valide =document.createElement ("button");
valide.innerText= "Valider";
stock.appendChild(valide);
valide.style.padding="5px";
valide.style.marginLeft="200px";
valide.style.marginRight="200px";

valide.forEach(element, index => {

    
});
 function filter() {
    
    let allstock = stock.filter((element) => {
        return element.produit.toLowerCase().includes(inputValue.toLowerCase()) ||
            element.quantite.toLowerCase().includes(inputValue.toLowerCase()) ||
            element.prix.toLowerCase().includes(inputValue.toLowerCase()) ||
            element.marge.toLowerCase().includes(inputValue.toLowerCase()) ||
            element.pvht.toLowerCase().includes(inputValue.toLowerCase()) ||
            
    })

 }