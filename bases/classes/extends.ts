(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
    //   console.log("Constructor Avenger llamado");
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
    //   console.log("Constructor Xmen llamado");
    }

    getFullNameDesdeXmen(): string {
      console.log(super.getFullName());
      return "";
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe ser mas largo de 3 letras");
      }
      this.name = name;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  //   console.log(wolverine.fullName);
  //   wolverine.fullName = "Wolverine 2";
  //   console.log(wolverine.fullName);
})();
