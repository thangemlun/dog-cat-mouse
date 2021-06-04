const Dog = require('./Dog.js');
const Cat = require('./Cat.js');
const Mouse = require('./Mouse.js');

let catTom = new Cat('Tom');

let mouseJerry = new Mouse('jerry');

let dogPluto = new Dog('Lulu');

catTom.eat(mouseJerry);

dogPluto.eat(catTom);

console.log(dogPluto);
