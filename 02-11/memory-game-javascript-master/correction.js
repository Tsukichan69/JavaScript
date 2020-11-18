// Pour faire référence à l'id, j'utilise "#"
// Pour faire référence à la classe, j'utilise "."

// Traitement pour que, lors du click, le texte du bouton change:

/*
document
	.querySelector("#play")
	.addEventListener("click", function() {
		console.log(this)
		this.innerHTML = "Recommencer";
	})
*/

const langues = ["Français", "Espagnol", "Allemand"];
// Pour chaque langue présente dans le tableau "langues", l'afficher dans une liste non ordonnée
// 1. Itérer/parcourir dans le tableau
// 2. Pour chaque élément de mon tableau, je créer un li avec la langue donnée


// Solution avec jquery
$("#play").on("click", function (e) {
	// Ici, this fait référence à son antécédant, ce dernier étant le bouton avec l'id "play"
	$(this).text("Recommencer");


	// Génération de notre liste de langue
	for (let i = 0; i < langues.length; i++) {
		// Je séléctionne la langue à la position i
		const langue = langues[i];
	
		// Je créer un nouvel "li"
		const liItem = document.createElement("li");
	
		// J'affecte la valeur du texte à la langue courante
		liItem.innerHTML = langue;
	
		// Je séléctionne ma balise "ul"
		const ul = document.getElementsByTagName("ul")[0];
	
		// J'ajoute mon "li" à ma balise "ul"
		// Lien de la documentation sur la méthode append: https://developer.mozilla.org/fr/docs/Web/API/ParentNode/append
		ul.append(liItem);
	}


});


// Notre objectif est maintenant de parcourir un tableau de nombres.
// Le premier sera 1 et le dernier sera 492

// Pour créer un nouveau tableu, on peut utiliser Array(taille) où taille est la taille désiré du tableau final.
// Documentation Array.from(): https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from
// Cette méthode permet de parcourir un tableau, et de retourner un nouveau tableau modifié
let j = 0;
const arrayOfIds = Array.from(Array(492), function() {
	j = j + 1;
	return j;
})
console.table(arrayOfIds);