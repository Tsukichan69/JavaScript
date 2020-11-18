
function add(nombre1:number,nombre2:number): number /*Dit que la fonction retourne un nombre*/{
	return nombre1+nombre2;
}

function lancerCalcul(event){
	event.preventDefault();
	let n1 = (document.getElementById("nombre1") as HTMLInputElement).value;
	let n2 = (document.getElementById("nombre2") as HTMLInputElement).value;

	console.log(add(parseInt(n1),parseInt(n2)));
}

document.getElementById("form").addEventListener("submit",lancerCalcul);
