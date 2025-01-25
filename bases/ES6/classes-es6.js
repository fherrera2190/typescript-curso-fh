(() => {
  class Avenger {
    name;
    weapon;

    constructor() {
      console.log("nemesis");
    }
  }

  const ironman = new Avenger();

  console.log(ironman);

  class FlyingAvenger extends Avenger {
    flying;

    constructor() {
      super();
      this.flying = true;
    }
  }

  const capitanAmerica = new FlyingAvenger();
  console.log(capitanAmerica);
})();
