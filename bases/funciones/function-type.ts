(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const sayHello = (name: string): string => `Hello ${name}`;
  const saveTheWorld = (): string => "El mundo esta salvado";

  let myFunction;

  //   let myFunction:Function;
  myFunction = 10;
  console.log(myFunction);

  //   Firma
  // let myFunction: (a: number, b: number) => number;
  myFunction = addNumber;
  console.log(myFunction(1, 2));

  //   Firma
  // let myFunction: (name: string) => string;
  myFunction = sayHello;
  console.log(myFunction("Fernando"));

  //   Firma
  // let myFunction: () => string;
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
