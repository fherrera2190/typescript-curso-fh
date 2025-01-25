"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "-------"}`.toLocaleUpperCase();
        }
        else {
            return `${firstName} ${lastName || "-------"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map