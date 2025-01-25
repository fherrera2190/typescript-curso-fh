"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const sayHello = (name) => `Hello ${name}`;
    const saveTheWorld = () => "El mundo esta salvado";
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
