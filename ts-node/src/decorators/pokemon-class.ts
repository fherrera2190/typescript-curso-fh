//Funcion que se ejecuta al momento de transpilar
function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  // return () => console.log("Hola Mundo");

  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(">>>>>>", target, propertyKey, descriptor);

    const originalMethod = descriptor.value;

    descriptor.value = function (id: number) {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe estar entre 1 y 800");
      }
      return originalMethod(id);
    };
    //descriptor.value = () => console.log("Nemesis");
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (
    target: any,
    propertyKey: string
    // descriptor: PropertyDescriptor se lo crea
  ) {
    // console.log("<<<<<<<<<<<<<<<", target, propertyKey, descriptor);

    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Fernando";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

// @printToConsole
@bloquearPrototipo //Decorator
@printToConsoleConditional(false) //Factory decorator
export class Pokemon {
  @readonly(true)
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log("Pokemon saved to DB", id);
  }
}
