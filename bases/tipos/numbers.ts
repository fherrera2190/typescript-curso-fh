(() => {
  // Type any
  // let avenger;
  let avengers = 10;


  const villians: number = 20;

  //   Error  avenger is possibly undefined error dificil de encontrar que nos salva ts, cuando
  // avenger es undefined
  //   if (avengers < villians) {
  //     console.log("Estamos en problemas");
  //   } else {
  //     console.log("Nos salvamos");
  //   }


  avengers  = Number('1234A') // NaN es considerado numero

  console.log({avengers});

})();
