import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css";

const PokemonCardWrapper = () => {
    return (
        <section className="pokemonCardWrapper">

            <PokemonCard
                pokemonName="Krokoodile"
                pokemonType={["ground", "dark"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png"
                pokemonHP="95"
            />

            <PokemonCard
                pokemonName="Charizard"
                pokemonType={["fire", "flying"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
                pokemonHP="78"
            />

            <PokemonCard
                pokemonName="Leafeon"
                pokemonType={["grass"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png"
                pokemonHP="65"
            />

            <PokemonCard
                pokemonName="Golisopod"
                pokemonType={["bug", "water"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png"
                pokemonHP="75"
            />

        </section>
    );
}

export default PokemonCardWrapper;