(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "armadura",
  };

  const capitan: Avenger = {
    name: "Capitan America",
    weapon: "Escudo",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, capitan, thor];

  for (const avenger of avengers) {
    console.log(avenger);
  }
})();
