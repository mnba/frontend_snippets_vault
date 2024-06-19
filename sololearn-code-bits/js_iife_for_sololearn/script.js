//IIFE for SoloLearn: normal ES5(circa y2009) IIFE does not work in SoloLearn
// environment, this is solution that works, it was proposed by SoloLearn 
// technical support.
/* Explanation:
Normally Sololearn uses embedded into web-environment Javascript engine.
If you use normal computer browser then chances are very good that it will 
 support ES5 and IIFE.
But mobile versions, and Android mobile app version uses embedded JSC enjine,
 which does not support particularly this constract.
The solution was to add boolean negation operator (!) before IIF expression.
Was: IIF_Expression;  //fails to run: "Syntax error!"
Now: !IIF_Expression; //works OK

Why this is useful: JavaScript strict mode support.
*/
!function() {
  "use strict";
  console.log("Hello from IIFE! 1st");
}();


!function() {
  "use strict"; //error on line 26 is found even without thisvstrict mode, though
  const x= 222;
  console.log("Hello from IIFE! 2nd");
  x= 333; //Generates error
}();
