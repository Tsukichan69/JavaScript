<script>
	//Importation des composants :
	import HeroCard from "./HeroCard.svelte";
	import {fight} from "./fight"; // On a fait un export nommé dans le JS donc il faut des accolades, si on exporte par défault on pourra renommer la fonction (en notant dans le JS à la fin export default fight), on écrira alors : import maFonvtionFight frim "./fight" => Par contre je ne peux faire qu'un seul export par défault, mais je peux faire autant d'exports nommés que je le souhaite. 
	//NB si je veux renommer la fonction je peux lui donner un alias : import{fight as maFonctionFight}
	import {fade} from 'svelte/transition';


	//Déclaration des variables :
	// const auteur = "Gwen";
	let superHeroData = null;
	let superHeroId = 247;
	let superHeroData2 = null;
	let superHeroId2 = 729;
	let winner = null;

	// On va créer une fonction qui va nous permettre de récupérer les informations d'un superhéro
	const getSuperhero = (id, heroNumber) => {
		//On va utiliser la méthode fetch pour récupérer une donnée présente sur un autre serveur, on aura toujours une promesse (disant ok, ça ne s'est pas encore téléchargé, mais promis ça va venir), pour avoir la réponse qu'après que ça se soit fait, on utilise .then() avec une fonction dedans
		//Documentation : https://github.github.io/fetch/
		/*fetch("https://www.superheroapi.com/api/10224060538640303/107").then((response) =>{
		response.json().then(data =>{ //Donne un promise donc then ! car on lui demande de récupérer la réponse du suite, ENSUITE convertit moi la réponse afin d'en obtenir les données et ENSUITE affiche moi ces données
			console.log(data);
		});
		}); */
		//autre possibilité d'écriture :
		fetch(`https://www.superheroapi.com/api/10224060538640303/${id}`)
			.then(response => response.json())
			.then(function(data) {
				if(heroNumber === 1){
				superHeroData = data;
			} else if (heroNumber === 2){
				superHeroData2 = data;
			}
			}); // return implicite
		
		};
	/* getSuperhero(346, 1); */
	/* getSuperhero(107, 2); */

	//Fonction Reset
	const reset =() => {
		superHeroData = null;
		superHeroData2 = null;
		winner = null;
	}

	//Fonction start fight 
	const startFight =() => {
		const result = fight(superHeroData.powerstats, superHeroData2.powerstats);
		winner = result === 1 ? superHeroId : superHeroId2;
		console.log(winner);
	}
</script>


<h1>Arène des Super-héros!</h1>
<!-- <p>Créé par {auteur}</p> -->
<!--Je transfert à mon composant HeroCard une propriété nommée infos (nom arbitraire) qui contient l'objet "superHeroData"-->
<div>
	{#if superHeroData && superHeroData2}
	<button on:click={startFight}>Fight</button>
	<button on:click={reset}>Reset</button>
	{/if}
</div>
<div class="flex">
	<div>
		{#if !superHeroData}
		<form on:submit|preventDefault={getSuperhero(superHeroId, 1)}>
			<label for="heroOne">Id du héro :</label>
			<input type="number"min="1" max="731" id="heroOne" bind:value={superHeroId}> <!--On peut donner un minimum et un maximum au formulaire-->
			<button>Rechercher</button>
		</form>
		{:else if winner === null || winner === parseInt(superHeroData.id)} <!--Ou double égal-->
		<div transition:fade>
			<HeroCard infos={superHeroData}/>
		</div> <!--va s'afficher dans le HTML-->
		{/if}
	</div>
	<div>
		{#if !superHeroData2}
		<form on:submit|preventDefault={getSuperhero(superHeroId2, 2)}>>
			<label for="heroTwo">Id du héro :</label>
			<input type="number"min="1" max="731" id="heroTwo" bind:value={superHeroId2}> <!--On peut donner un minimum et un maximum au formulaire-->
			<button>Rechercher</button>
		</form>
		{:else if winner === null || winner === parseInt(superHeroData2.id)}
		<div transition:fade>
			<HeroCard infos={superHeroData2}/>
		</div>
		{/if}
	</div>
</div>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>