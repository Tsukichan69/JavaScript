/*
Exercice : 
1. À chaque fois que l'on entre le nom, prénom et age de la personne; en cliquant sur le bouton "ajouter la personne", la personne doit s'ajouter à la liste des personns "inscrites".
à vous de créer la fonction validerNouvellePersonne(event);

2. Recherche :
Si on fait une recherche sur le nom d'une personne répertoriée, une premiere boite d'alerte vient nous donner les personnes qui possèdent ce nom.
une 2e boite d'alerte nous donne son âge.

Si on fait une recherche sur l'âge d'une personne répertoriée, une premiere boite d'alerte vient nous donner le nombre de personnes qui ont cet âge.
une 2e boite d'alerte nous dit de qui il s'agît.
*/
//1. 
let tabPersonnes=[];
tabPersonnes.push({
	nom: "LEZERE",
	prenom: "Gwen",
	age: "34",}, {
	nom: "LEZERE",
	prenom: "Gwen",
	age: "25",
	}, {
	nom: "LEZERE",
	prenom: "Gwen",
	age: "28",
	}, {
	nom: "utfgiuf",
	prenom: "Gwen",
	age: "25",
	});
	console.log(tabPersonnes);

function validerNouvellePersonne(e){
	e.preventDefault();
	let nomNouvellePersonne= document.getElementById("nom").value;
	let prenomNouvellePersonne= document.getElementById("prenom").value;
	let ageNouvellePersonne= document.getElementById("age").value;
	let listePersonnes = document.getElementById("resultat");
	listePersonnes.innerHTML+=`<li> ${nomNouvellePersonne} ${prenomNouvellePersonne} ${ageNouvellePersonne}</li>`;
	tabPersonnes.push({
		nom: nomNouvellePersonne,
		prenom: prenomNouvellePersonne,
		age: ageNouvellePersonne,
	});
	console.log(tabPersonnes);
};

function rechercherParAge(e){
	e.preventDefault(); 
	let ageCherche= document.getElementById("rechercheAge").value;
	let ageOK=[];
	for(let id in tabPersonnes) {
		if (tabPersonnes[id].age==ageCherche || tabPersonnes[id].age==age){
			ageOK.push(tabPersonnes[id]);
		} 
	}
	if (ageOK.length==0){
		alert ("déso");
	}else {
		for(let id in ageOK){
			alert(ageOK[id].nom+" correspond à l'âge demandé")
		}
	}
	console.log(ageOK);
}; 
//for(let id in tabPersonnes)