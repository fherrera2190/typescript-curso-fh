(() => {
  // Type number[]
  // const number = [1,2,3,4,5];

  // Type (number | string)[]
  const number = [1, 2, 3, 4, 5, "6"];

  //   const number: (number | string | true)[] = [1, 2, 3, 4, 5, "6"];

  // Error argument of type 'boolean' is not assignable to parameter of type 'number'
  // number.push(true)

  number.push("7");

  number.push(8);

  console.log(number);

  const villians = ["Lex Luthor", "Doomsday"];

  villians.forEach((villian) => {
    console.log(villian.toLocaleUpperCase);
  });

  //   Error property 'toLocaleUpperCase' does not exist on type 'number'
  //   number.forEach((villian) => {
  //     console.log(villian.toLocaleUpperCase);
  //   });



})();
