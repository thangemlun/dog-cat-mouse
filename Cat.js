function Cat(name){
	this.name = name ;
	this.dead = false ;
	this.stomach = [] ;
}

Cat.prototype.die = function(){
	this.dead = true;
};

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die();
};

module.exports = Cat ;