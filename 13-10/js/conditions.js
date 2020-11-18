//Les conditions sont des tests plus élaborés
/* si (faire le test), selon du résultat du test -> conséquence(s)

if (condition) {
	-instruction;
	-instruction;
	...
}
autreInstruction;

Je veux savoir si l'utilisateur est majeur :
1. demander âge utilisateur (et le stocker dans une variable)
2. faire une condition qui vient tester si l'âge est > à 17
3. si oui, lui souhaiter la bienvenue
3bis. poursuivre avec une formule de politesse quelconque
*/
let ageUser=prompt("Quel est votre âge ?")
if(ageUser>17) {
	alert("Ok, vous êtes majeur, bienvenue sur le site...");
}//On pourrait ajouter un autre "if" pour le cas contraire, mais c'est assez "débutant", du coup on va plutôt ajouter "else"
else{
	alert("You shall not pass...")
}
alert("et sinon, quoi de neuf ?")

//Exercice : majeur ou mineur ?
/*Je veux demander l'année de naissance à l'utilisateur (que je vais stocker dans une variable anneeNaissance)
Je compare son année de naissance à 2002...
- si l'année est < 2002 -> majeur
- sinon ! est-ce 2002 ? ou est-ce > 2002
- Si 2002, il faut regarder le mois de naissance, et le comparer à octobre */
let anneeNaissance=prompt("Quelle est votre année de naissance ?")
if(anneeNaissance<2002){
	alert("it's ok !");
}else {
	if(anneeNaissance==2002){
		let moisNaissance=prompt("et votre mois de naissance ? en numérique")
		if(moisNaissance<=10){
			alert("ok sorry");
		}else{
			alert("NOOOOO!");
		}
	}else{
		alert("No please");
	}
}
