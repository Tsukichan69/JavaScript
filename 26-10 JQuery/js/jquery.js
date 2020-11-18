/* ==========================================
====            JQuery             ====
========================================== */

//Si on veut changer la couleur des paragraphe :
/* en js */
/* let mesParagraphes= document.querySelectorAll("p");
//On a créé un tableau qui contient tous les p, on veut donc le parcourir pour changer leur couleur !
for (let i=0; i<mesParagraphes.length; i++){
	mesParagraphes[i].className="blue"; //Puisqu'on a définit blue dans le css
} */

/* avec JQuery */
/* Une fonction dire "fonction JQuery", elle fait office de sélecteur, et se note $ dans sa version contractée :
jquery() version longue
$() version contractée. */
$("p").addClass("blue");

/* sélecteurs possibles dans $() :
$("nom de balise") = sélecteur d'élément HTML
$ (".blue") = sélecteur de classe
$("#identifiant") = sélecteur d'identifiant
$("blockquote p") = sélecteur descendant + descendance directe, l'adjacence directe ou indirecte
=> filtres :
$('p:first') => sélectionne le premier p dans chaque élément (article, div etc...)
$('p:eq(3)') => va sélectionner tous les 3 paragraphes, mais commence à 0 !
*/

//fonction JQuery pour cacher :
$("img:first").hide();

/* Méthodes sur les effets :

- hide() : cache un élément
- show() : fait l'inverse
- toggle() : fait l'inverse de ce qui a été demandé, cache un élément montré et montre un élément caché

- fadeOut() : fait disparaître progressivement un élément
- fadeIn() : fait apparaître progressivement un élément
- fadeTo() : amène progressivement un élément à une opacité donnée

- slideUp() : cache l'élément en le montant
- slideDown () : cache en le descendant
- slideToggle () : fait la bascule entre afficher ou disparaître en fonction de l'état de départ
*/
$("img:last").hide(2000); //met 2000ms à disparaître
$("img:last").toggle(1000); //met 1000ms à réapparaître
$("img:last").fadeOut("slow"); // équivaut à 600ms, fast = 200ms
$("img:last").fadeIn("fast");
$("img:last").fadeTo("slow", 0.5);

//méthodes de manipulation de contenu
/*
.html() => crée du contenu HTML
.text() => remplace le texte
.replaceWith() => remplace une balise par une autre
.before() => ajoute un élément avant celui sélectionné
.after() => ajoute un élément après celui sélectionné
.prepend() => ajoute à l'intérieur de la balise, juste après son ouveture
.append() => ajoute à l'intérieur de la balise, juste avant sa fermeture
.addClass() => ajoute une classe sans retirer l'existante
.removeClasse() => retire une classe, dépendra des paramètres
.css() => récupère ou définit les propriétés CSS de l'élément
.attr() => ajoute un attribut ou récupère la valeur de l'attribut existant
.removeAttr() => supprime l'attribut
...
*/
$(".test").removeClass("humHum"); //avec un paramètre, on ne retire que la classe concernée
$(".test").removeClass(); //sans paramètre on retire tout, y compris test

//Méthodes sur la taille des éléments :
/*
.height()
.width() => on peut aussi bien interroger que modifier la hauteur / la largeur de l'élément sélectionné
*/
//Pour récupérer la largeur de l'image :
console.log($("img:first").width());

//Pour régler la largeur des paragraphes :
$("p").width("700px"); // si on ne spécifie pas d'unité de mesure ce sera des pixels:
$("p:eq(1)").width(400);

//Pour ajouter / modifier du CSS
$("p").css("background-color", "lavender");
$("p").css({"background-color":"cyan", "border-radius":"10px", "opacity":"0.5",});

//Evênements :
$("h1:first").css('cursor','pointer');
$("h1:first").on("click", function(){
	$("p").slideToggle(500);
});
/*Evènements possibles :
- click
- scroll
- hover
- mouseover
- mouseenter
- mouseleave
- keydown
- keyup
- keypress
- focus
- blur
*/