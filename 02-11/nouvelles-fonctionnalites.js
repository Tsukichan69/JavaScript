/* var age= 30;
if (age <= 25) {
	console.log("Tu as accès à la carte jeune");
} else {
	console.log("tu as une carte classique");
}
age<=25 ? console.log("tu as accès à la carte jeune") : console.log("tu as une carte classique");
//Pour tester plusieurs hypothèses :
age <=25 
	? (age <= 12 ? console.log("tu as accès à une réduction demi tarif") : console.log("tu as accès à la carte jeune"))
	: console.log ("tu as une carte classique");
 */

//Utiliser nos premières arrow fonction
//Créer une fonction classique qui permet de retourner l'addition de deux nombres
function addition (a,b){
	const resultat = a+b;
	return resultat;
};
let resultatAddition = addition(5,6);
console.log(resultatAddition);

/* const additionFlechee = (a,b) => {
	const resultat = a + b;
	return resultat;
}; */
//Ecriture + simplifiée :
/* const additionFlechee = (a,b) => {
	return a + b;
} */
//dans une fonction fléchée, si le corps de la fonction ne possède qu'une et une seule ligne, et que ce dernier est un retour de fonction (return), dans ce cas on peut simplifier la notation en écrivant un retour implicite 
const additionFlechee = (a,b) => a + b;

let resultatAdditionFlechee = additionFlechee(5,22);
console.log(resultatAdditionFlechee);

//rappel sur les objets :
/* const monObjet = {
	cle:valeur,
} */

//Créer une fonction qui retourne l'état de l'eau dans un objet en fonction des températures :
/* const etatEau (temp) => {
	if (temp >=100) {
		return {etat : vapeur};
	} else if (temp <= 0){
		return {etat : glace};
	} else {
		return {etat : eau};
	}
}
let exo = etatEau(50);
console.log(exo); */

//CORRECTION

/* version longue
function h2o(temp=1){
	let etat = null //L'état va changer donc let
	if (temp<=0){
		etat = "glace";
	}else if (temp<100){
		etat="liquide";
	}else {
		etat="vapeur";
	}
	return{
		etat : etat; //le premier et le deuxième état sont différents ! 
	}
} */
//version courte
const h2o = (temp=1) => {
	let etat = null //L'état va changer donc let
	if (temp<=0){
		etat = "glace";
	}else if (temp<100){
		etat="liquide";
	}else {
		etat="vapeur";
	}
	return{
		etat : etat //le premier et le deuxième état sont différents ! car c'est un objet que l'on veut retourner (consigne)
	}
};
// Dans un objet, lorsque la clé et la valeur possèdent le même nom, alors on peut utiliser une version raccourcie pour les écrire :
const firstname = "Fabio";
const lastname = "Ginja Domingues";
const job = "Développeur";
/* 
const me = {
	firstname: firstname,
	lastname: lastname,
	work: job,
}
console.table(me); 
On pourrait écrire plus simplement :*/
const me = {
	firstname,
	lastname,
	work :job, // Ne fonctionne pas si la clé et la valeur n'ont pas le même nom !
}
console.table(me);