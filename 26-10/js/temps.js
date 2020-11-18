function maFonction (){
	console.log("voici un petit message");
}
setTimeout(maFonction, 5000); //dans 5 secondes j'appelle la fonction maFonction
//setTimeout permet de différer l'éxécution de ma fonction, avec un temps exprimé en millisecondes

//setInterval permet d'executer une fonction à intervalle régulier :
function autreFonction(){
	console.log("je ne triche pas aux examens...");
}
setInterval(autreFonction, 1000);
//comment arrêter cette fonction ? avec la fonction clearInterval (n'accepte qu'un paramètre, qui est le nom de la fonction), il faudra du coup une variable :

function unTempsDonne(){
	console.log("ce message s'autodétruira dans 12s ...");
}
let timer = setInterval(unTempsDonne, 2000);
//Je veux lancer l'arrêt de la fonction dans la variable timer
function arret(){
	clearInterval(timer);
}
setTimeout(arret, 12000);


//exo chronomètre !  penser à ajouter un innerHTML sur un "p" pour afficher sur la page, et gérer avec un if le passage à la minute, ou avec un modulo
let secondes = 50;	
/* let minute = 0;
function chronometre(){
	secondes ++;
	if (secondes%60!=0){
		let chronom=document.getElementById("chronom");
		chronom.innerHTML=`<p> temps écoulé = ${minute} minutes et ${secondes} secondes</p>`;
	} else {
		minute ++;
		secondes = 0;
	}
}
setInterval(chronometre, 1000); */

function chronometreT(){
	secondes ++;
	let calcMin= Math.floor(secondes/60);
	let calcSec= secondes%60;
	let chronom=document.getElementById("chronom");
	chronom.innerHTML=`<p> temps écoulé ${calcMin} minutes et ${calcSec} secondes </p>`;
}
setInterval(chronometreT, 1000);