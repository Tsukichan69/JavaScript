/* ================================
=== fonction anonyme===
==================================*/

//une fonction anonyme est une fonction qui ne possède pas de nom, mais son fonctionnement reste identique à une fonction classique
/*
function(){
	alert('soucis');
}
ça ne fonctionnera pas*/
//on peut se servir d'une variable pour éxécuter ce type de fonction :(on ne s'en sert pas souvent)
let johnny = function(){
	alert('que je t\'aimeuh');
}; //Point virgule ici parce qu'on pourrait tout regrouper sur une seule ligne
//si je veux appeler la fonction je me sers de la variable (qui fait référence à la fonction) et on ajoute les arguments s'il y en a :
johnny();

//Dans la plupart des cas on a besoin d'éxécuter tout de suite ma fonction, je crée donc une fonction anonyme
(function(){
	alert('anonymous!');
}) (); //Je crée ma fonction avec les parenthèses et je l'appelle tout de suite

//-------------------------------
//Pas de lien avec fonction anonyme

/* 1. Créer un petit script qui demande 2 nombres à l'utilisateur, et qui va indiquer le plus grand des deux.

2. Créer une fonction qui demande un nombre. C'est tout.
(si l'utilisateur donne autre chose qu'un nombre, on lui repose la question)
Lorsqu'on obtient bien un nombre, la fonction renvoie un return.
*/

// // // //1.
function lePlusGrand(){
	let nbUser1= prompt("donnez un nombre");
	let nbUser2= prompt("donnez le deuxième nombre, je vous donnerais le plus grand");
	if (nbUser1<nbUser2) {
		alert(nbUser2+" est le plus grand")
	}else if (nbUser1==nbUser2){
		alert("oh ! ils sont égaux !")
	}else {
		alert(nbUser1+" est le plus grand")
	}
}
lePlusGrand();

//2.
function numberOnly() {
	while (true){
		let nbUser=parseInt(prompt("Donnez un nombre")); //pas terrible en terme de performance, il vaut mieux créer la variable en dehors du while et juste l'attribuer dans la boucle
		if(!isNaN(nbUser)){//correspond à isNaN()==false en inversé, le ! contredit, donc ça correspond à si c'est un nombre
			return nbUser; //va arrêter la boucle infinie
		}
	}
}
numberOnly();

function numberOnly2() {
	do {
		var nbUser=prompt("Donnez un nombre, svp"); //var pour que la variable sorte de la boucle do
	}while (isNaN(nbUser));
	return nbUser;
}
numberOnly2();

function isMajor(){
	let ageUser=numberOnlyUltimate("Quel est votre âge ?");
	if(ageUser>=18) {
		alert("vous êtes majeur !");
	}else {
		alert("vous êtes mineur ! dehors !");
	}
}
isMajor();

// fonction utlime pour demander à la personne son age ou autre nombre
function numberOnlyUltimate(question) {
	do {
		var nbUser=prompt(question); //var pour que la variable sorte de la boucle do
	}while (isNaN(nbUser));
	return nbUser;
}
numberOnlyUltimate("Quel est votre âge ?");
numberOnlyUltimate("Quels est votre poids ?");
numberOnlyUltimate("Quelle est votre taille ?");