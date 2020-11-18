//je veux vérifier qu'un tableau ne contienne pas de doublons :

const prenoms = ["Arthur", "Chloé", "Gwen", "Harold", "Kevin", "Laury", "Loïc", "Otho", "Théo", "Vahe", "Vivien"];

//On souhaite savoir si notre tableau prenoms contient le prénom suivant : "Emma"
/* for (let i = 0; i < prenoms.length; i++) {
	const element = prenoms [i];
	if (element === "Emma"){
		console.log("Emma fait partie du tableau")
	} else {
		console.log("Emma ne fait pas partie du tableau")
	}
}; */

//function Map :
prenoms.map(function (element){
	console.log(element);
});
//cette fonction permet de parcourir un tableau et de retourner chaque élément de ce tableau, particulièrement utile si on veut manipuler un tableau et créer un nouveau tableau

//function Includes :
//Utile pour vérifier si un tableau contient un élément donné, il renverra un true ou un false :
const vivienInclus = prenoms.includes("Vivien");
const emmaInclus = prenoms.includes("Emma");

console.log ("Vivien est - il inclus ?", vivienInclus);
console.log("Emma est - elle incluse ?", emmaInclus);


// Spread Operator : permet de faire une copie superficielle de tous les éléments d'un tableau ou d'un objet
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition
const nouveauPrenoms = ["Fabio",...prenoms, ...prenoms];
console.table(nouveauPrenoms);