const lista = document.getElementById('pokemons');
const button =  document.getElementById('loadButton');
const limit = 10;
let offset = 0;
const maxRecords = 150;


// funcao para conerte os os dados de pokemons em listas
function converteListaPokemon(pokemon){
	return `
		<li class="pokemon ${pokemon.type}" >
			<span class="number">${pokemon.id}</span>
			<span class="name">${pokemon.name}</span>
			
			<div class="detalhes">
			
				<ol class="types">
					${pokemon.types.map((type) => `<li  class="type ${type}">${type}</li>`).join('')} 
				</ol>
				<img src="${pokemon.urlfoto}" alt="${pokemon.name}">

			</div>
		
		</li>
	`
}



// funcao de carrega mais itens no click
function CarregarMaisItens(offset ,limit)
{
	pokeapi.getPokemons(offset,limit).then((pokemonList = []) =>{// imprime o retorno de json
        const newhtml =  pokemonList.map((converteListaPokemon)).join('');
		// forma mais simples de percorre o objeto
		lista.innerHTML  += newhtml;
	
		
	})
	
}

CarregarMaisItens(offset,limit)

// quando clicar no botao vai verifica ate a maximo permitido
button.addEventListener('click',() =>{
	offset += limit

	const qtdrecord = offset + limit

	if(qtdrecord >= maxRecords)
	{
		const newLimit =  maxRecords - offset
		CarregarMaisItens(offset,newLimit)

		button.parentElement.removeChild(button)

	}else
	{
		CarregarMaisItens(offset,limit)

	}
	

})
