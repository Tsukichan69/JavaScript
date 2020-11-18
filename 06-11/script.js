//Script pour calculer une moyenne de notes
//Pour ouvrir node js on ouvre le terminal, on regarde dans quel dossier on est avec ls, ensuite on sélectionne le bon avec cd nomDuDossier, et pour lancer le script on dit node script.js, pour revenir en arrière on fait cd ..
/* 
let notes = [];
notes.push(19,18,16,17,16);
function numAverage(a) {
	var b = a.length,
		c = 0, i;
	for (i = 0; i < b; i++){
	c += Number(a[i]);
	}
	return c/b;
}
numAverage(notes);
 */

let etudiants = [];
let pierre ={
	prenom : "Pierre",
	nom : "Dupont",
	notes : [12,13,16,11]
};
let paul = {
	prenom : "Paul",
	nom : "Dupont",
	notes : [11,10,20,18]
};
let jacques = {
	prenom : "Jacques",
	nom : "Dupont",
	notes : [13,12,14,20]
}
etudiants.push(pierre, paul, jacques);

function calculerMoyenne(tabNotes) {
	let somme = 0;
	for (let i=0; i<tabNotes.length; i++){
		somme+=tabNotes[i];
	}
	// Possibilité de l'écrire : for (let note of tabNotes){
		//somme+= note;}
	if (tabNotes.length>0){
		return somme / tabNotes.length
	}
	return -1; //erreur tableau vide
}
function moyenne(notes){
	return notes.reduce((a,b) => a + b) / notes.length;
};
for (e of etudiants) {
	console.log(`${e.prenom} ${e.nom} a une moyenne générale de ${moyenne(e.notes)}`);
}