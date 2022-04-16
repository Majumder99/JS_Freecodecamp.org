// import { add } from "./exportModules.js";
// console.log(add(3, 4));

// import subtract from "./exportModules.js";
// console.log(subtract(7, 8));

import * as myMod from "./exportModules.js";

console.log(myMod.add(4, 5));
console.log(myMod.subtract(8, 7));
