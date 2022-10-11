import "./PokemonCard.css";

const PokemonCard = () => {
    return (
        <article className="pokemonCard">
            <header className="pokemonCard__header">
                <h2 className="pokemonCard__title">Krookodile</h2>
                <div className="pokemonCard__labelWrapper">
                    <span className="pokemonCard__type pokemonCard__type--ground">Ground</span>
                    <span className="pokemonCard__type pokemonCard__type--dark">Dark</span>
                </div>
            </header>
            <section className="pokemonCard__section">
                <figure className="pokemonCard__figure">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png" alt="" className="pokemonCard__img"></img>
                </figure>
                <div className="pokemonCarD__h3Wrapper">
                    <h3 className="pokemonCard__HP">HP 95/95</h3>
                </div>
            </section>
            <footer className="pokemonCard__footer">
                <button className="pokemonCard__button pokemonCard__button--attack">Attack</button>
                <button className="pokemonCard__button pokemonCard__button--catch">Catch</button>
            </footer>
        </article>
    );
}

export default PokemonCard;