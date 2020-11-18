let nbMystere= Math.round(1+49*Math.random());
let nbUser=0;
// si on veut compter le nombre de coups :
let nbCoups=0;
let limiteNbCoups=4;
jeuEnCours=true; //variable booléenne

console.log('cheat : le nombre cherché est '+nbMystere); // astuce ^^
while (jeuEnCours) { //Correspond à jeuEnCours==true, pour tester la négation on écrit !jeuEnCours
    if(nbCoups!=4){
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
				jeuEnCours=false; //On peut aussi utiliser jeuEnCours=!jeuEnCours, on inverse la booléenne
            }
        }else{
            // le nombre donné n'est pas entre 1 et 50 !
            alert('Valeur non conforme, recommencez !');
        }
    }else{
        alert('Désolé, vous n avez plus de tentatives... le nombre était : '+nbMystere);
        jeuEnCours=false;
    }
    
}
