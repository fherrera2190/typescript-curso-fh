"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman });
    isSuperman = true && false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
//# sourceMappingURL=booleans.js.map