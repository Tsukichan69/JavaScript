// Pour faire référence à l'id, j'utilise "#"
// Pour faire référence à la classe, j'utilise "."

//Créer une fonction qui nous donne un nombre aléatoire entre 1 et n (où n est notre nombre maximum)
// Pour ne pas avoir à gérer les exclusions on peut faire un math.ceil pour arrondir au supérieur, comme ça on sera entre 1 et 492 ! Math.ceil(Math.random()*492)
const getRandomNumber = (n) => {
	const randomNumber = Math.ceil(Math.random()*n);
	 // console.log(randomNumber); attention si on passe le console.log après le return ça ne fonctionne pas !  On pourrait par contre écrire plus bas console.log(getRandomNumber(50)) ! Tant qu'il y a un return
	return randomNumber;
}
/* getRandomNumber(10);
getRandomNumber(50); */	

// Note : on pourrait réduire en retournant directement le résultat ! en passant par :
// return Math.ceil(Math.random()*n); ! et du coup racourcir encore en notant :
// const getRandomNumber = (n) => Math.ceil(Math.random()*n);
//car il n'y a qu'un return dans la fonction

// Traitement pour que, lors du click, le texte du bouton change:
/* document
	.querySelector("#play")
	.addEventListener("click", function() {
		console.log(this)
		this.innerHTML = "Recommencer";
	}) */

//Challenge : je veux que lorsque je clique sur recommencer les pokemons se vident
// Solution avec jquery
$("#play").on("click", function (e) {
	// Ici, this fait référence à son antécédant, ce dernier étant le bouton avec l'id "play"
	$(this).text("Recommencer");
});

// Fonction générant une liste de langues
const generateLanguages = () => {
	// Pour chaque langue présente dans le tableau "langues", l'afficher dans une liste non ordonnée
	// 1. Itérer/parcourir dans le tableau
	// 2. Pour chaque élément de mon tableau, je créer un li avec la langue donnée
	const langues = ["Français", "Espagnol", "Allemand"];

	// Je séléctionne ma balise "ul"
	const ul = document.createElement("li");

	// Génération de notre liste de langue
	for (let i = 0; i < langues.length; i++) {
		// Je séléctionne la langue à la position i
		const langue = langues[i];

		// Je créer un nouvel "li"
		const liItem = document.createElement("li");

		// J'affecte la valeur du texte à la langue courante
		liItem.innerHTML = langue;

		// J'ajoute mon "li" à ma balise "ul"
		// Lien de la documentation sur la méthode append: https://developer.mozilla.org/fr/docs/Web/API/ParentNode/append
		ul.append(liItem);
	}

	// Ajout de la liste au body
	document.querySelector("body").append(ul);
};

// Notre objectif est maintenant de parcourir un tableau de nombres.
// Le premier sera 1 et le dernier sera 492

// Pour créer un nouveau tableu, on peut utiliser Array(taille) où taille est la taille désiré du tableau final.
// Documentation Array.from(): https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from
// Cette méthode permet de parcourir un tableau, et de retourner un nouveau tableau modifié
let j = 0;
const arrayOfIds = Array.from(Array(492), function () {
	j = j + 1;
	return j;
});

// Si on souhaite afficher un tableau ou en objet dans la console, on peut utiliser console.table au lieu de console.log:
/* console.table(arrayOfIds); */

// Création d'une fonction qui va me permettre de créer une nouvelle image (balise html avec attributs)
const createImg = id => {
	// Création de la balise img
	const img = document.createElement("img");

	// J'attribue à cette image une source
	img.setAttribute("src", `assets/images/${id}.png`);
	img.setAttribute("alt", `pokemon numero ${id}`);
	img.setAttribute("pokedex", id);
	// Je retourne l'image nouvellement créée
	return img;
};

let essaiUtilisateur = []; // Pour stocker le numéro des cartes quand l'utilisateur essaie

//Challenge : créer une fonction permettant de générer un aside ayant la classe "card"
let userFound = [];

const createCard = id => {
	const aside = document.createElement("aside");
	const divFaceCachee = document.createElement("div");
	const pattern = document.createElement("img");
	const imagePokemon = createImg(id);
	aside.setAttribute("class","card");
	aside.setAttribute("pokedex", id); // Pour pouvoir stocker le numéro du pkm !
	divFaceCachee.setAttribute("class","background");
	pattern.setAttribute("src","./assets/images/pattern.jpg");
	imagePokemon.setAttribute("class","pokemon"); // Avec JQuery : $(imagePokemon).addClass("pokemon");
	//Pour insérer la divFaceCachee dans le aside :
	$(aside).append(imagePokemon);
	$(aside).append(divFaceCachee); // On ne pourrait pas mélanger avec createElement ! 
	$(divFaceCachee).append(pattern);
	//si je clique sur la divFaceCachee je veux ajouter la class reveal au parent
	$(divFaceCachee).on("click", function(){
		/* console.log("j'ai cliqué sur une carte"); pour vérifier que ça marche */
		const pokemonNumber = $(aside).attr("pokedex"); // Pour récupérer l'attribut pokedex ! et ainsi avoir directement le numéro du pokemon 

		//La fonction hasClass permet de vérifier si l'élément sélectionné possède la classe qu'on passe en paramètre, cette fonction retourne un booléen :
		const isRevealed = $(aside).hasClass("reveal");
		if (isRevealed) return null //dit que ça s'arrête si c'est vrai

		if (essaiUtilisateur.length < 2){
			//J'ai le droit de retourner des cartes :
			essaiUtilisateur.push(pokemonNumber); // J'ajoute l'id du pokemon dans le tableau de l'essaiUtilisateur
			console.log(essaiUtilisateur);
			$(aside).addClass("reveal"); // bloque le fait d'en retourner encore
		}
		if(essaiUtilisateur.length === 2) {
			//Ici je sais que l'utilisateur a retourné deux cartes, je dois vérifier s'il a trouvé une paire correspondante ou non
			if(essaiUtilisateur[0] === essaiUtilisateur[1]){
				// console.log("Bravo");
				userFound.push(essaiUtilisateur[0]);
				essaiUtilisateur = [];
			} else {
				// console.log("dommage !");
				//Je sélectionne la card auant pour valeur du pokedex, l'id des pokemons ne formant pas la paire
				//On doit mettre un setTimeout pour que les cartes ne disparaissent pas trop vite (sinon la deuxième n'a même pas le temps d'apparaître!)
				setTimeout(() => {
					$(`.card[pokedex=${essaiUtilisateur[0]}]`).removeClass("reveal");
					$(`.card[pokedex=${essaiUtilisateur[1]}]`).removeClass("reveal");
					essaiUtilisateur =[];
				}, 1500);
			}
		}
	});
	return aside;
}

$("#play").on("click", function () {
	$(".game").empty(); // Pour vider la liste des pokemons lorsque l'on clique sur recommencer
	//Je mélange mon tableau avant de boucler dessus
	shuffle(arrayOfIds);
	//Parmis mon tableau de 492 éléments, j'en choisi 5 au hasard, puis je double chacun de ces éléments sélectionnés (pour avoir 5 paires), puis je les mélange
	const randomArray=[];
/* 	
Pas utile ici mais étape à saisir
//Possibilité de faire :
	//const selectedPokemon = new Array (5);
	for (let index = 0; index < 5; index++) {
	randomArray.push(getRandomNumber(492));
	//Et à la place :
	//selectedPokemon[index] = randomNumber;
	//Avec avant:
	//const randomNumber = getRandomNumber(492);
	} */
	let i = 0;
	//voir fichier test
	while (i<5){ // Possibilité de jouer avec la taille de mon tableau si on utilise ma version
		const randomNumber = getRandomNumber(151);
		const isInArray = randomArray.includes(randomNumber);
		if(!isInArray){
			//Ajoute au tableau
			//Incrémente le compteur
			//randomArray[i] = randomNumber; avec la correction
			randomArray.push(randomNumber); // avec ma version
			i++;
		}/* else{
Du coup le else devient non obligatoire parce qu'on veut qu'il ne fasse rien
		} */
	}
	console.table(randomArray);
	//Pour doubler le tableau :
	//voir fichier test On utilise le spread operator pour doubler tous les éléments de notre tableau :
	const doubleRandomArray = [...randomArray,...randomArray];
	console.table(doubleRandomArray);
	// On a bien le double des pokemons, on pratique ensuite un shuffle :
	shuffle(doubleRandomArray);
	//Je boucle sur randomArray qui est maintenant mélangé
	for (let index = 0; index < doubleRandomArray.length; index++) {
		const element = doubleRandomArray[index];
		const newCard = createCard(element);
		$(".game").append(newCard);
	}
});

// Challenge: Au lieu d'afficher les 20 premiers pokemons, afficher aléatoirement 10 pokemons différents

// Méthode permettant de mélanger un tableau de manière équiprobable (tout les évènements on la même probabilité d'arriver)
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}