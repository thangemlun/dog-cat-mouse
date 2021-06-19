function Horse() {

}

Horse.prototype.run = function() {
console.log('running');
}

Horse.prototype.jump = function() {
console.log("Jump ... ");
}
module.exports = Horse ;