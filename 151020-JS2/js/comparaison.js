// -------- comparaisons ----------

// Le but est de tester des affirmations :
// supérieur.e ou inférieur.e
console.log("100>1 est : ");
console.log(100>1); // true

console.log("100<1 est : ");
console.log(100<1); // false

/* inegalités larges : */
console.log("100>=100 est : ");
console.log(100>=100); // true

/* ATTENTION SYNTAXE !!! pour tester une égalité : */
console.log("100=100 est : ");
console.log(100==100); // true

console.log("toto = tata ?"); 
console.log("toto"=="tata"); // false

let password="692504";
console.log("107585=password ?");
console.log("107585"==password);    // false
console.log("692504"==password);    // true

let monMDP="100776";
console.log(monMDP==password);    // false

console.log("ascete<ascenseur ?");
console.log("ascete"<"ascenseur"); //false car ascete arrive après dans l'ordre alphabétique :)

/*-----------------------------------------------*/
let anneeEncours=2020;
let anneeNaissance=1999;
console.log(anneeEncours-anneeNaissance>=18); // true

alert("coucou");
// on a ici 2 choses : on pose la question ET on stocke la réponse dans la variable majeur
let majeur= confirm("Êtes-vous majeur ?"); 
console.log("la personne est majeur : "+majeur); // en fonction de ce que la personne a cliqué

let prenomUser= prompt("Quel est votre prénom ?");
console.log("le pelo s'appelle : "+ prenomUser);
alert('Enchanté, bien le bonjour '+prenomUser+" ! Bienvenue :)");


/* ------------------------------------------------ */
/* Créez un petit script qui demande un mot de passe à l'utilisateur,
puis qui le compare avec "le vrai mot de passe", 
et enfin indique à l'utilisateur si c'est correct (true /false) */

// 1. créer la variable avec le vrai mot de passe
// 2. poser la question au User, et stocker sa réponse dans une variable
// 3. on compare les 2 variables et on retourne le résultat

let siteMDP="kaput";
let userMDP= prompt("Quel est le mot de passe");
alert("le mot de passe est : "+(siteMDP==userMDP));

// les parenthèses sont nécessaires pour forcer JS à faire le calcul (ou l'évaluation) AVANT de concaténer
console.log("j'ai eu 10ans il y a 22ans. J'ai donc "+(10+22)+"ans.");   // 32ans    :)
console.log("j'ai eu 10ans il y a 22ans. J'ai donc "+10+22+"ans.");     // 1022ans  :/

