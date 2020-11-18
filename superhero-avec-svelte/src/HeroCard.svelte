<script>
	//Je cherche à récupérer les données passées à mon composant
	//Dans ce cas précis, je veux récupérer "infos"
	export let infos;
</script>

<!--Pour vérifier qu'une propriété d'un objet existe avant d'y accéder on peut mettre un ? à la fin de cette propriété. Si celle - ci existe, on peut la lire, sinon, on arrête là le traitement pour éviter une erreur-->
<div class="max-w-sm rounded overflow-hidden shadow-lg" >
	<img class="w-full" src="{infos?.image?.url}" alt="Patientez une seconde">
	<div class="px-6 py-4">
	<div class="font-bold text-xl mb-2">{infos?.["name"]}</div>
	<div class="text-lg mb-2">{infos?.biography?.["full-name"]}</div> <!--comme il y a un tiret il faut mettre entre crochets-->
	<!-- <p class="text-gray-700 text-base">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
	</p> -->
	</div>
	<div class="px-6 pt-4 pb-2">
	<span class="inline-block {infos?.powerstats?.intelligence < 50 ? "bg-blue-200 text-blue-800" : "bg-blue-800 text-blue-200"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Intelligence : {infos?.powerstats?.intelligence}</span>
	<span class="inline-block {infos?.powerstats?.strength < 50 ? "bg-red-200 text-red-800" : "bg-red-800 text-red-200"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Strength : {infos?.powerstats?.strength}</span>
	<span class="inline-block {infos?.powerstats?.speed < 50 ? "bg-green-200 text-green-800" : "bg-red-800 text-red-200"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Speed : {infos?.powerstats?.speed}</span>
	<span class="inline-block {infos?.powerstats?.durability < 50 ? "bg-yellow-200 text-yellow-800" : "bg-yellow-800 text-yellow-200"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Durability : {infos?.powerstats?.durability}</span>
	<span class="inline-block {infos?.powerstats?.power < 50 ? "bg-purple-200 text-purple-800" : "bg-purple-800 text-purple-200"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Power : {infos?.powerstats?.power}</span>
	<span class="inline-block {infos?.powerstats?.combat < 50 ? "bg-teal-200 text-teal-800" : "bg-teal-800 text-teal-200"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Combat : {infos?.powerstats?.combat}</span>
	</div>
</div>