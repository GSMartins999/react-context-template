import Card from "../../components/Card/Card";
import { Container } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function HomePage() {

  //Chamamos aqui nosso hook useContext e definimos o que ele está passando
  const context = useContext(GlobalContext)
  // Aqui chamamos as coisas que chamariamos por props. No caso pokelist e pokedex.
  const { pokelist, pokedex } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
