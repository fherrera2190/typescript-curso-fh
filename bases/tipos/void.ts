(() => {
  function callBatman(): void {
    //   Error type 'number' is not assignable to type 'void'
    // return 1;
    return;
  }

  const callSuperman = (): void => {};

  const a = callBatman();
  console.log(a);
})();
