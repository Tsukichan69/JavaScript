/*==================================
=== Les tableaux ===
===================================*/

//--------------Introduction : les propriétés et les méthodes-----------
//Propriété : une variable au sein de l'objet = quelque chose qui va qualifier l'objet, ou qui va nous renseigner

//Méthode : une fonction au sein de l'objet = quelque chose qui permet de modifier l'objet

let maString="Bonjour, je m'appelle Christian";
//On peut appliquer une propriété, comme .length qui permet de connaître le nombre de caractères
console.log(maString.length);
//On peut appliquer une méthode, comme toUpperCase() qui va mettre en majuscule
console.log(maString.toUpperCase());
console.log(maString);//ça ne modifie pas la variable ! 
//existe aussi .toLowerCase() pour passer en minuscules

console.log("---------tableaux--------");
let unTableau=[]; //ici un tableau, vide
let unAutreTableau=[100,5,100.568,85]; //tableau de nombre
let encoreTableau=["Loic", 24, 69005, true]; //tableau mixte
//Je veux récupérer des données à l'intérieur d'un tableau, chaque valeur est à une position, la première est 0 !!
//ex pour récupérer le code postal, c'est à la position n°2 de encoreTableau : 0,1,2,3
console.log(encoreTableau[2]);
console.log(encoreTableau[0]);
//Pour changer une valeur du tableau, on va faire une nouvelle affectation :
encoreTableau[0]="Chloé"; //mais ne changera pas la ligne du dessus ! 

//Une méthode pour les tableaux : push() ajoute un élément en fin de tableau :
encoreTableau.push("0123456789");
encoreTableau.push(25,169,"12 rue du chemin neuf");
console.table(encoreTableau); //+ "élégant"

//méthode inverse : pop() retire le dernier élément du tableau
encoreTableau.pop(); //retire l'adresse

//Pour le début du tableau : shift() enlève au début du tableau, unshift() ajoute au début
encoreTableau.shift();
console.log(encoreTableau);

let eltSupprime=encoreTableau.shift();

encoreTableau.unshift("Kévin");
console.log(encoreTableau);

let mesChersEtudiants="Théo Loïc Amine Laury Harold Otho Vahé";
let mceArray=mesChersEtudiants.split(" "); //Array = tableau en anglais, ce que l'on met dans les parenthèses sera ce qui séparera les éléments du tableau. Par exemple si on met split("L"); on aura un élément Théo espace, un oïc espace Amine espace, aury et la fin
console.log(mceArray);

//Une méthode qui fait l'inverse : join()
let myString=mceArray.join("-"); //il va en faire une chaine de caractères séparés par des tirets
console.log(myString);

//typeof permet de savoir de quel type est notre objet :
console.log(typeof myString); //string
console.log(typeof mceArray);// array
console.log(typeof eltSupprime); //number

//rappel : ce qu'on récupère d'un prompt est toujours un string !:
let essai=prompt("écrivez un truc");
alert(typeof essai); // string, même si on tape un nombre

//pour connaitre la longueur d'un tableau
console.log(mceArray.length);

let untruc=2562+"Amine"; //String : "2562Amine"

//comment parcourir un tableau ?
for (let i=0; i<mceArray.length; i++){
	console.log("mceArray["+i+"]="+mceArray[i]);
}

//Jusqu'à présent on a créé un tableau à 1 dimension, mais on peut créer des tableaux à plusieurs dimensions :
//Je veux un tableau qui répertorie les infos de mes étudiants :
// Chaque étudiant a un tableau avec nom, prénom, âge, adressemail
//tableau "DevWeb2020" qui contient tout mes étudiants:

let devWeb2020=[
	["Stival", "Théo", 26, "theo@stival.com"],
	["Gueret", "Loïc", 24, "loic@gmail.com"],
	["Faure", "Kevin", 29, "kfaure@yahoo.fr"]
];
//si je veux récupérer l'âge de Loïc
console.log(devWeb2020[1][2]);
//Pour parcourir un tableau à 2 dimensions on fait une double boucle for : un for dans un for
let nbCasesDuTableau=devWeb2020.length * devWeb2020[0].length;
//3 équivaut au nombre de lignes
//4 équivaut au nombre de colonnes, on aurait pu mettre 0 ou 1 ou 2 vu qu'ils ont tous la même longueur
for (let i=0; i<devWeb2020.length; i++){
	for (let j=0; j<devWeb2020[0].length; j++){
		console.log(devWeb2020[i][j]);
	}
}
/* 
i=0 0<3
	j=0 j<4
		devWeb2020[0][0];
		j++
	j=1 j<4
		devWeb2020[0][1];
		j++
	j=2 j<4
		devWeb2020[0][2];
		j++
	j=3 j<4
		devWeb2020[0][3];
		j++
	j=4 j<4 false
	fin de la boucle
i=1 1<3
	j=0 j<4
		devWeb2020[1][0];
		j++
	j=1 j<4
		devWeb2020[1][1];
		j++
	j=2 j<4
		devWeb2020[1][2];
		j++
	j=3 j<4
		devWeb2020[1][3];
		j++
	j=4 j<4 false
	fin de la boucle
ETC
*/

//1. Demandez à l'utilisateur sa date de naissance sous forme JJ/MM/AAAA.
//Répondez lui son mois de naissance (en toutes lettres)
//1.2 Donnez lui son signe du zodiac :)

let dateNaissance=prompt("quelle est votre date de naissance ? format jj/mm/aaaa");
let infos=dateNaissance.split("/");
console.log(infos);
console.log(typeof infos[1]); //string
let month=parseInt(infos[1]); //passe en number, va permettre d'éviter les erreurs si l'utilisateur n'entre qu'un chiffre pour son mois de naissance
/* Expressions régulières : va permettre de reconnaître ce qui est entré dans le site, mais est compliqué à apprendre */
switch(month){ //sera plus propre que infos[1] car il devra aller chercher à chaque fois dans le tableau sinon
//le switch fait une comparaison stricte === ("1"==1 true // versus // "1"===1 false)
	case 1: // Penser à mettre des guillemets si ce sont des chaînes de caractères !!!!!!! Mais corrigé par le parseInt
		alert("Janvier");
		break;
	case 2:
		alert("Février");
		break;
	case 3:
		alert("Mars");
		break;
	case 4:
		alert("Avril");
		break;
	case 5:
		alert("Mai");
		break;
	case 6:
		alert("Juin");
		break;
	case 7:
		alert("Juillet");
		break;
	case 8:
		alert("Août");
		break;
	case 9:
		alert("Septembre");
		break;
	case 10:
		alert("Octobre");
		break;
	case 11:
		alert("Novembre");
		break;
	case 12:
		alert("Décembre");
		break;
}

/* dhthhfhh
hdthhthtfh  Mettre en commentaire en javascript "shift alt a"*/

/* Autre méthode vraiment pas mal !
let dateNaiss=prompt("Donnez votre naissance sous forme jj/mm/aaaa");
let result=dateNaiss.split("/");
let month=parseInt(result[1]);
let monthArray=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
let birthMonth=monthArray[month-1]; //On va chercher dans le tableau monthArray le mois correspondant à la réponse de l'utilisateur puis retirer 1 car on commence de 0 !
let zodiac=["capricorne", "verseau", "poisson", "bélier", "taureau", "gémeaux", "cancer", "lion", "vierge", "balance", "scorpion", "sagitaire", "capricorne"];
let zodiacUser;
switch (month){
	case 1:
	case 3:
	case 4:
		if(day<=20){
			zodiacUser=zodiac[month-1];
		}else {
			zodiacUser=zodiac[month];
		}
	break;
	case 2:
		if(day<=19){
			zodiacUser=zodiac[month-1];
		}else {
			zodiacUser=zodiac[month];
		}
	break;
	case 5:
	case 6:
	case 12:
		if(day<=21){
			zodiacUser=zodiac[month-1];
		}else {
			zodiacUser=zodiac[month];
		}
	break;
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		if(day<=22){
			zodiacUser=zodiac[month-1];
		}else {
			zodiacUser=zodiac[month];
		}
	break;
}
alert("vous êtes né "+birthMonth+" et vous êtes "+zodiacUser); */