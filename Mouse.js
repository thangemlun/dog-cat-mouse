function Mouse(name) {
    this.name = name ;
    this.dead = false;
}

Mouse.prototype.die = function() {
this.dead = true;
};

Mouse.prototype.run = function() {
console.log("run...");

Mouse.prototype.sleep = function() {
console.log("Sleep.....");

}

module.exports = Mouse;