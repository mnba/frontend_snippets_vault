<?php
class Person {
    public function __construct() {
        echo "Object constructed<br>\n";
    }
    public function __destruct() {
        echo "Object destroyed<br>\n";
    }
    public function f(){ 
      echo "f() called<br>\n";
    }
}
$p = new Person();
$p->f();
echo "1<br>";
unset($p);
echo "2<br>";
?>