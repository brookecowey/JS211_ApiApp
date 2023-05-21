
const arena = []
async function getPoke() {
  const rndInt = Math.floor(Math.random() * 1000) + 1
  console.log(rndInt)

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rndInt}`);
  const jsonData = await response.json();
  console.log(jsonData);
  arena.push(jsonData);
  console.log(arena);
}

const battle = () => {
  console.log(arena[0].stats[0].base_stat);
  
  const poke1 = arena[0].stats[0].base_stat
  const poke2 = arena[1].stats[0].base_stat

  if (poke1 > poke2){

    return console.log("Poke 1 wins!")
  }
  else {
    return console.log("Poke 2 wins!")
  }
}
