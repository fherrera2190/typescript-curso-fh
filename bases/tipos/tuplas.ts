(() => {
  const hero: [string, number] = ["Ironman", 45];

  // Error Type 'number' is not assignable to type 'string'
  //   hero[0] = 50;
  // hero[1] ="Nemesis"

  //   RARO me lo toma
  hero.push("hello");

  console.log(hero);
})();
