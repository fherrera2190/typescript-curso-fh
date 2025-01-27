export const printObject = (argument: any) => {
  console.log(argument);
};

// export function genericFunction(argument: any) {
//   return argument;
// }

export function genericFunction<T>(argument: T) {
  return argument;
}

export const genericArrowFunction = <T>(argument: T) => argument;
