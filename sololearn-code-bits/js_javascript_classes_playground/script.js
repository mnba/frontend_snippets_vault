// classes in JavaScript 
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes 
 */

{ //sample 1

//let g_keyId =10; //global keyId
class Utility { //w staticMethods
  static keyId =0;
  static log(s) {
  //static function log(s) { //wrong! no keyword `function` there
      console.log(s);
      return 'ASecretKey' + ++Utility.keyId;
      //return 'ASecretKey' + ++g_keyId
  }
  
};

let ask = Utility.log('Hello, JS classes world');
console.log('ASecretKey=', ask);

}//eo sample1

{ //sample2
  class NormalClass{
    constructor(height, width) { 
      this.height = height; 
      this.width = width;
      console.log ('`no`, a Normal object created');
    }
    
    get perimeter() {
      return 2*(this.height + this.width);
    }
  };
  
  let no = new NormalClass (10,12);
  console.log ('no=', no.height, no.width,
    'no.perimeter=', no.perimeter )
}
