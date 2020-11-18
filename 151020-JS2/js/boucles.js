/* ================================================
===                 LES BOUCLES                 ===
===================================================

C'est une instruction qui permet de répéter un certain nombres de commandes...
Il y a plusieurs façons de faire des boucles :

1. while ("tant que") :

while (conditionVraie) {
    -instruction;
    -instruction;
    ...
}
*/
let varNum=3;
console.log("début de la boucle");
while(varNum>5){  
    console.log("while n°"+varNum);
    varNum--; 
}
console.log("fin de la boucle");

// 2.do... while ("fais ... tant que") :
// En résumé, avec cette boucle, vous êtes certain qu'il y aura bien au moins un
// passage dans la boucle. 
console.log("début de la boucle do...while");
do {
    console.log("dowhile n°"+varNum);
    varNum--; 
}while(varNum>5);
console.log("fin de la boucle do...while");


// 3. Boucle "for"
/*
for (initialisation; condition; incrémentation; ){
    -instruction;
    -instruction;
    ...
}
*/
console.log("----------------- boucle for ----------- ");
for (let i=0; i<8; i++) {
    console.log("boucle for : i="+i);
}

//-------------------------------------------------------------
/* Faites, svp 2 exos :
1. boucles
-une boucle While, qui affichera 15 fois le message "Je suis un boss n°" suivi du
numéro de passage, allant de 1 à 15. :
Je suis un boss n°1
Je suis un boss n°2
...
Je suis un boss n°15
*/
let bossBoucle=1;
while(bossBoucle<16){
    console.log("Je suis un boss n°"+bossBoucle);
    bossBoucle++;
}
/*
-une boucle For qui affichera 9 fois : "Je suis le petit dinosaure"+ numéro de passage
allant de 8 à 16:
Je suis le petit dinosaure 8
Je suis le petit dinosaure 9
...
Je suis le petit dinosaure 16
*/
for(let d=8; d<17; d++){
    console.log("Je suis le petit dinosaure "+d);
}

console.log ("---------------------------- somme de N nombres------------------");
/*
2. Somme de 5 nombres
-une boucle qui demande 5 fois à l'utilisateur de saisir un nombre (peu importe lequel)
À la fin des 5 questions, une alert donne la somme des 5 nombres
*/
// let somme=0;
// for (let k=0; k<5; k++){ 
//     console.log("k="+k);
//     let choix=parseInt(prompt("Choisissez un nombre :"));
//     somme+=choix; // somme=somme+choix;
// }
// alert('somme='+somme);

/*-----------------------------*/
/* version plus courte */
/*
let somme=0;
for (let k=0; k<5; k++){
    somme+=parseInt(prompt("Choisissez un nombre :"));
}
alert('somme='+somme);
*/

/* Exercice 3 :
Faire choisir un nombre entre 1 et 50 au navigateur.
Demandez à l'utilisateur de proposer un nombre, et informer-le si le nombre cherché
est plus grand ou plus petit.
Le "jeu" ne s'arrête QU'UNE FOIS LE NOMBRE TROUVÉ.
Vous ajouterez un message de félicitations à l'utilisateur.
*/

alert('bonjour');
Math.random(); // donne un nombre entre 0 et 1

console.log(Math.round(1+49*Math.random())); // pour avoir un nombre entre 1 et 50

// 1 < Math.round(1+49*Math.random()) < 50 

/*
49* Math.random()+1 --- minimum 49*0+1 =1
                  --- maximum 49*1+1 =50
*/
// entre 25 et 38
// 25<  25+13*math.random() < 38

/* trouver un nombre aléatoire entre 10 et 100 ? : 10+90* Math.random() = entre 10 et 100 */

/*
1/ On crée une variable nbMystere, aléatoirement pris entre 1 et 50
2/ On crée la variable nbUser qui va récupérer la proposition de l'utilisateur
3/ Début boucle : tant que nbUser et nbMystere sont différents
4/ Je demande à l'utilisateur un nombre que je stocke dans nbUser
5/ je dois comparer ce nombre au nbMystere
    -3 possibilités :
        si le nbUser > nbMystere -> le nombre cherché est plus petit
        si le nbUser < nbMystere -> le nombre cherché est plus grand
        si nbUser == nbMystere   -> on arrête le game
6/ fin de boucle
7/ Message de félicitations.
*/

// version 1 : 
/*
let nbMystere= Math.round(1+49*Math.random());
let nbUser=0;
console.log('cheat : le nombre cherché est '+nbMystere); // astuce ^^
while (nbUser!=nbMystere) {
    nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50 : "));
    if (nbUser>nbMystere){
         // le nombre cherché est plus petit
        alert('le nombre cherché est plus petit');
    }else if(nbUser<nbMystere){
        // le nombre cherché est plus grand
        alert('le nombre cherché est plus grand');
    }else{
        // ça veut forcément dire que nbUser == nbMystere 
        alert('Bravo, bien ouéj !');
    }
}
*/
// version 2 : compter le nombre de coups
/*
let nbMystere= Math.round(1+49*Math.random());
let nbUser=0;
// si on veut compter le nombre de coups :
let nbCoups=0;

console.log('cheat : le nombre cherché est '+nbMystere); // astuce ^^
while (nbUser!=nbMystere) {
    nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50 : "));
    nbCoups++;
    // je lance mes tests :
    if (nbUser>nbMystere){
        // le nombre cherché est plus petit
        alert('le nombre cherché est plus petit');
    }else if(nbUser<nbMystere){
        // le nombre cherché est plus grand
        alert('le nombre cherché est plus grand');
    }else{
        // ça veut forcément dire que nbUser == nbMystere 
        alert('Bravo, bien ouéj ! Vous avez trouvé en : '+nbCoups+" tentatives.");
    }
}
*/
// version 3 : s'assurer de la validité des propositions de l'utilasateur :
/*
let nbMystere= Math.round(1+49*Math.random());
let nbUser=0;
// si on veut compter le nombre de coups :
let nbCoups=0;

console.log('cheat : le nombre cherché est '+nbMystere); // astuce ^^
while (nbUser!=nbMystere) {
    nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50 : "));
    // je veux vérifier que le nombre donné par l'utilisateur est bien compris 
    // entre 1 et 50 : 
    // && : "ET" LOGIQUE il faut que les 2 conditions soient vraies pour entrer dans le if
    if (nbUser<=50 && nbUser>=1) { 
        nbCoups++;
        // je lance mes tests :
        if (nbUser>nbMystere){
            // le nombre cherché est plus petit
            alert('le nombre cherché est plus petit');
        }else if(nbUser<nbMystere){
            // le nombre cherché est plus grand
            alert('le nombre cherché est plus grand');
        }else{
            // ça veut forcément dire que nbUser == nbMystere 
            alert('Bravo, bien ouéj ! Vous avez trouvé en : '+nbCoups+" tentatives.");
        }
    }else{
        // le nombre donné n'est pas entre 1 et 50 !
        alert('Valeur non conforme, recommencez !');
    }
}
*/

/*
8/ Bonus : 
    -Compter le nombre de coups de l'utilisateur avant de trouver le bon nombre
    -S'assurer que le nombre fourni par l'utilisateur respecte la consigne (pas de 45938 par ex)
    -Donner une limite de coups à l'utilisateur (par exemple 8), et terminer le jeu après ces 8
     tentatives (en affichant un message d'humiliation, par exemple :-/ )
*/

// version 4 : si on veut limiter le nombre de tentatives du joueur :
let nbMystere= Math.round(1+49*Math.random());
let nbUser=0;
// si on veut compter le nombre de coups :
let nbCoups=0;

console.log('cheat : le nombre cherché est '+nbMystere); // astuce ^^
while (nbUser!=nbMystere && nbCoups<=8 ) {
    if(nbCoups!=8){
        nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50 : "));
        // je veux vérifier que le nombre donné par l'utilisateur est bien compris 
        // entre 1 et 50 : 
        // && : "ET" LOGIQUE il faut que les 2 conditions soient vraies pour entrer dans le if
        if (nbUser<=50 && nbUser>=1) { 
            nbCoups++;
            // je lance mes tests :
            if (nbUser>nbMystere){
                // le nombre cherché est plus petit
                alert('le nombre cherché est plus petit');
            }else if(nbUser<nbMystere){
                // le nombre cherché est plus grand
                alert('le nombre cherché est plus grand');
            }else{
                // ça veut forcément dire que nbUser == nbMystere 
                alert('Bravo, bien ouéj ! Vous avez trouvé en : '+nbCoups+" tentatives.");
            }
        }else{
            // le nombre donné n'est pas entre 1 et 50 !
            alert('Valeur non conforme, recommencez !');
        }
    }else{
        alert('Désolé, vous n avez plus de tentatives... le nombre était : '+nbMystere);
         nbUser=nbMystere;
        // ou tentatives=9;
    }
    
}
