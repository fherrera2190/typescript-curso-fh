(() => {
  class Avenger {
    //default public  private or protected or static
    static avgAge: number = 35;

    // Forma 1
    // private name: string;
    // private team: string;
    // public realName?: string;

    // constructor(name: string, team: string, realName?: string) {
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName;
    // }

    // Forma 2
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    bio() {
      return `${this.name} (${this.team})`;
    }

    static getAvgAge() {
      return this.name;
    }
  }
  const antman: Avenger = new Avenger("Antman", "Capitan");

  // console.log(antman);
  // console.log(Avenger.avgAge);

  // console.log(antman.bio());

  // console.log(Avenger.getAvgAge());
  // console.log(Avenger.avgAge);

})();
