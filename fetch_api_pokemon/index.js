async function fetchData() {

    const inputPokemon = document.getElementById('inputPokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`;

    

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById(`pokemonSprite`);
        imgElement.src = pokemonSprite;
        imgElement.alt = inputPokemon;
        imgElement.style.display = 'block';

        const pokemonNameElement = document.getElementById('pokemonName');
        pokemonNameElement.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    }   
    catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

    
}
        