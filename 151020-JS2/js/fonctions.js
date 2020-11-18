/*==============================
===       LES FONCTIONS      ===
===============================*/

/*Fonctions en math :
math.random : choisi au hasard
math.round : arrondi au plus proche
math.floor : arrondi en dessous
math.ceil: arrondi au dessus


//Je veux faire des conditions successives :
//On demande l'âge d'un "enfant" entre 1 et 18 ans, et en fonction, on annonce dans quel type d'école il est censé se trouver

let ageUser=parseInt(prompt("Donnez l'age de votre enfant (entre 1 et 18 ans)"));
// if (ageUser<3){
// 	alert("vous êtes chez la nounou")
// } else if (ageUser>=3 && ageUser<6){
// 	alert("vous êtes en maternelle");
// 	//comm
// } else if (ageUser>=4 && ageUser<10){
// 	alert("vous êtes en primaire");
// } else if (ageUser>=11 && ageUser<15){
// 	alert("vous êtes au collège");
// }else {
// 	alert("vous êtes au lycée")
// }
//Pour remplacer une grosse succession de else if on peut utiliser "switch" ça sera plus performant car pas d'autre test de fait
switch (ageUser){
	case 0:
	case 1:
	case 2:
		alert("vous êtes chez la nounou");
	break;
	case 3:
	case 4:
	case 5:
		alert("vous êtes à la maternelle");
	break;
	case 6:
		alert("vous êtes en CP");
	break;
	case 7:
	case 8:
	case 9:
	case 10:
		alert("vous êtes en primaire");
	break;
	case 11:
	case 12:
	case 13:
	case 14:
		alert("vous êtes au collège");
	break;
	case 15:
	case 16:
	case 17:
	case 18:
		alert("vous êtes au lycée");
	break;
	default:
		alert("vous êtes un adulte");//va gérer tout ce qui ne rentre pas dans les cases
	break;
}
//On peut utiliser les deux en même temps de manière imbriquée sans problème
let compteur=0;
while(true){ //à éviter
	compteur++;
	alert("booo");
	if(compteur>3){
		break; //casse la boucle
	}
}

//---------------------------------
//une fonction c'est un ensemble d'instructions que l'on peut utiliser à volonté
/*function nomFonction () {
	-instruction;
	-instruction;
	-instruction;
	...
}*/
/*Vous avez un robot chez vous, qui vous aide à cuisiner. 
Vous voulez lui apprendre à cuisiner :

function faireBouillir( temp ) {
	-prendre une casserole;
	-remplir la casserole d'eau;
	-poser la casserole sur la plaque;
	-allumer la plaque;
	-attendre que la température de l'eau atteigne temp °C; //Va injecter la variable définie entre les () !
}
faireBouillir(); //il faut lui demander de le faire pour qu'il le fasse, autant de fois qu'on veut qu'il le fasse !
//du coup avec temp il va afficher un message d'erreur si on ne met rien dans les parenthèses ! 
il faudra mettre:
faireBouillir(80); // eau à 80
faireBouillir(100); // eau à 100
*/
function politesse(nomUser){
	alert("bonjour "+nomUser);
}
//N'affichera rien car on a juste défini ! 
politesse("christian");
politesse("amine");
politesse("Otho");

//fonction avec 2 arguments :
function addition(nb1,nb2){
	alert(nb1+"+"+nb2+"="+(nb1+nb2));
}
addition(125,39);
addition(58.89,24.2);

//par exemple, on veut changer math.random qui ne cherche qu'un chiffre entre 0 et 1 (1 exclu) plus simplement :
function randomMinMaxAlert(min, max){
	let nbHasard=Math.round((max-min)*Math.random()+min); //Attention aux majuscules à Math!
	/*reprenons l'exemple précédent :
	1<x<50
	On devait faire min<1+(49*math.random)<max on faisait donc min (1)+ max-min (50-1)xmath.random*/
	alert("nombre pris entre "+min+" et "+max+" : "+nbHasard);
}
randomMinMaxAlert(200,250);

//portée d'une variable (scope) : quand un let est créé dans une accolade, il n'existe qu'à l'intérieur d'elle, donc si on le teste en dehors ça mettra un message d'erreur:
/*ex :
if(2>5){//pour avoir un truc d'office vrai
	let monLet=5;
	console.log("monLet= "+monLet);
}
console.log("monLet= "+monLet); //Message d'erreur

let a donc une portée de bloc => du coup on peut recréer une variable en dehors du bloc
var a une portée plus grande, si on remplace le let par un var dans l'exemple précédent ça apparaitra. MAIS dans une fonction, ça ne fonctionne pas ! Il faudra donc définir la variable en dehors du bloc ! La modification dans la fonction influera sur la variable même si elle a été définie en dehors
*/

//définition :
function randomMinMax(min,max){
	let nbHasard=Math.round((max-min)*Math.random()+min);
	return nbHasard;
	//On pourrait mettre un alert sans problème ! Mais on ne peut rien en faire
}
//On veut enregistrer/ stocker le résultat dans une variable :
let unNombreAuHasard=randomMinMax(1,50);
console.log("unNombreAuHasard="+unNombreAuHasard);

//exo :
//1.créer la fonction carré :
//2.demander à l'utilisateur un nombre, et lui donner son carré

//1.
let nbChoisi=parseInt(prompt("choisissez un nombre"));
function carre(n){
	let resultat=n*n;
	alert("Le résultat est : "+resultat);
}
carre(nbChoisi);
// possibilité de l'écrire :
//function carre(nb) {
// 	return nb*nb;
// }
//let nbUser=parseInt(prompt("choisissez un nombre"));
//alert("le carré de "+nbUser+" est = "+carre(nbUser));

//Bonus fonction puissance (Math.pow(a,b) = a^b)
function puissance(a,b){
	if (b==0){
		return 1;
	}else {
		let resultat=1;
		for (let i=1; i<=b; i++){
			resultat=resultat*a;
		}
		return resultat;
	}
}
// alert("puissance(2,4)= "+puissance(2,4));
let nombr=parseInt(prompt("Donnez un nombre"));
let puiss=parseInt(prompt("Donnez sa puissance"));
alert("puissance("+nombr+","+puiss+")= "+puissance(nombr,puiss));

function coucou(prenom,nb){
	if(nb==undefined|| nb==0){ //alt+maj+L(sous mac) deux fois = OU
		//rend nb complètement facultatif
		alert("coucou "+prenom)
	}else {
		for(i=0; i<nb; i++){
		alert("coucou "+prenom);
		}
	}
}
coucou("Gwen");//prenom deviendra gwen, nb reste facultatif, il est grisé

