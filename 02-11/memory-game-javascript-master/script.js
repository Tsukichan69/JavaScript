/* $("#btn").on("click", function (){
	$(this).text("Recommencer");
}); */

/* document
	.querySelector("#btn")
	.addEventListener("click", function (){
		this.innerHTML = "Recommencer";
	})

	Ou avec JQuery : */
/* $("#btn").on("click", function(){
	console.log("this :", this) // va sauter la ligne ! 
	$(this).text("Recommencer");
}); */

const langues = ["Français", "Espagnol", "Allemand"];
//Pour chaque langue présente dans le tableau langues, l'afficher dans une liste non ordonnée :
//1. Itérer chaque langue dans le tableau
//2. pour chaque élément du tableau je crée une li avec la langue donnée :
/* 	for (let index = 0; index < langues.length; index++) {
		const element = langues[index];
		console.log(element);
		const maListe = document.querySelector("ul");
		maListe.innerHTML+=`<li>${element}</li>`;
	}
 */
/* Correction : */
$("#btn").on("click", function(){
	$(this).text("Recommencer");
	for (let i = 0; i < langues.length; i++) {
		//Je séléctionne la langue à la position i
		const langue = langues[i];
		// Je crée un nouvel li :
		const liItem = document.createElement("li");
		//J'affecte la valeur du texte à la langue courante :
		liItem.innerHTML = langue;
		//Je sélectionne ma balise "ul"
		const ul = document.getElementsByTagName("ul")[0]; //car ça me crée un tableau
		//J'ajoute mon "li" à ma balise "ul"
		ul.append(liItem);
	}
});

//Notre objectif est maintenant de parcourir un tableau de nombres :
//Le premier sera 1 et le dernier sera 492
//Pour créer un nouveau tableau, on peut utiliser Array(taille) où taille est la taille désirée du tableau final :
//const arrayOfIds = Array(492);
//ON peut utiliser Array.from pour aller créer une nouvelle instance d'Array, comme ça on peut ajouter un paramètre (ici une fonction pour retourner "toto" pour chaque élément)
let j = 0
const arrayOfIds = Array.from(Array(20), function(){
	j = j + 1;
	return j;
});
console.table(arrayOfIds);
//Création d'une fonction qui va permettre de créer une nouvelle image (balise html avec attributs)
const createImg =(id) => {
	const img = document.createElement("img");
	//J'attribue à cette image une source :
	img.setAttribute("src",`assets/images/${id}.png`);
	img.setAttribute("alt",`pokemon numero ${id}`);
	//je retourne l'image nouvellement créée sinon ça ne sert à rien
	return img;
};
$("#btn").on("click", function (){
	for (let index = 0; index < arrayOfIds.length; index++) {
		const element = arrayOfIds[index];
		const newImg = createImg(element); //On met le paramètre élément pour que tout corresponde dans les fonctions !
		$(".game").append(newImg);
	}
});

//Challenge au lieu d'afficher les 20 premiers on va afficher aléatoirement 10 pokemons différents
function shuffle (array){
	for (let i = array.length; i > 0; i--) {
		let j = Math.floor(Math.random()*(i+1));
		[array[i], array[j]] = [array[j], array[i]];
		
	}
};
shuffle(arrayOfIds);
