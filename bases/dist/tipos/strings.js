"use strict";
(() => {
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: ${batman} - Poder: ${linternaVerde}`;
    console.log(batman.toLocaleUpperCase());
    console.log(batman[10]?.toLocaleUpperCase());
    console.log(batman[10] ?? batman.toLocaleUpperCase());
})();
//# sourceMappingURL=strings.js.map