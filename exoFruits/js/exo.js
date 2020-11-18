$(document).ready(function(){
	//Je veux que l'option "désactivé" du bouton soit changé en "activé"
	/* $("#liste_fruits").on("click", function(){
		let fruitSel= $("#liste_fruits").val();
		$("#ajouter").removeAttr("disabled");
		$("#ajouter").on("click", function(e){
			e.preventDefault();
			$("#panier").append(`<option value="${fruitSel}">${fruitSel}</option>`);
		});
	}); */
	//Gestion des boutons ajouter / supprimer pour disabled ou enabled
	$("#liste_fruits").on("change", function(){
		$("#ajouter").attr("disabled", false);
	});
	$("#panier").on("change", function(){
		$("#supprimer").attr("disabled", false);
	});
	//gestion de l'ajout
/* 	$("#ajouter").on("click", function(){
		//pas besoin d'un preventDefault car c'est un btn pas un lien
		let fruitSel=$("#liste_fruits option:selected").val();
		$("#panier").append(`<option value=${fruitSel}>${fruitSel}</option>`);
		$("#liste_fruits option:selected").remove();
		$("#ajouter").attr("disabled", true);
	});

	//gestion de la suppression
	$("#supprimer").on("click", function(){
		let fruitSel=$("#panier option:selected").val();
		$("#liste_fruits").append(`<option value=${fruitSel}>${fruitSel}</option>`);
		$("#panier option:selected").remove();
		$("#supprimer").attr("disabled", true);
	});
 */
	//Version + courte ! avec une fonction externe
	function fruitMove(listeArrivee, selection){
		listeArrivee.append(`<option value=${selection.text()}>${selection.text()}</option>`);
		selection.remove();
	}
	$("#ajouter").on("click", function(){
		//ajouter avec la fonction fruitMove()
		fruitMove($("#panier"), $("#liste_fruits option:selected"));
		$("#ajouter").attr("disabled", true);
	});

	$("#supprimer").on("click", function(){
		//supprimer avec la fonction fruitMove()
		fruitMove($("#liste_fruits"), $("#panier option:selected"));
		$("#supprimer").attr("disabled", true);
	});
});