"use strict";
(() => {
    function callBatman() {
        //   Error type 'number' is not assignable to type 'void'
        // return 1;
        return;
    }
    const callSuperman = () => { };
    const a = callBatman();
    console.log(a);
})();
