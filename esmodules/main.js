// import sum, { obj, obj2 } from './chunk.js'

setTimeout(() => {
  import("./chunk.js").then((module) => {
    const { obj2, obj, default: sum } = module;

    console.log(sum(1, 2));
    console.log(obj, obj2);
  });
}, 2000);
