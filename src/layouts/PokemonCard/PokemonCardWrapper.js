import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css";

const PokemonCardWrapper = (props) => {
    return (
        <section className="pokemonCardWrapper">

            <PokemonCard
                pokemonName="Krookodile"
                pokemonType={["ground", "dark"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png"
                pokemonHP="95"
                updateCounter={props.updateCounter}
            />

            <PokemonCard
                pokemonName="Charizard"
                pokemonType={["fire", "flying"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
                pokemonHP="78"
                updateCounter={props.updateCounter}
            />

            <PokemonCard
                pokemonName="Abomasnow"
                pokemonType={["grass", "ice"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png"
                pokemonHP="90"
                updateCounter={props.updateCounter}
            />

            <PokemonCard
                pokemonName="Golisopod"
                pokemonType={["bug", "water"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png"
                pokemonHP="75"
                updateCounter={props.updateCounter}
            />

        </section>
    );
}

export default PokemonCardWrapper;