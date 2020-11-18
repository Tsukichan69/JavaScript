/*=====================================================
===              Objets et autres                 ===
=====================================================*/

//Créons un objet littéral :
let eleve1={ prenom:"Othman", age:28, adresse:"12 rue de la paix", codepostal:"69005", ville:"lyon", 1:"toto"};
console.log(typeof eleve1); //objet car c'est un tableau
console.log(eleve1.prenom); //Othman
console.log(eleve1["age"]); //28 => On se sert de la clé pour aller chercher la valeur, l'ordre n'importe plus
console.log(eleve1);
//console.log(eleve1[1]); //toto mais on évite d'avoir des clés "numériques" car c'est mélangeant

//2 notations pour ajouter une paire clé:valeur dans l'objet :
eleve1.mail="ottoBiker@gmail.com";
eleve1["nom"]="Rogler";

console.log(eleve1); // elles s'ajoutent à la fin, mais de nouveau l'ordre importe peu

//comment parcourir un objet ? avec une boucle "for ... in"
for (let id in eleve1){
	console.log(eleve1[id]); //l'id joue le rôle de clé et parcoure le tableau clé par clé pour récupérer la valeur associée
}

// ---- exemple d'utilisation d'un objet
//On fait une fonction coordonnées() dans laquelle des choses se passent, elle nous donne des coordonnées, on pourra faire un return x ou un return y mais pas les deux, car return fait office de break, donc ça s'arrête.
function coordonnees(){
	//code fictif
	/* let x=25;
	let y=12.5; */
	return { x:25, y:12.5};
}
console.log("--------------");
console.log(coordonnees().x); //25
console.log(coordonnees().y); //12.5
//La fonction, grâce au return, devient un objet qui contient deux clés et valeurs

console.log("--------------");
let monObjet=coordonnees(); //On met la fonction qui me retourne un objet dans une variable pour que ce soit plus simple d'y appliquer une boucle for sinon on devrait taper à la main tous les id
//Pour récupérer toutes les valeurs d'un "objet-fonction" on utilise toujours la boucle for...in en passant par une variable. Celle ci permet la notation variable"[cle]"
for(let id in monObjet){
	console.log(monObjet[id]);
}

// ========================= Manipulons la page html: ============================= \\
// Pour sélectionner un élément on dispose de quelques méthodes :
// getElementById("nomIdentifiant");
document.getElementById("titre1"); //nom de l'identifiant Document correspond à la page HTML
//ne fonctionnera pas, car il vaut mieux passer par une variable

//Pour modifier ou ajouter un attribut
//le 1er argument est le nom de l'attribut, le 2eme est sa valeur
//setAttribute("nomattribut","valeurAttribut");
let titre = document.getElementById("titre1"); //variable faisant référence à la balise h1 dans le fichier HTML
titre.setAttribute("style","color:red"); //va en théorie afficher le "titre1" en rouge, MAIS si la balise script est avant le titre h1 ça ne fonctionnera pas car le code ne sera pas encore chargé, il faut mettre la balise script avant la fermeture du body
titre.setAttribute("title","ceci est le titre"); // dans l'inspecteur s'affichera <h1 id="titre1" style="color:red" title="ceci est le titre"> et affichera une bulle au survol

//autre méthode de sélection : getElementsByTagname("img");
//cette méthode va produire un tableau qui contiendra tous les éléments recherchés
let mesPhotos = document.getElementsByTagName("img"); //mesPhotos est un tableau
mesPhotos[0].setAttribute("style","border: 2px solid blue;");
mesPhotos[0].setAttribute("src", "http://placeimg.com/200/200/arch");
mesPhotos[0].setAttribute("alt","image d'architecture - placeholder"); //le point virgule est obligatoire si on minifie notre code ! 
//Attention, google va référencer le HTML sans tenir compte du JS ! 

let monParagraphe = document.querySelector("body p"); //requête = sélecteur comme dans le CSS, va chercher le 1er paragraphe dans le body, un seul élément sera sélectionné
monParagraphe.setAttribute("style", "color: pink; text-transform: uppercase; text-align:center;");

//Pour les sélectionner tous ! 
// querySelectorAll() ----> c'est un TABLEAU
let mesLiens = document.querySelectorAll("body p a");

//la propriété innerHTML permet d'afficher le contenu de la balise. (inner = à l'intérieur)
console.log(mesLiens[0].innerHTML); //[0] car c'est un tableau ! 
console.log(mesLiens[1].innerHTML);
mesLiens[0].innerHTML="Coucou les amis"; //la propriété prend un égal car c'est comme une variable, contrairement à la méthode qui prend des parenthèses
//Modifie le contenu du premier lien

let premierLien = document.querySelector("a"); // peut sélectionner les classes aussi
//Si on veut changer la valeur d'un attribut qui existe déjà, on n'a pas besoin de changer la valeur de cet attribut en passant par setAttribute("","") qui est assez lourd
premierLien.href="https://www.google.com";
premierLien.target="_blank"; //l'attribut target a été ajouté "à la volée" avec l'attribut "_blank"

//il existe la propriete "className" qui permet de donner un nom de classe à un élément :
let dernierP=document.getElementById("lastp");
dernierP.className="booo";
dernierP.className="arg"; //remplace
dernierP.className+=" boo"; //ajoute

//parentNode va aller chercher un parent (ce qu'on ne peut pas faire en CSS !)
let citation = dernierP.parentNode; //sélectionne le parent de dernierP, ici blockquote
citation.style = "border:1px solid crimson; padding:20px";


/* Les évênements : Click (quand on clique), dblClick (quand on double clique), mouseover (quand on survole), mouseout (quand on quitte le survol), mousedown (quand tu appuie sur le btn de la souris), mouseup (quand tu relache le bouton de la souris), mousemove (quand on bouge la souris),
keydown (quand on appuie sur la touche), keyup (quand on relache), keypress (quand on appuie et relache)
focus, blur (quand on annule la cible précédente), change (quand on coche, décoche des cases checkbox ou radio), input (quand on commence à taper dans le champ), select (détecte une sélection de texte dans un champ de texte), submit (quand on envoie le formulaire), reset (détecte et réinitialise le formulaire) */

//DOM = Document Object Model = une modélisation, la façon que va avoir le navagateur de modéliser la page HTML, on le représente en arbre inversé avec les parents et les ramifications des enfants
//en DOM-1 ancienne façon d'associer les évènements :
let monImage2=mesPhotos[1];
monImage2.onclick=function(){
	alert("Meaooow !");
}

//en DOM-2 (nouvelle version)
let monImage1=mesPhotos[0];
/* monImage1.addEventListener("click", laFonction); // écouteur d'évènement, il attend un click pour effectuer la fonction, il faudra donc la définir
function laFonction(){
	alert('Que c\'est beau');
}
Sera remplacé par quelque chose de plus "simple" en syntaxe, c'est une fonction anonyme car j'en ai besoin de suite et elle est unique, mais si j'avais besoin du même comportement sur plusieurs objets, on aurait nommé la fonction : */
monImage1.addEventListener("click", function(){
	alert("Que c'est beau !");
}); // penser à fermer l'écouteur d'évènement

//Fonction pour plusieurs objets et actions :
function reaction (){
	alert('glouppps');
}
monImage1.addEventListener("mouseover", reaction);
titre.addEventListener("mouseout", reaction);

let stopTout=document.getElementById("stop");
stopTout.addEventListener("click", function(toto){
	toto.preventDefault(); // si on click il ne se passera rien, on verra le lien, mais on ne pourra pas le suivre ! souvent on remplace le "toto" par un "e" pour évènement.
	//preventDefault est une méthode, du coup on est obligé de la connecter à un paramètre
	monImage1.removeEventListener("mouseover", reaction);
	titre.removeEventListener("mouseout", reaction);
	//va retirer les évènements qui se passent QUAND ON CLIQUERA SUR TOUT STOPPER, on aura tendance à nommer une fonction si on veut l'annuler plus tard
})

//Pour faire en sorte de changer le contenu du titre lorsque je clique dessus pour faire apparaître "j'ai changé le titre":
titre.addEventListener("click", function(toto){
	console.log("toto="+toto); //évènement = MouseEvent
	console.log("toto.target"+toto.target);
	console.log("toto.type"+toto.type); //type d'évènement (click)
	toto.target.innerHTML="J'ai changé le titre";
});
//target permet de récupérer la cible de l'objet cliqué.
//On se sert du point target pour dire : quelle que soit la variable, si je clique dessus le changement est effectué sur elle même.

//Si on veut détecter le déplacement de la souris, et affichons les coordonnées de la souris dans le paragraphe du blockquote :
let pCoordonnees = document.querySelector("blockquote p");
//On a sélectionné le bon paragraphe, pour pouvoir afficher notre résultat dessus
document.addEventListener("mousemove", function(e){
	pCoordonnees.innerHTML="Position en x="+e.clientX+"px<br> Position en y="+e.clientY+"px";
})
//On pose un écouteur sur la page entière !
//Je mets un paramètre dans la fonction car j'aurai besoin de le récupérer
//clientX récupère la coordonnée de la souris
//le fait de noter <br> dans les guillemets va ajouter l'ensemble dans le HTML donc la balise sera appliquée et ne s'affichera pas !

//On peut accéder aux propriétés css d'un objet via la propriété style, suivie de la propriété css :
titre.style.color="blue";
titre.style.margin="0 50px";