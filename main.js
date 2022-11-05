const pokemon_box = document.getElementById("pokemon_box");
const pokemon_number = 301;


async function fetchPokemons() {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
};

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemon(pokemon);
    
}

function createPokemon (pokemon) {
    const pokemonObject = document.createElement('div');
    pokemonObject.classList.add('pokemon');
    const { id, name, sprites, types } = pokemon;
    var type = types[0].type.name;
    pokemonObject.classList.add(type);
    const pokemonInnerHTML = `
    <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name.toIpp}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
    pokemonObject.innerHTML = pokemonInnerHTML;
    pokemon_box.appendChild(pokemonObject);
    console.log(pokemonObject);
  
}


function liveSearch() {
    // Locate the card elements
    let cards = document.querySelectorAll('.pokemon')
    // Locate the search input
    let search_query = document.getElementById("searchbox").value;
    // Loop through the cards
    for (var i = 0; i < cards.length; i++) {
      // If the text is within the card...
      if(cards[i].innerText.toLowerCase()
        // ...and the text matches the search query...
        .includes(search_query.toLowerCase())) {
          // ...remove the `.is-hidden` class.
          cards[i].classList.remove("is-hidden");
      } else {
        // Otherwise, add the class.
        cards[i].classList.add("is-hidden");
      }
    }
  }


fetchPokemons();


