(() => {
  let avenger: any = 123;
  let exist;
  let power;

  avenger = "Fernando";
  //   console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0)); //Con cast
  avenger = 150.921379127;
  console.log(avenger.toFixed(2));
  console.log((<number> avenger).toFixed(2)); // Con cast

  console.log(exist);
  console.log(power);
})();
