//Comparaisons

//le but est de tester les affirmations :
//supérieur ou inférieur:
console.log("100>1 est : ");
console.log(100>1);

console.log("100<1 est : ");
console.log(100<1);
/*Inégalités larges :*/
console.log("100<=100 est : ");
console.log(100<=100);

/*Attention à la syntaxe !!*/
console.log("100=100 est : ");
console.log(100==100); //Double égal pour voir si c'est =, sinon il va croire qu'on veut donner une autre variable /true
let password="692504";
console.log("106985"==password);

let monMDP="100766";
console.log(monMDP==password); //false

console.log("ascete<ascenseur ?");
console.log("ascete"<"ascenseur"); //false car dans l'ordre alphabetique ascete est plus grand qu'ascenseur

/*----------------------------------------------------*/
let anneeEnCours=2020;
let anneeNaissance=1999;
console.log(anneeEnCours-anneeNaissance>=18); //true

alert("coucou");
/*confirm("Êtes-vous majeur ?"); Ouvre une boite de dialogue avec deux choix possibles*/
let majeur= confirm("êtes vous majeur ?");
console.log("la personne est majeur : "+majeur);//enfonction de ce qu'elle a coché, ça affichera true ou false

let prenomUser= prompt("Quel est votre prénom ?");
console.log("le pelo s'appelle : "+prenomUser);
alert("Enchanté, bien le bonjour "+prenomUser+" ! Bienvenue :)");


/*--------------------------------------------------------*/
//Créer un script qui demande un mod de passe, qui le compare au "vrai MDP" et répond à l'utilisateur si ok ou pas
let siteMDP="Kaput Draconis";
let userMDP= prompt("Quel est le mot de passe ?");
alert("le mot de passe est : "+siteMDP==userMDP);

console.log("j'ai eu 10 ans il y a 22 ans. J'ai donc "+10+22+" ans"); //JS va faire de la concaténation car il a du mal à le lire comme des chiffres, on ajoute donc des parenthèses pour le calcul
console.log("j'ai eu 10 ans il y a 22 ans. J'ai donc "+(10+22)+" ans");