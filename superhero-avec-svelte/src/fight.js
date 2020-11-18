const stats1 = {
	intelligence: 69,
	strength: 32,
	speed: 50,
	durability: 100,
	power: 100,
	combat: 100,
};

const stats2 = {
	intelligence: 88,
	strength: 52,
	speed: 33,
	durability: 25,
	power: 100,
	combat: 90,
};

export const fight =(statsHeroOne, statsHeroTwo) => {
	const monTableau = ["clé","valeur"];
	const [key,value] = monTableau;

	for(const element of Object.entries(statsHeroOne)){
		statsHeroOne[key] = parseInt(value);
	};

	//Points de vie
	const heroOneHP = (statsHeroOne.durability + statsHeroOne.combat + (statsHeroOne.intelligence / 2)) * 10;
	console.log(`HP du premier héro : ${heroOneHP}`);
	const heroTwoHP = (statsHeroTwo.durability + statsHeroTwo.combat + (statsHeroTwo.intelligence / 2)) * 10;
	console.log(`HP du deuxième héro : ${heroTwoHP}`);

	//Valeur d'attaque
	const heroOneAttack = (statsHeroOne.strength + statsHeroOne.power + (statsHeroOne.intelligence / 2)) * (statsHeroOne.speed/100); //Dit tous les combien de tour il attaque
	console.log(`HP du premier héro : ${heroOneAttack}`);
	const heroTwoAttack = (statsHeroTwo.strength + statsHeroTwo.power + (statsHeroTwo.intelligence / 2)) * (statsHeroTwo.speed/100); //Dit tous les combien de tour il attaque
	console.log(`HP du deuxième héro : ${heroTwoAttack}`);

	const turnsToDefeatHeroOne = heroOneHP / heroTwoAttack;
	const turnsToDefeatHeroTwo = heroTwoHP / heroOneAttack;

	/* console.log(`Nombre de tours pour venir à bout du premier héro : ${turnsToDefeatHeroOne}`);
	console.log(`Nombre de tours pour venir à bout du deuxième héro : ${turnsToDefeatHeroTwo}`); */

	const winner = turnsToDefeatHeroOne > turnsToDefeatHeroTwo ? 1 : 2;
	return winner;
};