import React from "react";
import "./PokemonCard.css";

class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hp: 0, caught: false }
    }

    componentDidMount() {
        this.setState({ hp: this.props.pokemonHP })
    }

    attack = () => {
        let randomNumber = Math.floor(Math.random() * (30 - 1) + 1);
        console.log(randomNumber);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function () {
            if (this.state.hp <= 0) {
                console.log("Dood!");
                this.setState({
                    hp: 0
                })
            }
        })

        console.log("Attack!");
    }

    catch = () => {
        console.log("Catch");
    }

    render() {
        let types = this.props.pokemonType.map(function (type) {
            return <span className={`pokemonCard__type pokemonCard__type--${type}`}>{type}</span>
        });

        let Buttons = null;
        if (this.state.caught === false) {
            Buttons =
                <>
                    <button onClick={this.attack} className="pokemonCard__button pokemonCard__button--attack">Attack</button>
                    <button onClick={this.catch} className="pokemonCard__button pokemonCard__button--catch">Catch</button>
                </>
        }
        return (
            <article className="pokemonCard">
                <header className="pokemonCard__header">
                    <h2 className="pokemonCard__title">{this.props.pokemonName}</h2>
                    <div className="pokemonCard__labelWrapper">
                        {types}
                    </div>
                </header>
                <section className="pokemonCard__section">
                    <figure className="pokemonCard__figure">
                        <img src={this.props.pokemonImage} alt="" className="pokemonCard__img"></img>
                    </figure>
                    <div className="pokemonCarD__h3Wrapper">
                        <h3 className="pokemonCard__HP">{this.state.hp}</h3>
                    </div>
                </section>
                <footer className="pokemonCard__footer">
                    {Buttons}
                </footer>
            </article>
        );
    }
}

export default PokemonCard;