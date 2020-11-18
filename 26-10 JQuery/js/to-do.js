// Lorsqu'on ajoute un élément à la liste il s'affiche à la suite
// Lorsque l'on clique sur la li elle se barre puis elle disparaît

//ajouter des li au fur et à mesure
/* ma version, pas si mal
$("form").on("submit", function(e){
	e.preventDefault();
	let ajoutListe = document.getElementById("item").value;
	$("ul").append(`<li>${ajoutListe}</li>`);
}); */
$("#ajouter").on("click", function(e){
	//éviter le rechargement de la page
	e.preventDefault();
	let ajoutListe = $("#item").val(); //val sans argument donne la valeur du champ
	if(ajoutListe!=''){
		$("ul").append("<li>"+ajoutListe+"</li>"); // Ou (`<li>${ajoutListe}</li>`)
	//vider le champ input après avoir cliqué :
		$("input:text").val("");
		$("#item").attr("placeholder", "élément à ajouter à la liste");
	}else{
		$('#item').css("background-color", "pink")
			.attr("placeholder", "attention rien n'est écrit !")
			.addClass("whitePlh");
	}
});
$("#item").on("keypress", function(){
	$("#item").removeClass().css("background-color","white");
});


//Faire disparaître une li :
/* Ma version : bad :(
$("li").on("click", function(e){
	e.preventDefault();
	$("li").hide("selec");
}) */
$("ul").on("click", function (event){
	event.target.remove();
	//targer cible l'élément !
})