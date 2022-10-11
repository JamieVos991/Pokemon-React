import PokemonCardWrapper from "../layouts/PokemonCard/PokemonCardWrapper";
import CounterCard from "../components/CounterCard/CounterCard";
import "./App.css";

const App = () => {
    return (
        <main className="main">
            <PokemonCardWrapper />
            <CounterCard/>
        </main>
    );
}

export default App;