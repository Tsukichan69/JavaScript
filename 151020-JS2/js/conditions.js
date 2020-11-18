// Les conditions :  des tests plus élaborés
/* 
si (faire votre test) , selon le résultat du test -> conséquence(s).

Par exemple :
si vous êtes majeur, vous pouvez entrer...

if (condition) {
    -instruction;
    -instruction;
    ...
}
autreInstruction;

Je veux savoir si l'utilisateur est majeur :

1. demander l'âge de l'utilisateur (et le stocker dans une variable)
2. Faire une condition qui vient tester si l'age est >17
3. si oui, lui souhaiter la bienvenue
3bis. poursuivre avec une formule de politesse quelconque.
*/

let ageUser = prompt("Quel est votre âge ?");

if (ageUser>17) {
    alert("Ok, vous êtes majeur, bienvenue sur le site...");
}
if (ageUser<17) {
    alert("Déso, vous êtes mineur, quittez le site...");
}
alert("Et sinon, quoi de neuf ?");

/* ----------- si / sinon ------------- */
let ageUser2 = prompt("Quel est votre âge ?(2)");
if(ageUser2>17) {
    // majeur
    alert('ok, vous pouvez entrer');
} else {
    // mineur
    alert('You shall not pass...');
}
alert('fin du script');

// A vous de jouer : majeur ou mineur ? (version 3) :
/* 
1.Je veux demander l'année de naissance à l'utilisateur. (que je vais stocker dans une
    variable anneeNaissance)
2. je compare son année de naissance à 2002...
    - si l'année est < 2002 -> majeur
    - sinon ! est-ce 2002 ? ou est-ce  > 2002
      -si 2002, il faut regarder le mois de naissance, et le comparer avec octobre...
*/
let anneeNaissance=prompt("Quelle est votre année de naissance ?");
if(anneeNaissance<2002) {
    alert('ok, you\'re welcome');
} else {
    if(anneeNaissance>2002){
        alert('you are not welcome :(');
    }else{
        // année de naissance == 2002
        let moisNaissance=prompt("Quel est votre mois de naissance ? (ex: 3 pour mars)");
        if(moisNaissance<10){
            alert('ok, you\'re welcome');
        }else{
            // on pourrait demander ici le jour de naissance et continuer à imbriquer 
            // un if/else supplémentaire...
            alert('you are not welcome :(');
        }
    }
}
