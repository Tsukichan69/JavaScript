//Je veux définir comment récupérer une alert ou un return :

//Fonction maPuissance, avec un paramètre optionnel
//cet argument (ou paramètre)optionnel, sera un booléen : true ou false
//si l'argument est true => la fonction produit une 'alert', sinon un 'return'

function maPuissance(a, b, opt) {
	let resultat=1;
	for (let i=0; i<b; i++){
		resutat*=a; //resultat=resultat*a;
	}
	if(opt==false || opt==undefined){
		return resultat;
	}else {
		alert(a+"^"+b+"="+resultat);
	}
}
maPuissance(6,4, true);