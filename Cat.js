const Mouse = require('./Mouse.js');


function Cat(name) {
    this.name = name ;
    this.dead = false ;
    this.stomach = [] ;
}

Cat.prototype.die = function() {
this.dead = true;
};

Cat.prototype.eat = function(animal) {
if (animal instanceof Mouse) {
    this.stomach.push(animal);
    animal.die();
} else {
    throw new Error("Can't eat another animal but Mouse !");
}
};

module.exports = Cat ;