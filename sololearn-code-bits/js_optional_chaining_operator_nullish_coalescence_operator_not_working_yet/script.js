//JS optional chaining operator + nullish coalescence operator; not working yet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 
let customer = { 
  name: "Carl", 
  details: { age: 82 } 
}; 

const customerCity = customer?.city ?? "Unknown city"; 
console.log(customerCity); // Unknown city

