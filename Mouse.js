function mouse(name, die){
	this.name = name ;
	this.die = false;
}

mouse.prototype.die = function(){
	this.die = true;
};

module.exports = Mouse;