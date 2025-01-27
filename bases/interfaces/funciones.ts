(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFuncion: AddTwoNumbers;

  addNumbersFuncion = (a: number, b: number) => {
    return 10;
  };
})();
