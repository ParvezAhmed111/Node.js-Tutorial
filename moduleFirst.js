// common js module
// const simple= require("./moduleSecond")
// simple()

// mjs 
// import {simple2 as simple} from "./moduleSecond_mjs.mjs";
// simple()

import * as a2 from "./moduleSecond_mjs.mjs";
a2.simple();
a2.simple2();