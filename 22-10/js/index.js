//Création d'un tableau qui va contenir tous les films
let tabFilms=[];
//Création d'une fonction qui ajoute les films à la page
function ajouterFilm(titre, pathAffiche, pathBandeAnnonce, genre, decennie){//path=chemin
	let idTitre=pathAffiche.slice(8,pathAffiche.length-4);
		tabFilms.push({
			leTitre: titre,
			chemAffiche: pathAffiche,
			chemBandeAnnonce: pathBandeAnnonce,
			genreFilm: genre,
			decennieFilm: decennie,
			idTitre: idTitre,
});
//affichage sur le site à faire :
	let maDiv=document.getElementById("listeFilms");
	//slice va permettre de sélectionner une partie du chemin de l'affiche (pour ne pas avoir à gérer les caractères spéciaux, on lui dit de toujours commencer au 8eme caractère et d'aller à la fin -4)
	maDiv.innerHTML+=`
		<article id="film_${idTitre}">
			<figure onclick="afficherDetailsFilms(${tabFilms.length-1})">
				<img src="${pathAffiche}" alt="${titre}">
				<figcaption>${titre}</figcaption>
			</figure>
			`;
};
//le $ va faire référence à la variable dans la fonction, les accolades permettent de rentrer dans l'objet

//créer une fonction dont le rôle est d'afficher les détails :
function afficherDetailsFilms(filmIndex)//correspondra au numéro du film sur lequel on aura cliqué => changer le href du a par un onclick
{
	let filmDemande=tabFilms[filmIndex];// filmDemande est un objet
	//On veut cacher les films non sélectionnés :
	document.getElementById("content").style.display="none";
	document.getElementById("lienRetour").style.display="block";
	document.getElementById("contentDetails").style.display="block";
	//Penser à faire réafficher les détails puisqu'on l'a mis en none, le fait de noter dans le HTML ne suffit pas à le remettre en display block !
	document.getElementById("contentDetails").innerHTML=`
		<h3>${filmDemande.leTitre}</h3>
		<section class="detailsFilms">
			<div class="ba">
				<video controls autoplay width="640" height="480" muted/>
					<source src="${filmDemande.chemBandeAnnonce}" type="video/mp4" />
					<source src"${filmDemande.chemBandeAnnonce}" type ="video/webm"/>
					ça ne marche pas :/
				</video>
				<div class="affiche">
					<figure>
						<img src="${filmDemande.chemAffiche}">
					</figure>
				</div>
				</section>`;
}
//onclick="afficherDetailsFilms(${tabFilms.length-1}) => on veut afficher les détails de chaque film à chaque fois qu'on l'ajoute. On a créé un tableau qui commence en longueur 0, on ajoute un film, donc sa longueur est de 1 mais la position du film est 0, donc on demande d'aller chercher l'objet qui est à la position (longueur du tableau -1)
//autoplay fonctionne sur ordinateur mais pas sur smartphone
//loop lit en boucle
//On met plusieurs sources possibles et un message au cas où
//Pour sélectionner par genre, on va rajouter des paramètres dans ajouterFilm ! 

//filterParGenreEtDecennie() et retourListe() à définir ! 
function retourListe(){
	//On montre à nouveau la section qui contient tous les films :
	document.getElementById("content").style.display="block";
	//On cache les infos du film sélectionné
	document.getElementById("contentDetails").style.display="none";
	//image de l'affiche et tout les détails du film sélectionné
	//On cache le lien qui retourne à la liste
	document.getElementById("lienRetour").style.display="none";
}

function filtrerParGenreEtDecennie(){
	let genreSelectionne= document.getElementById("selectGenre").value; //récupère ce que la personne a sélectionné !
	let decennieSelectionne= document.getElementById("selectDecennie").value;
	//On crée une boucle qui passe en revue tous les films pour comparer le genre et la décennie à ce que l'utilisateur aura sélectionner
	for(let i=0; i<tabFilms.length; i++){
		//On va créer une variable pour identifier le film
		let baliseArticle=document.getElementById(`film_${tabFilms[i].idTitre}`);
		//Si le genre du film == genre sélectionné alors afficher, sinon le cacher
		if ((tabFilms[i].genreFilm == genreSelectionne || genreSelectionne=="tous") && (tabFilms[i].decennieFilm == decennieSelectionne || decennieSelectionne=="tous")){
			baliseArticle.style.display="block";
		} else {
			baliseArticle.style.display="none";
		}
		//On va dans le tableau tabFilms, on sélectionne chaque film par le i et on cherche la clé genreFilm
	}
}

let tabSeries=[];
function ajouterSerie(titreS,affiche,bAnnonce,genre,decennie){
	tabSeries.push({
		titre : titreS,
		laffiche : affiche,
		labannonce : bAnnonce,
		legenre : genre,
		ladecennie : decennie,
	});
	let idTitreS=affiche.slice(8,affiche.length-4);
	let maDivS= document.getElementById("listeSeries");
	maDivS.innerHTML+=`
	<article id="serie_${idTitreS}">
	<figure onclick="afficherDetailsSeries(${tabSeries.length-1})">
		<img src="${affiche}" alt="${titreS}">
		<figcaption>${titreS}</figcaption>
	</figure>
	</article>`;
};
