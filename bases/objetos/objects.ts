
(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  // Error: Property 'name2' does not exist on type
  // flash={
  //   name2: "Barry",
  // }

  flash = {
    name: "Clark",
    age: 24,
    powers: ["Super fuerza"],
    getName() {
      return this.name;
    },
  };
  console.log(flash);
})();
