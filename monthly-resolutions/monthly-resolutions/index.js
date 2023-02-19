// date and time

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24)
console.log(mins, hours, days);

console.log(`The blog was written ${days} days ago`);

const timestamp = 1124912222290;
console.log(new Date(timestamp));



