// // import { Hero as SuperHero, Hero2 } from "./clases/Hero";
// import { Hero } from "./clases/Hero";

import {
  genericArrowFunction,
  genericFunction,
  printObject,
} from "../generics/generics";
import { Hero, Villian } from "../interfaces";

// import powers from "./data/power";

// import * as HeroClasses from "./clases/Hero";

// const Hero = 123;

// const ironman = new Hero("ironman", 1, "30");

// console.log(ironman);

// console.log(powers);

// console.log(ironman.power)

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2 });
// printObject([1, 2, 3]);
// printObject("hola");

// Error Property 'toFixed' does not exist on type 'string'.ts(2339)
// console.log(genericFunction("new Date()").toFixed(2));
// console.log(genericFunction(3.1416345).toFixed(2));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericArrowFunction<Villian>(deadpool).dangerLevel);
