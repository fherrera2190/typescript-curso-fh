import { Pokemon } from "./decorators/pokemon-class";
import { getPokemon } from "./generics/getPokemon";

// getPokemon(4)
//   .then((pokemon) => console.log(pokemon.sprites.front_default))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally"));

const charmander = new Pokemon("charmander");

// (Pokemon.prototype as any).customName = "pikachu";

charmander.savePokemonToDB(-5);
