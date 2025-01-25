(() => {
  class Apocalipsis {
    static instace: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instace) {
        Apocalipsis.instace = new Apocalipsis("Fernando");
      }
      return Apocalipsis.instace;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();

  //   const apocalipsis1 = new Apocalipsis("Fernando1");
  //   const apocalipsis2 = new Apocalipsis("Fernando2");
  //   const apocalipsis3 = new Apocalipsis("Fernando3");

  //   console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
