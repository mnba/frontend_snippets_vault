//JS nullish coalescing operator 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator 
let myText = ''; // An empty string (which is also a falsy value) 
let notFalsyText = myText || 'Hello world'; console.log(notFalsyText); // Hello world 

let preservingFalsy = myText ?? 'Hi neighborhood'; console.log(preservingFalsy); // '' (as myText is neither undefined nor null) 