"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes = ["khan", "ali", "marvel"];
const favourite = heroes.map(heroes => { return 'my favourite her is ${heroes}'; });
favourite.forEach(heroes => {
    console.log(heroes);
});
console.log("hello");
