// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

//console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."

class Cl {
 //***
 static sm(){
  console.log('Cl.sm() =>', this);
  return 'Cl';
 }
 m(){
   console.log('Cl-obj.m() =>', this);
   return 'method';
 }
 /*
 function f(){
   console.log(this);
 }*/
 m2 = ()=> 22;
};

o1= new Cl();
r1= Cl.sm();
r2= o1.m();
r3= o1.m2();

