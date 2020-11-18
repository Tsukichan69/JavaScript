/* Si on souhaite appliquer plusieurs méthodes au même sélecteur, les notations suivantes sont presque équivalentes : */
/* $('p').css("background-color", "salmon");
$('p').width(500);
$('p').animate({"margin-left":"+=300"}); */
/* Correpond à :
$('p').css("background-color", "salmon").width(500).animate({"margin-left":"+=300"}); */
/* $('p').css("background-color", "salmon")
		.width(500)
		.animate({"margin-left":"+=300"}, 1000)
		.fadeOut(2000)
		.remove();  *///Une fois qu'il a disparu, on le retire du HTML
//Cette dernière version est plus performante
//En mettant en application ça, tout a disparu avant les animations, parce que le JS n'attend pas que ce soit fini ! 

//le callback (ou fonction de rappel) : fonction qui ne va être exécutée qu'après que la méthode précédente soit terminée
//si je veux que le remove se fasse après le fadeOut

$(document).ready(function(){ //va permettre de faire fonctionner le JS même en début de document ! Il demande à ce que la page soit chargée dans de lancer le code

	$('p').css("background-color", "salmon")
			.width(500)
			.animate({"margin-left":"+=300"}, 1000)
			.fadeOut(2000, function(){
				$("p").remove();
			});
	//le callback s'applique ici :)

	//Essayons de faire disparaître les images les unes après les autres :
	//Quand je clique sur un bouton ("Disparition des images") je fais disparaître les images en cascade
	$('div a:first').on("click",function(e){
		e.preventDefault();
		/* let tabImg=document.querySelectorAll("img");
		for (i=0; i<tabImg.length; i++){
			$("tabImg[i]").hide(1000);
		} */
		/* $("figure img").first().hide(1000, function disparaitre(){
			$(this).next().hide(1000, disparaitre);
		}); */ //Ici la fonction va tourner en boucle jusqu'à ce qu'il n'y ai plus d'images
		apparitionDisparition();
	});
	//Attention first considère le premier élément du DOM, pour ça que l'image du bas ne disparaît pas.

	//Quand je clique sur le bouton ("Apparition des images") on veut les faire réapparaître
	$("div a+a").on("click", function (e){
		e.preventDefault();
	/* 	$("figure img").first().show(1000, function apparaitre(){
			$(this).next().show(1000, apparaitre);
		}); */
		apparitionDisparition();
	});
	//Possibilité de condenser avec le slideToggle ! 
	function apparitionDisparition(){
		$("figure img").first().slideToggle(1000, function disparaitreApparaitre(){
			$(this).next().delay(1000).slideToggle(1000, disparaitreApparaitre);
		});
	};
	//Delay permet de mettre un délai d'attente !

	/* La méthode off("event") permet d'arrêter un écouteur, il faut avoir le même sélecteur et le même évenement : */
	$("#toto").on("click", function (){
		$("div a:first").off("click");
		$("div a+a").off("click");
	});

	//une autre méthode qui permet d'arrêter une animation en cours : stop()
	//Sans paramètre, on stoppe l'animation en cours de déroulement
	//true comme paramètre : on arrête ... la queue ...
	//on va voir le concept de "queue" ci dessous :

	$("#toto").on("click", function(){
		$("img").stop(true); // arrête l'animation en cours de route
	});

	//principe de queue : regardons comment les animations s'enchaînent : on va animer la bordure et la taille de ma photo :
	$("#animal").css("border","1px solid black");

	//reset :
	$("#reset").on("click", function(){
		$("#animal").css({"border-width":"1px", "width":"250"});
	});

	//Par défault lorsqu'on fait s'enchainer les méthodes, sur des animations :
	$("#enchainer").on("click", function(){
		$("#animal").animate({"border-width":"100"},3000)
					.animate({"width":"-=100"}, 1500);
	});//si le temps était le même elles se feraient quand même l'une après l'autre

	//pour faire les méthodes en même temps :
	$("#enMemeTemps").on("click", function(){
		$("#animal").animate({"border-width":"100", "width":"-=100"}, 1500);
	}) //Obligé d'avoir le même temps

	//Comment faire pour avoir des temps différents mais ne pas les enchainer ?
	$("#pasEnchainer").on("click", function(){
		$("#animal").animate({"border-width":"100"}, {queue: false, duration : 3000})
					.animate({"width":"-=100"}, 500);
	});

});