class animaux {
	constructor(espece){
		this.espece = espece;
	}
};
class mammiferes extends animaux{
	constructor(animal){
		super("Vertébré");
		this.animal = animal;
	}
};
class CanisLupus extends mammiferes{
	constructor(race){
		super("Canidé");
		this.race = race;
	}
	cri(){
		console.log(`un ${this.race} fait wouf`);
	}
};
let chien = new CanisLupus("Berger Allemand");
class FelisSilvestrisCatus extends mammiferes{
	constructor(race){
		super("Félidé");
		this.race = race;
	}
	cri(){
		console.log(`un ${this.race} fait miaw`);
	}
};
let chat = new FelisSilvestrisCatus("Sphynx");
console.log(chat, chien);
console.log(chat.animal, chat.espece, chat.race);
console.log(chien.animal, chien.espece, chien.race);
chat.cri();
chien.cri();

