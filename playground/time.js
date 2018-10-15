var moment = require('moment');

// var date = moment();
// date.add(11, 'years').subtract(12, 'months');
// console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(createdAt);
console.log(date.format('h:mm a'));