const n = 3;
console.log(Array(n + 1).join("foo"));
// join() arg. here is separator, so elements are n+1 in count, hence the argument for Array() is n+1

console.log("foo".repeat(n));
