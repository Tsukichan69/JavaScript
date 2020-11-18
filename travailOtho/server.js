const express = require('express');
const app = express();
const PORT = 3000;

const pokedex = require('./data/pokedex.json');
//Requête à la racine
app.get('/', (req, res) => {
	res.status(200).json(pokedex);
});

app.get('/:id',(req, res) =>{
	const numero = parseInt(req.params.id);
	const pokemon = pokedex.find(pkmn => pkmn.id === numero); //Correspond à une boucle for pour chaque pokemon
	res.status(200).json(pokemon);
});

app.get('/:id/frenchname', (req, res) => {
	const numero = parseInt(req.params.id);
	const pokemon = pokedex.find(pkmn => pkmn.id === numero);
	res.status(200).json(pokemon.name.french);
});











//Requête : tout sauf ce que j'ai déjà défini
/* app.get('*', (req, res) => {
	res.redirect('/');
})
 */

//Exécution du serveur => sera à la toute fin
app.listen(PORT, () => {
	console.log('Server is running on port :', PORT)
})