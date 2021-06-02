function mouse(name, die){
	this.name = name ;
	this.die = false;
}

mouse.prototype.die = function(){
	this.die = true;
};


function cat(){
	this.stomach = [] ;
}

cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die = true ;	
};

let cat1 = new cat() ;
let mouse1 = new mouse('jerry',false);

cat1.eat(mouse1);

console.log(cat1.stomach);
console.log(mouse1.die); 