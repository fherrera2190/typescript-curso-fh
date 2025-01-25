(() => {
  type Avengers = {
    nick: string;
    iroman: string;
    vision: string;
    spiderman: string;
    activo: boolean;
    poder: number;
  };

  const avengers = {
    nick: "Samuel L. Jackson",
    iroman: "Robert Downey Jr",
    vision: "Paul Bettany",
    spiderman: "Tom Holland",
    activo: true,
    poder: 1500,
  };

  const { poder, vision } = avengers;

  console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ vision, ...rest }: Avengers) => {
    console.log(vision, rest);
  };

  printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ["Cap. America", true, 65022];

  const iroman = avengersArr[1];

  const [capitan, iroman2, unNumero] = avengersArr;

  console.log(iroman, iroman2);
})();
