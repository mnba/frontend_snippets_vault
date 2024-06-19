<?php
/* The strange or intriguing code snippets from SoloLearn Challenges,
    like my another code-snippets project related to JavaScript: 
    https://code.sololearn.com/Wg0MKUiwPsbl/
*/

// current($arr) and next($arr) for array iteration
{
  $arr = array("A","B","C");
  /* more functiins in: 
   https://www.w3schools.com/php/func_array_next.asp */ 
  echo(current($arr) .' ');
  echo(next($arr) .' ');
  echo(next($arr) ."<br>\n" ); //not .'<br>\n', '' quotes mean «raw string», like r"" of Python
}

//decrement a string as if it was a number?
{
  $foo = "Str";
  echo --$foo ."<br>\n"; //=>Str string unchanged and + *No Error*
}

//*increment* a declared string-variable as if it was a number?
{
  $str = "SomeStrA";
  echo ++$str ."<br>\n";//=>SomeStrB
  //increments the last character of the string 
  
  //increment a string-primitive value itself 
  //echo ++"BBB";//Error "expecting `::` after "BBB" " //."<br>\n";
  
  // incrementing the "last things"
  $zzstr = "zzz";
  echo ++$zzstr ."<br>\n";//=>'aaaa'
  /*
Incrementing/Decrementing Operators - Language Reference
https://www.php.net/manual/en/language.operators.increment.php

PHP supports C-style pre- and post-increment and decrement operators. 

Note: The increment/decrement operators only affect numbers and strings. 
Arrays, objects, booleans and resources are not affected. 
Decrementing NULL values has no effect too,
but incrementing them results in 1. 
...
Note that character variables can be incremented but not decremented and even so only plain ASCII alphabets and digits (a-z, A-Z and 0-9) are supported. Incrementing/decrementing other character variables has no effect, the original string is unchanged. 
Example #1 Arithmetic Operations on Character Variables (...).

Incrementing or decrementing booleans has no effect. 
  */
}

//increment-2 : string+1
{
  echo "Before string +1:<br>\n";
  $str3 = "Sss";
  echo ($str3 +1);//=>1 && Warning
  /*Warning: A non-numeric value encountered in ./Playground/file0.php on line 34*/
  echo " After string+1<br>\n";
}

// confusing arithmetic string to int convertion + '$' signs diverting from the sence
{
  echo "string to int -1<br>\n";
  $str1 = 10;
  $str2 = '20';
  $str3 = "15" - $str1; //5
 
  echo $str1 + $str2/$str3; //14 //->10 + 20/5= 10 +4 =14
  echo "<br>\n";
}

// << '$' . identifier >> is like defining variable with the same name 
{
  //echo 1 / str3; 
  /* => 
  Warning: Use of undefined constant str3 - assumed 'str3' (this will throw an
    Error in a future version of PHP) in ./Playground/file0.php on line 32
  Warning: A non-numeric value encountered in ./Playground/file0.php on line 32
  Warning: Division by zero in ./Playground/file0.php on line 32
  INF
  */
  echo "<br>\n";
}

/*/ php ver sion =? // https://www.php.net/manual/en/function.p 
hpinfo.php
{
  echo '<pre>'. php info() .'</pre>'; //=>in short: 
  // PHP v7.4.8, Linux az ure Ub untu 16.04
  echo "<br>\n";
} */

// int to string to int 
{
  echo "string to int to string -2<br>\n";
  echo 100 . '200' + '300';//=>100500
  // 100 . '' => string conversion 
  // '200' + 1 => int conversion
  // 100 . 500 => string conversion
  echo "<br>\n";
  echo 66 . 99; //=> '6699'
  echo "<br>\n";
}

//confusing map manupulations
//Works in SoloLearn and in my PHP interpreter. 
// While SoloLearn challenge states this will result in Error
{
  $solo = array('learn' => 'solo');
  $learn = array_flip($solo);//solo=>learn
  echo $solo['learn'] . $learn['solo'] ." ;; <br>\n";
  ${$solo['learn'] . $learn['solo']} = 1;
  echo 'array_flip challenge=> ' . $sololearn; //=>1
  echo "<br>\n";
/**
https://www.php.net/manual/en/function.array-flip.php
" `array_flip()` returns an array in flip order, i.e. keys from array become values and values from array become keys. 

The values of array need to be valid keys, i.e. they need to be either `integer` or `string`. A warning will be emitted if a value has the wrong type, and the key/value pair in question **will not be included in the result**. "
*/
/*${expression} declares and defines new variable. called in PHP `variable variable`

Variable variables - Language Reference
https://www.php.net/manual/en/language.variables.variable.php
"In order to use variable variables with arrays, you have to resolve an ambiguity problem. That is, if you write $$a[1] then the parser needs to know if you meant to use $a[1] as a variable, or if you wanted $$a as the variable and then the [1] index from that variable. The syntax for resolving this ambiguity is:
 ${$a[1]} for the first case and 
 ${$a}[1] for the second. "

*/
}

{
  "2"*3;
  echo "2" * 3 ."<br>\n";//=>6
}

{
 echo "The Case of Switch-Case<br>\n";
 $v= 2; //1; //0;
 switch($v){
   case false: echo "false<br>";
     break;
   case 0: echo "0<br>";
     break;
   case true: echo "true<br>";
     break;
   case 1: echo "1<br>";
     break;
   case 2: echo "2<br>";
     break;    
   default: echo "default!<br>";
     break;         
 }
 echo "\n End of Switch-Case<br>\n";
}

{
  echo "Array: 2 way to create arrays<br>\n";
  $arr1 = ["Vaso", "Peto", "Kolя"];
  $arr2 = array("Vaso", "Peto", "Kolя");
  echo "comparison_result= ". ($arr1 == $arr2) . " .<br>\n"; 
   
 //PHP Token T_PAAMAYIM_NEKUDOTAYIM
 //Details in "WTF is T_PAAMAYIM_NEKUDOTAYIM"
  //  https://phil.tech/2013/wtf-is-t-paamayim-nekudotayim/
 /* Interpolating Functions and Expressions Within Strings (PHP Cookbook)
 https://docstore.mik.ua/orelly/webprog/pcook/ch01_08.htm
  */
}

{
  echo "round(float,decimals)<br>\n";
  $num = 10.123456789;
  echo "num-round= " . round($num,3) . "<br>\n";
}

{
  echo "`global` keyword in (function) scopes:<br>\n";
  $name = 'Nice';
  function getName1() {
    //global $name;
    echo $name; // "Error undefined" ?
  }
  function getName2() {
    global $name;
    echo "in-func2:".$name;
    return $name;
  }
  function setName($argname) {
    global $name;
    $name = $argname;
    //echo $name;
    return $name;
  }
  function returnNothing() {
  }//=>returns NULL
  
  echo "<br>\n 1:". getName1() . "<br>\n";
  echo "2:". getName2() . "<br>\n";
  echo "3:". setName("Mount") . "<br>\n";
  echo "4: ". gettype (returnNothing()) ."<br>\n";//absent `return` returns NULL. 
}

{
  echo "Data types supported by PHP: String, Integer, Float, Boolean, Array," .
   " <br>\n Object, NULL, Resource. <br>\n";
  echo "<br>\n";
}

{
  echo "<br>\n";
}

{
  echo "<br>\n";
}

{
  echo "<br>\n";
}

{
  echo "<br>\n";
}

{
  echo "<br>\n";
}

/*
{
  echo "<br>\n";
}
*/
?>