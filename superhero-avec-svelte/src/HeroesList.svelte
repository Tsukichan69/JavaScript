<script>
	import {heroes as heroesList} from "./heroes";
</script>

<section>
	<h1>Liste des héros</h1>
	<ul>
		{#each heroesList as hero(hero.id)}
		<li>{hero.name}</li>
		{/each}
	</ul>
</section>