"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const sayHello = (name) => `Hello ${name}`;
    const saveTheWorld = () => "El mundo esta salvado";
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = sayHello;
    console.log(myFunction("Fernando"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map