// Created by Solo

//</script><script type='text/typescript'>
function output(...text){
  text = text.join(' ');
  console.log(text);
  document.write(text,'<br>');
}

let name: string = 'Fred',
       a: number = 42,
       b: number = 92.87;
const sum = a + b;
output(name, sum);


enum colors {
  RED = "#FF0000",
  GREEN = "#00FF00",
  BLUE = "#0000FF"
}
let userChoice = "#FF0000",
    isRed: boolean = false;

if(userChoice == colors.RED){
  isRed = true;
  //document.body.style.background = 
  "red";
}
output(isRed);


// The 'any' Type in TypeScript

let userData: any = 22;
output(userData + 2);


userData = "free";
output(userData + "man");


let receivedData: any = '5';
output(
 receivedData +=
 typeof(receivedData)==='number'?5:10
);


interface Order {
  customerName: string,
  itemNumbers: number[],
  isComplete?: boolean
}
let order1: Order;
order1 = {
  customerName: "Abiye",
  itemNumbers: [123,44,232],
  isComplete: false
}
output(order1.customerName);

let anyVar: any = 123;
console.log('type= '+typeof(anyVar));
