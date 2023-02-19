
function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
	this.score = 0;
	this.speed = 0;
}


User.prototype.login = function() {
	this.online = true;
	console.log(this.email, 'has logged in')
	return this;
 }
User.prototype.logout = function() {
	this.online = false;
	console.log(this.email, 'has logged out')
	return this;
 }

User.prototype.updateScore = function() {
	this.score++;
	console.log(this.email, 'scored', this.score)
	return this;
 }

User.prototype.run = function(speed) {
	this.speed = speed;
	console.log(this.name, 'has a speed of', this.speed)
	return this;
}


function Admin(...args) {
	User.apply(this, args)
	this.role = 'head';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
	users = users.filter((u) => {
		return u.email != user.email;
	})
}




let userOne = new User('netninja.com', 'yoshi')
let userTwo = new User('techninja.net', 'mario')
let admin = new Admin('admin@dhvsu.ph', 'advisor')

let users = [userOne, userTwo, admin]

console.log(users)

/*
class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.online = false;
		this.score = 0;
		this.run = 0;
	}

	login () {
		this.online = true;
		console.log(this.email, 'logged in')
		return this;
	}
	logout () {
		this.online = false;
		console.log(this.email, 'logged out')
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.email, 'score is now', this.score)
		return this;
	}
	speed (run) {
		this.run = run;
		console.log(this.name, 'has ', this.run, 'speed')
		return this;
	}
}

class Admin extends User {
	deleteUser(user) {
		users = users.filter((u) => {
			return u.email != user.email;
		})
	}
}


let userOne = new User('netninja.com', 'yoshi')
let userTwo = new User('techninja.net', 'mario')
let admin = new Admin('admin@dhvsu.ph', 'advisor')

let users = [userOne, userTwo, admin]



console.log(userOne)
console.log(users)
*/