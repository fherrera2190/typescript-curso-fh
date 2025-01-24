(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: ${batman} - Poder: ${linternaVerde}`;
  console.log(batman.toLocaleUpperCase());
  console.log(batman[10]?.toLocaleUpperCase());

  console.log(batman[10] ?? batman.toLocaleUpperCase());
  //   const param = 5;
  //   const value = param ?? 42;
})();
