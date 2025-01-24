(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones

  enum Fuerza {
    Acuaman,
    Batman,
    Flash = 5,
    Superman = 100,
  }
  const fuerzaFlash: Fuerza = Fuerza.Flash;
  const fuerzaSuperman: Fuerza = Fuerza.Superman;
  const fuerzaBatman: Fuerza = Fuerza.Batman;
  const fuerzaAcuaman: Fuerza = Fuerza.Acuaman;
  console.log(fuerzaFlash);

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  const largoDelPoder2: number = (<string>poder).length;

  console.log(largoDelPoder);
  console.log(largoDelPoder2);

  enum enumeracion {
    a=10,
    b,
    c=9,
    d
  }

  console.log(">>>>>>>>>>>>>>>>",enumeracion.d)
  console.log(">>>>>>>>>>>>>>>>",enumeracion.b)

  console.log(">>>>>>>>>>>>>>>>",enumeracion.a)


})();
