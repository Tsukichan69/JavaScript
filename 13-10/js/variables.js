//LES VARIABLES :
/*Attention ! 
-pas de caractères spéciaux
-pas d'espaces
-pas de nombres au début
-pas de tiret (considéré comme le signe moins)
-sensible à la casse (camelCase)
-donner un nom "parlant", pas des noms sortis de nulle part*/
let monSlip; //création de variable

monSlip="CK" //affectation de variable, le "=" est le caractère d'affectation

//On peut créer (déclarer) et affecter la variable en même temps:
let monAge=44;

console.log(monSlip);
console.log(monAge);
/*Si on met des guillemets il va le remettre à l'identique, il ne cherchera pas sa variable !
Exemple :
console.log("monSlip")
console.log(monSlip);
console.log("monAge");
console.log(monAge);
Va afficher sur la console :
monSlip
CK
monAge
44*/
//Si on essaie d'aller chercher une variable non définie, on aura une erreur à l'écran, ou si on définie la variable après s'en être servi ça met une erreur aussi

/*On a plusieurs types de variables, JS est un language fortement typé
- chaines de caractères = string (avec des guillemets)
- nombres = number (tout le reste), int (integer = entier), uint (unsigned integer = que les entiers positifs)
- booléens ("boolean"): true, false
-...*/
let monPrenom="christian"; //Type string !! si on ne met pas de guillemet, il va s'attendre à ce qu'une variable soit égale à une autre
let maTaille=178; //type number
console.log(maTaille);
let uneVariable=monPrenom; //uneVariable="christian"
let toto=555;
let maVariable=toto/2; //maVariable=277.5
maTaille=180;
console.log(maTaille); //la variable change mais reste enregistrée ! donc la valeur change au fur et à mesure
//Pour que la console affiche le nom de la variable avant sa valeur on va écrire, attention qu'avec le + il faut gérer les espaces dans les guillemets
console.log("maTaille : "+maTaille)
//Chrome mettra un espace si on met : console.log("maTaille :",maTaille)
//Pour écrire "bonjour Christian, comment allez vous aujourd'hui ?"
console.log("Bonjour",monPrenom+", comment vas tu aujourd'hui ?")

//On peut déclarer des constantes = des variables qui ne sont pas amenées à changer
const graviteTerrestre=9.81; //la gravité sera toujours la même, on pourra ensuite s'en servir dans des calculs par exemple. On a tendance à écrire le nom des constantes en CAPITALES ! 
const PI=3.14159;
let rayon=10;
//On peut faire des calculs avec les variables !
let circonference=2*PI*rayon;
console.log(circonference);
maTaille=100+78
maTaille=200-22
maTaille=324/2
maTaille=68*3
maTaille=58+10*30/2-5 // = 203 car on garde les règles de maths
maTaille=(58+10)*30/(2-5)//-680
maTaille=maTaille+10 // Va stocker le résultat précédent en lui ajoutant 10, écrasant les autres.
//On pourrait écrire :
maTaille+=10;//-670
maTaille+=10;//-660
maTaille-=2;//-662

//Opérations sur les chaînes de caractères = la concatenation !
//B+A = BA
let prenom="christian";
let nom="migliore";
let identite=prenom+" "+nom;
console.log(identite);

//on peut regrouper les let en une seule ligne :
let phraseAccueil, debut="il m'a dit", fin="bonjour";
phraseAccueil=debut+" "+fin;
phraseAccueil+=" l'ami :)";//phraseAccueil= "il m'a dit bonjour l'ami :)"
console.log(phraseAccueil);

let autreVariable;
console.log("autreVariable ="+autreVariable); // undefined mais pas d'erreur

let chaineVide='';
console.log("chaineVide ="+chaineVide);

// //Pour faire un retour à la ligne on se sert de \n
// autreVariable+=5; //On ajoute 5 à la variable vide
// console.log("autreVariable ="+autreVariable); // ça ajoute NAN
autreVariable+="coucou";
console.log("autreVariable="+autreVariable); //undefinedcoucou (car de base si rien n'est précisé ça considère comme une chaine de caractères en undefined, donc ça peut s'ajouter)

//let test=null; null est un undefined ouvert sur l'addition
//test+=5; affichera 5
//test+="coucou"; affichera nullcoucou


/*----------------------------------------------------------*/
//exo 1
/*Quelles seront les valeurs de A,B,C,D à la fin du script:*/
let A=0, B=0, C=0, D=0; // on peut dire let A=B=C=D=0
A=3.5;
B=1.5;
C=A+B; //C=5
B=A+C; //B=8.5
A=B; //A=8.5

//exo 2
let monsieur="Ervitmonslip";
let madame="Manfroa";
//Comment échanger ces variables ?
let temp="";
temp=monsieur;
monsieur=madame;//Monsieur=Manfroa
madame=temp;//madame=Ervitmonslip