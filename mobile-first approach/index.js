


let blinders = [

	{
		fname: 'arthur',
		lname: 'shelby',
		age: 35,
		gang: 'peaky_blinders'
	},
	{
		fname: 'thomas',
		lname: 'shelby',
		age: 33,
		gang: 'peaky_blinders'
	},
	{
		fname: 'john',
		lname: 'shelby',
		age: 30,
		gang: 'peaky_blinders'
	}

];


let fnd = blinders.find(x => {
	return x.fname == 'john'
})
console.log(fnd)

let filter = blinders.filter(x => {
	return x.lname == 'shelby';
})

console.log(filter)


let map = blinders.map(x => {
	if(x.fname == 'thomas') {
		return {...x, role: 'leader'}
	} else {
		return x;
	}
})

console.log(map)




let find = blinders.reduce((start, x) => {
	return start += x.age;
}, 0)


console.log(find)



