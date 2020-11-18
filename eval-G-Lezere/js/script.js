// ========================== 2 Pages ========================== \\
/* $(".selected").on("click", function(e){
	e.preventDefault();
});  => Pour empêcher le rechargement de la page autrement que par le href="#" */

// ========================== Page rechercher ========================== \\
// -------------- Afficher les voitures et ajouter le tooltip -------------- \\

/*Autre méthode, + agréable de décomposer les fonctions ! 
Création du tableau
let carArray = [];
function addCar(image, marque, modèle){
	carArray.push({
		id: identifiant,
		image: image,
		marque: marque,
		modèle: modèle,
	});
};
Ajout au DOM :
function addCarDOM(vehicule){
	document.getElementById("cars").innerHTML+=`
		<div id="vehicule-${vehicule.id}">
			<figure class="tooltip">
				<img src="${vehicule.image}" alt="${vehicule.marque} ${vehicule.modèle}">
				<span class="tooltiptext">${vehicule.marque} ${vehicule.modèle}</span>
			</figure>
			<h4>VW Golf 4z</h4>
		</div>`
}
On peut regrouper tout ce qui suit dans une fonction d'initialisation, ce qui est apprécié pour savoir ce qui est lancé au lancement de la page, on écrit alors :
function initApp(){
addCar("./media/ferrari_488.jpg","Ferrari 488","Ferrari","488");
addCar("./media/vw_golf4.jpg","VW Golf 4z","VW","Golf 4z");
addCar("./media/peugeot_308.jpg","Peugeot 308","Peugeot","308");
addCar("./media/peugeot_rcz.jpg","Peugeot RCZ","Peugeot","RCZ");
addCar("./media/porsche_concept.jpg","Porsche Concept","Porsche","Concept");
Appel à la fonction :
for (let vehicule of carArray){
	addCarDOM(vehicule);
}
}
initApp();
possibilité de l'écrire en (function(){})();

*/
let carArray = [];
function addCar(image, infos, marque, modèle){
	let idCar=image.slice(8,image.length-4);
	carArray.push({
		image: image,
		infos: infos,
		marque: marque,
		modèle: modèle,
		idCar: idCar,
	});
	let myCars=document.getElementById("cars");
	myCars.innerHTML+=`
		<div id="car_${idCar}">
			<figure>
			<img id= "car" src="${image}" alt="Photo d'une voiture ${infos}" title="${infos}">
			</figure>
			<h4>${infos}</h4>
		</div>`;
};
addCar("./media/ferrari_488.jpg","Ferrari 488","Ferrari","488");
addCar("./media/vw_golf4.jpg","VW Golf 4z","VW","Golf 4z");
addCar("./media/peugeot_308.jpg","Peugeot 308","Peugeot","308");
addCar("./media/peugeot_rcz.jpg","Peugeot RCZ","Peugeot","RCZ");
addCar("./media/porsche_concept.jpg","Porsche Concept","Porsche","Concept");

// -------------- Filtrer les voitures -------------- \\
/* Possibilité de récupérer la valeur directe du select sans avoir à mettre un value à chaque option ! */
function filtrerParMarque(){
	let marqueSelectionnee= document.getElementById("selectMarque").value;
	/* Possibilité de boucler sur tous les véhicules encore, avec for(vehicule of carArray*/
	for(let i=0; i<carArray.length; i++){
		let baliseArticle=document.getElementById(`car_${carArray[i].idCar}`);
		if ((carArray[i].marque == marqueSelectionnee || marqueSelectionnee=="tous")){
			baliseArticle.style.display="block";
		} else {
			baliseArticle.style.display="none";
		}
	}
};

/*méthode filter : permet de filtrer ce qui est vrai dans une fonction qui doit renvoyer un booléen :
carArray.filter(vehicule => vehicule.marque === marqueSelectionnee); renvoie un tableau contenant les marques qui correspondent à notre condition 
C'est la version raccourcie de :
(vehicule) => { return vehicule.marque === marqueSelectionnee};

Pour compiler avec le toutes marques on écrit
let vehiculesFiltres = carArray.filter(vehicule => marqueSelectionnee === "Toutes marques" ? true : vehicule.marque=== marqueSelectionnee);
for (let vehicule of vehiculesFiltres){document.getElementById("vehicule-"+vehicule.id).style.display="block";}

Avec au début de la fonction le fait de tous les passer en none !*/
