class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.online = false;
		this.score = 0;
		this.speed = 0;
	}
	login() {
		this.online = true;
		console.log(this.email, 'has logged in')
		return this;
	}
	logout() {
		this.online = false;
		console.log(this.email, 'has logged out')
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.name, 'scored', this.score)
		return this;

	}
	run(speed) {
		this.speed = speed;
		console.log(this.name, 'has the speed', this.speed)
		return this;
	}
}


class Admin extends User {
	
	deleteUser(user) {
		users = users.filter(x => {
			return x.email != user.email;
		})
	}
}



let user1 = new User('mark', 'j@yahoo.com')
let user2 = new User('joseph', 'mj@yahoo.com')
let admin = new Admin('admin', 'a@yahoo.com')


let users = [user1, user2, admin];