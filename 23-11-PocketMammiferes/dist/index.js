"use strict";
var tabMammiferes = [];
//Fonction pour remplir le tableau
function addMammifereToTab(ordre, nom, url, tab) {
    var nouveauMammifere = {
        id: tab.length,
        ordre: ordre,
        nom: nom,
        image: url
    };
    tab.push(nouveauMammifere);
    return nouveauMammifere;
}
;
//On met le tableau dans les paramètres parce que comme ça on peut utiliser la fonction pour tout type de tableau
/* Insère le mammifère à une balise dont l'identifiant doit être fourni*/
function addMammifereToDomElement(mammifere, domElementId) {
    var template = "\n\t<div class=\"card text-white bg-secondary mb-3 mr-2 ml-2\" style=\"max-width: 20rem;\">\n\t\t<div class=\"card-header text-center\">Mammif\u00E8re</div>\n\t\t<div class=\"card-body\">\n\t\t\t<h4 class=\"card-title text-center\">" + mammifere.ordre + "</h4>\n\t\t\t<p class=\"card-text text-center\">" + mammifere.nom + "</p>\n\t\t\t<figure><img class=\"w-100\" src=\"" + mammifere.image + "\" alt=\"image de l'animal\"></figure>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" onclick=\"modifierMammifere('" + mammifere.id + "')\">Modifier</button>\n\t\t</div>\n\t</div>";
    var domElement = document.getElementById(domElementId);
    if (domElement) {
        domElement.innerHTML += template;
    }
    else {
        throw Error("Balise html " + domElementId + " non trouvée");
    }
}
//Fonction qui traite le formulaire
//Tab = le tableau dans lequel on ajoute le mammifère
//DomElementId = identifiant de la balise dans laquelle on ajoute le nouveau mammifère
function traiterFormulaire(tab, domElementId) {
    document.getElementById("blocBoutonsEdition").style.display = "none";
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        var ordre = document.getElementById("ordre").value;
        var nom = document.getElementById("nom").value;
        var image = document.getElementById("image").value;
        var nouveauMammifere = addMammifereToTab(ordre, nom, image, tab);
        addMammifereToDomElement(nouveauMammifere, domElementId);
    });
}
;
function modifierMammifere(identifiantMammifere) {
    var mam = tabMammiferes.find((function (m) { return m.id === parseInt(identifiantMammifere); }));
    document.getElementById("ordre").value = mam.ordre;
    document.getElementById("nom").value = mam.nom;
    document.getElementById("image").value = mam.image;
    document.getElementById("submit").style.display = "none";
    document.getElementById("blocBoutonsEdition").style.display = "block";
}
;
function reinitialiserFormulaire(ordre, nom, url) {
    if (ordre === void 0) { ordre = ""; }
    if (nom === void 0) { nom = ""; }
    if (url === void 0) { url = ""; }
    document.getElementById("ordre").value = ordre;
    document.getElementById("nom").value = nom;
    document.getElementById("image").value = url;
}
;
function annulerEdition() {
    reinitialiserFormulaire();
}
function initApp() {
    addMammifereToTab("Monotrèmes", "Ornithorynque", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dN6g07qo2kg839evxMn6jgHaFf%26pid%3DApi&f=1", tabMammiferes);
    addMammifereToTab("Carnivore", "Chat", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r6S5AKv5OICLrJ1I1BoASwHaJE%26pid%3DApi&f=1", tabMammiferes);
    addMammifereToTab("Lagormorphe", "Lapin", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4C6eiULamSW7ce_D3anVPgHaHa%26pid%3DApi&f=1", tabMammiferes);
    addMammifereToTab("Marsupial", "Kangourou", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JRj6YO1IyBOetAUKrVmBoQAAAA%26pid%3DApi&f=1", tabMammiferes);
    addMammifereToTab("Ruminant", "Vache", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.46z0U6lfrJT5ei7Tz3c5sQHaD5%26pid%3DApi&f=1", tabMammiferes);
    for (var _i = 0, tabMammiferes_1 = tabMammiferes; _i < tabMammiferes_1.length; _i++) {
        var m = tabMammiferes_1[_i];
        addMammifereToDomElement(m, "listMam");
    }
    ;
    traiterFormulaire(tabMammiferes, "listMam");
}
;
initApp();
/*




type mammifere = {ordre:string, nom:string, image:URL}
let mamArray : mammifere[] = [];
let ordre = (document.getElementById("ordre") as HTMLInputElement).value;
let nom = (document.getElementById("nom") as HTMLInputElement).value;
let image = (document.getElementById("image") as HTMLInputElement).value;
console.log(ordre, nom, image);
function addMam(ordre:string, nom:string, image:URL){
    mamArray.push({
    ordre = ordre,
    nom = nom,
    image = image
    });
};
let form = document.getElementById("form");
form?.addEventListener("submit", function(e){
    e.preventDefault();
    for (let mammifere of mamArray){
        addToDOM(mammifere);
    }
});
function addToDOM(mammifere : any){
    (document.getElementById("listMam") as HTMLDivElement).innerHTML+=`
        <div class="card text-white bg-secondary mb-3 mr-2 ml-2" style="max-width: 20rem;">
            <div class="card-header text-center">Mammifère</div>
            <div class="card-body">
                <h4 class="card-title text-center">${ordre}</h4>
                <p class="card-text text-center">${nom}</p>
                <figure><img class="w-100" src="${image}" alt="image de l'animal"></figure>
            </div>
        </div>`
}; */ 
