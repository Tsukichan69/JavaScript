// LES VARIABLES :

/* Choix d'un nom de variable :
-pas de caractères spéciaux
-pas d'espaces
-pas de nombres au début
-pas de tiret - (considéré comme le signe moins par JS)
-sensible à la casse (camelCase)
-donnez un nom "parlant"
*/

let monSlip; // création de variable

monSlip="CK"; // affectation de variable , le "=" est le caractère d'affectation

// création et affectation de variable en même temps : Déclaration / affectation
let monAge=44;

// la présence de guillemets indique une chaine de caractère, et la console l'affiche à l'identique
console.log("monSlip"); 
// sans guillemets, la console va chercher la variable et affichera son contenu
console.log(monSlip);

console.log("monAge");
console.log(monAge);


/* Attention, à créer les variables que vous allez utiliser 
console.log(monPrenom);
Attention, il faut les créer avant de s'en servir :-/
let monPrenom="toto"; 
*/

/* on a plusieurs types de variables ( JS est un langage "fortement typé") */
// Comme type de variable on va trouver :
// -des chaînes de caractères :  String (avec des guillemets)
// -des nombres Number, int (integer), uint (unsigned integer)
// -booléens ("boolean") : true, false (vrai ou faux)
// -...

let toto=100;
let monPrenom="Christian"; // type string
let maTaille=178;          // type Number 
console.log(maTaille);
let uneVariable=toto;      // équivalent à  uneVariable =100

maTaille=180;
console.log(maTaille);

maTaille=190;
// console.log("maTaille :", maTaille);
// La console affiche le nom de la variable avant sa valeur :
console.log("maTaille : "+maTaille);

// seriez-vous capable d'afficher (dans la console) le message :
// Bonjour ....., comment vas-tu ?

console.log("Bonjour "+monPrenom+", comment vas-tu ?");

// on peut déclarer des constantes :
const gravite=9.81;
// petite norme :  on a tendance à écrire les noms de constantes en CAPITALES
const PI=3.14159;

let rayon= 10;
let circonference=2*PI*rayon; // multiplication *

// let PI=3.15; // renvoie une erreur

// on peut faire des calculs sur les variables :
maTaille=100+78;          // 178
console.log("maTaille = "+maTaille); 

maTaille=200-22;          // 178
maTaille=324/2;           // 162
maTaille=68*3;            // 204
maTaille=58+10*30/2-5;    // 203 l'ordre multiplication / division, en 1er(s)
maTaille=(58+10)*30/(2-5);//-680
console.log("maTaille = "+maTaille); 

// Les 2 lignes suivantes sont complètement équivalentes : 
// On récupère la valeur de maTaille, on lui ajoute 10, et on "ré affecte" la variable maTaille
maTaille=maTaille+10;       // -670
maTaille+=10;               // -660

maTaille-=2;                // -662
maTaille*=-2;               // 1324
maTaille/=3;                // 441,3333...

// Chaine de caractère : une operation LA CONCATENATION !
// B+A = BA
let prenom="christian";
let nom="migliore";
let identite= prenom+" "+nom;
console.log(identite);

let phraseAccueil, debut="il m'a dit", fin="Bonjour";

phraseAccueil=debut+" "+fin; //phraseAccueil="il m'a dit Bonjour"

phraseAccueil+=" l'ami :)";  //phraseAccueil="il m'a dit Bonjour l'ami :)"

let autreVariable; // undefined
console.log("autreVariable="+autreVariable); // undefined mais pas d'erreur :)

let chaineVide=''; // chaine vide quoi...
console.log("chaineVide="+chaineVide); // rien
console.log("-------------------------------\n-------coucou-----------"); //  \n permet un retour à la ligne

/*
autreVariable+=5;
console.log("autreVariable="+autreVariable); // NaN (Not a Number) Vous forcez l'association d'une chaîne de caractère avec un nombre
*/
autreVariable+="coucou";
console.log("autreVariable="+autreVariable); // undefinedcoucou (!)

// cas particulier du null :
let test=null; // null est un undefined "ouvert sur l'addition"
test+=5;
console.log(test); // 5
/*
let test=null; // null est un undefined "ouvert sur l'addition"
test+="coucou";
console.log(test); // nullcoucou
*/
/* ------------------------------------------------------------------------------------ */
// exo 1
/* Quelles seront les valeurs de A, B, C, D à la fin du script :*/
let A=0, B=0, C=0, D=0; // pour faire plus court : let A=B=C=D=0;
A=3.5;  // 3.5
B=1.5;  // 1.5
C=A+B;  // 5
B=A+C;  // 8.5
A=B;    // 8.5
/*
A= 8.5
B= 8.5
C= 5
D= 0
*/
// même chose :
A=B=C=D=0;
A=0.1;
B=1.1;
C=B;
D=A+1;
A=D+C;
/*
A= 2.2
B= 1.1
C= 1.1
D= 1.1
*/

//exo 3
let monsieur="Ervitmonslip";
let madame="Manfroa";
// comment échanger ces variables ? 
// (je veux que monsieur="Manfroa" et madame="Ervitmonslip".)

// on utilise une 3e variable, temporaire
let temp="";
temp=monsieur;
monsieur=madame; // monsieur="Manfroa"
madame=temp; // madame="Ervitmonslip"
