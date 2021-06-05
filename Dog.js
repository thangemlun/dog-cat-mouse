var chalk = require('chalk');

function Dog(name) {
    this.name = name;
    this.stomach = [] ;
}

Dog.prototype.eat = function(cat) {
this.stomach.push(cat);
cat.die();
console.log(cat);
}

Dog.prototype.sayHi = function() {
console.log('Hi my name is ' + chalk.red(this.name));
};

module.exports = Dog ;
