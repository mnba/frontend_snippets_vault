//JS Pipeline operator //not working yet: nor accepted as standard

let url = "%21" |> decodeURI;
console.log(url);

const multwo = (n) => n * 2; 
const increment = (n) => n + 1; 

let res = 5 |> multwo |> multwo |> increment ;
console.log(dres);
