//CORRECTION
type mammifere ={
	ordre:string;
	nom:string;
	image:string;
	id:number;
};

let tabMammiferes : mammifere[] = [];

//Fonction pour remplir le tableau
function addMammifereToTab(ordre:string, nom:string, url:string, tab: mammifere[]) :mammifere {
	let nouveauMammifere = {
		id: tab.length,
		ordre: ordre,
		nom: nom,
		image: url
	};
	tab.push(nouveauMammifere);
	return nouveauMammifere;
};
//On met le tableau dans les paramètres parce que comme ça on peut utiliser la fonction pour tout type de tableau

/* Insère le mammifère à une balise dont l'identifiant doit être fourni*/
function addMammifereToDomElement(mammifere:mammifere, domElementId:string){
	let template =`
	<div class="card text-white bg-secondary mb-3 mr-2 ml-2" style="max-width: 20rem;">
		<div class="card-header text-center">Mammifère</div>
		<div class="card-body">
			<h4 class="card-title text-center">${mammifere.ordre}</h4>
			<p class="card-text text-center">${mammifere.nom}</p>
			<figure><img class="w-100" src="${mammifere.image}" alt="image de l'animal"></figure>
			<button type="button" class="btn btn-primary" onclick="modifierMammifere('${mammifere.id}')">Modifier</button>
		</div>
	</div>`;
	let domElement = document.getElementById(domElementId);
	if(domElement){
		domElement.innerHTML += template;
	} else {
		throw Error("Balise html "+domElementId+" non trouvée");
	}
}
//Fonction qui traite le formulaire
//Tab = le tableau dans lequel on ajoute le mammifère
//DomElementId = identifiant de la balise dans laquelle on ajoute le nouveau mammifère
function traiterFormulaire(tab : mammifere[], domElementId : string): void{
	(document.getElementById("blocBoutonsEdition") as HTMLDivElement).style.display="none";
	(document.getElementById("form") as HTMLFormElement).addEventListener("submit", (event: Event)=>{
		event.preventDefault();
		let ordre = (document.getElementById("ordre") as HTMLInputElement).value;
		let nom = (document.getElementById("nom") as HTMLInputElement).value;
		let image = (document.getElementById("image") as HTMLInputElement).value;
		let nouveauMammifere = addMammifereToTab(ordre, nom, image,tab);
		addMammifereToDomElement(nouveauMammifere, domElementId);
	});
};
function modifierMammifere(identifiantMammifere : string){
	let mam = tabMammiferes.find((m=>m.id === parseInt(identifiantMammifere)))!;
	(document.getElementById("ordre") as HTMLInputElement).value = mam.ordre;
	(document.getElementById("nom") as HTMLInputElement).value = mam.nom;
	(document.getElementById("image") as HTMLInputElement).value = mam.image;
	(document.getElementById("submit") as HTMLButtonElement).style.display="none";
	(document.getElementById("blocBoutonsEdition") as HTMLDivElement).style.display="block";
};
function reinitialiserFormulaire(ordre:string ="", nom:string ="", url:string =""){
	(document.getElementById("ordre") as HTMLInputElement).value = ordre;
	(document.getElementById("nom") as HTMLInputElement).value = nom;
	(document.getElementById("image") as HTMLInputElement).value = url;
};
function annulerEdition(){
	reinitialiserFormulaire();
}







function initApp(){
addMammifereToTab("Monotrèmes", "Ornithorynque", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dN6g07qo2kg839evxMn6jgHaFf%26pid%3DApi&f=1", tabMammiferes);
addMammifereToTab("Carnivore", "Chat", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r6S5AKv5OICLrJ1I1BoASwHaJE%26pid%3DApi&f=1", tabMammiferes);
addMammifereToTab("Lagormorphe", "Lapin", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4C6eiULamSW7ce_D3anVPgHaHa%26pid%3DApi&f=1", tabMammiferes);
addMammifereToTab("Marsupial", "Kangourou","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JRj6YO1IyBOetAUKrVmBoQAAAA%26pid%3DApi&f=1", tabMammiferes);
addMammifereToTab("Ruminant", "Vache", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.46z0U6lfrJT5ei7Tz3c5sQHaD5%26pid%3DApi&f=1", tabMammiferes);
for (let m of tabMammiferes){
	addMammifereToDomElement(m, "listMam");
};
traiterFormulaire(tabMammiferes, "listMam");
};

initApp();












/* 




type mammifere = {ordre:string, nom:string, image:URL}
let mamArray : mammifere[] = [];
let ordre = (document.getElementById("ordre") as HTMLInputElement).value;
let nom = (document.getElementById("nom") as HTMLInputElement).value;
let image = (document.getElementById("image") as HTMLInputElement).value;
console.log(ordre, nom, image);
function addMam(ordre:string, nom:string, image:URL){
	mamArray.push({
	ordre = ordre,
	nom = nom,
	image = image
	});
};
let form = document.getElementById("form");
form?.addEventListener("submit", function(e){
	e.preventDefault();
	for (let mammifere of mamArray){
		addToDOM(mammifere);
	}
});
function addToDOM(mammifere : any){
	(document.getElementById("listMam") as HTMLDivElement).innerHTML+=`
		<div class="card text-white bg-secondary mb-3 mr-2 ml-2" style="max-width: 20rem;">
			<div class="card-header text-center">Mammifère</div>
			<div class="card-body">
				<h4 class="card-title text-center">${ordre}</h4>
				<p class="card-text text-center">${nom}</p>
				<figure><img class="w-100" src="${image}" alt="image de l'animal"></figure>
			</div>
		</div>`
}; */