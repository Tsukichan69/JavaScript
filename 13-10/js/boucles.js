/*================================
=== LES BOUCLES ===
==================================

c'est une instruction qui permet de répéter un certain nombre de commandes
Il y a plusieurs façons de faire des boucles :
1. while (="tant que"):
while (conditionVraie) {
	-instruction;
	-instruction;
	...
}
mais attention si la condition est toujours vraie la boucle ne s'arrête jamais ! 
*/
let varNum=5
while(varNum<5){
	console.log("coucou n°"+varNum);
	//varNum+=1; varNum va successivement prendre les valeurs allant de 1 à 5, donc ça va s'afficher 5 fois;
	varNum--; //va décrémenter d'1 à chaque boucle
}
/*Si on fait :
let varNum=10
while(varNum<5){
	console.log("coucou n°"+varNum);
	varNum--;
} */
//La console ne va rien afficher car on n'entre pas dans la boucle car la condition de départ est fausse (10 n'est pas inférieur à 5)

/* 2. do... while (= "fais... tant que"), si la condition de départ est fausse il y aura quand même un passage dans la boucle*/
console.log("début de la boucle do... while");
do {
	console.log("dowhile n°"+varNum);
	varNum--;
}while(varNum>5);
console.log("fin de la boucle do... while");

/* 3. boucle "for"
for (initialisation; condition; incrémentation;){
	-instruction;
	-instruction;
	...
} */
console.log("--------boucle for------");
for (let i=0; i<8; i++){
	console.log("boucle for: i="+i);
}

//=======================Exercice=====================\\
/*Faire 3 boucles :
- une while, qui affichera 15 fois le message "Je suis un boss n°" suivi du numéro de passage, allant de 1 à 15.
-une boucle for qui affichera 9 fois: "je suis le petit dinosaure"+ numéro de passage allant de 8 à 16.
-une boucle qui demande 5 fois à l'utilisateur de saisir un nombre (peu importe lequel) à la fin des 5 questions, une alert donne la somme des 5 nombres
*/
console.log("-------boucle n°1------");
let bossBoucle=1;
while(bossBoucle<16) {
	console.log("Je suis un boss n° "+bossBoucle);
	bossBoucle++;
}

console.log("------boucle n°2------");
for(let dino=8; dino<17; dino++){
	console.log("Je suis le petit dinosaure "+dino);
}

// console.log("------boucle n°3------");
// let somme=0;
// for(let reponse=0; reponse<5; reponse++){
// 	//let nombre=prompt("donnez un nombre"); va faire une chaine de caractère donc en les ajoutant on va avoir un résultat en millier !
// 	let choix=parseInt(prompt("Choisissez un nombre :")); //parseInt va convertir le "string" en number, donc permettre une addition !
// 	somme+=choix;
// }
// alert("somme = "+somme)

/* Exercice :
Faire choisir un nombre entre 1 et 50 au navigateur.
Demandez à l'utilisateur de proposer un nombre, et informez-le si le nombre cherché est plus grand ou plus petit.
Le "jeu" ne s'arrête QU'UNE FOIS LE NOMBRE TROUVÉ.
Vous ajouterez un message de félicitations à l'utilisateur. */
//Math.random(); JS va piocher un nombre entre 0 et 1 (peut être 0.57686686585)
//Math.round() va arrondir ce qui est entre ses parenthèses !
let hasard=Math.round(1+49*Math.random());
console.log(hasard);
let choix=parseInt(prompt("choisissez un nombre entre 1 et 50"));
let nbCoups=1;
//Pour vérifier que le nombre proposé est bien entre 1 et 50 :
if(choix>=1 && choix<=50){// && ET logique, les deux conditions doivent être justes pour entrer dans le if, et donc lancer le test
while(choix!=hasard) {
	if(choix<hasard){
		alert("c'est plus grand");
	}else{
		alert("c'est plus petit");
	}
	choix=parseInt(prompt("choisissez un nombre entre 1 et 50"));
	nbCoups++;
}
alert("bravo! Vous avez trouvé en "+nbCoups+" tentatives");
}else {
	alert("Relisez les consignes")
}
//On choisit un nombre au hasard, ensuite tant que le résultat n'est pas atteint on demande de choisir, si le nombre choisi est plus petit on affiche "plus grand" et inversément
/*CORRECTION
let nbMystere=math.round(1+49*math.random());
//L'ordinateur choisit un chiffre au hasard
let nbUser=0;
let nbCoups=0;
//On définit de base le nbUser et le nbCoups à 0 pour initialiser le jeu
console.log('cheat, le nb mystère est '+nbMystere);
//Triche pour vérifier que ça marche
while (nbUser!=nbMystere) {
	//Tant que l'utilisateur ne donne pas le bon nombre la boucle se lance
	if(nbCoups!<8) {
		nbUser=parseInt(prompt("donnez un nombre entre 1 et 50 :"));
		if(nbUser<=50 && nbUser>=1) {
			//Vérifier que l'utilisateur a lu la consigne
			nbCoups++;
			//On ajoute une tentative
			if(nbUser>nbMystere){
				alert("le nombre cherché est plus petit");
			}else if(nbUser<nbMystere){
			alert("le nombre cherché est plus grand");
			}else {
				//par défault, s'il n'est ni plus grand, ni plus petit il est égal
			alert ("bravo ! Vous avez trouvé en "+nbCoups+" tentative");
			} //Penser à mettre des commentaires pour s'y retrouver ! 
		}else {
			//relié au if entre 1 et 50
			alert("relisez la consigne");
		}
	}else {
		alert("Vous avez dépassé le nombre de coups, la réponse était "+nbMystere);
		//nbUser=nbMystere
	}
*/
