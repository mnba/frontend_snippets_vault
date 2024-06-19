// split
const str1 = 'The quick brown fox jumps over the lazy dog.';
const words = str1.split(' ', 4);
console.log(words)//==words.toString());
//Expected res: The,quick,brown,fox

// empty string -> empty strung array=esa
const str2 = '         ';
const esa = str2.split(' ', 3);
console.log('esa=', esa); //=>Array ["", "", ""]
console.log('esa.toString=',esa.toString());//=> ",,"

// Concat, join
console.log('esa+words=', esa.concat(words));
console.log(`words joined='${words.join(' ')}'.`);
