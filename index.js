var Dog = require('./Dog.js');
var Cat = require('./Cat.js');
var Mouse = require('./Mouse.js');


let catTom = new Cat('Tom');
let mouseJerry = new Mouse('Jerry');
let dog = new Dog();

catTom.eat(mouseJerry);
try {
    catTom.eat(dog)
} catch ( error ) {
    console.log('Dog too big for cat to eat ! ');
}

console.log(catTom);

