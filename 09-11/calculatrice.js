let calcul = document.getElementById("form");
calcul.addEventListener("submit", function (e) {
	e.preventDefault();
	let number1 = parseInt(document.getElementById("number1").value);
	let number2 = parseInt(document.getElementById("number2").value);
	let resultat = number1 + number2;
	console.log(resultat);
});

/* function add(nb1,nb2){
	return nb1 + nb2;
}
function lancerCalcul(event){
	event.preventDefault();
	let number1 = parseInt(document.getElementById("number1").value);
	let number2 = parseInt(document.getElementById("number2").value);
	console.log(add(number1, number2));
}
document.getElementById("form").addEventListener("submit",lancerCalcul()); */
