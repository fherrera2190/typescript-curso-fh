"use strict";
(() => {
    let isSuperman = true;
    // Error Type 'undefined' is not assignable to type 'boolean'
    //   isSuperman = undefined;
    let isBatman = false;
    console.log({ isBatman });
    isSuperman = true && false;
    //  Error Type 'string' is not assignable to type 'boolean'
    //   isSuperman = isBatman ? "ABC" : "DEF";
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
