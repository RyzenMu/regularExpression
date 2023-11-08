let sentence = "Chicka once was a good sweet, but then i changed poor";
let regex = /[a-z]/ig;
let result = sentence.match(regex);
console.log(result);
regex = /[a-z]a./ig;
result = sentence.match(regex);
console.log(result);