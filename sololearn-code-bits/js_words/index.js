class Add {
  constructor(...words) {
      this.words = words;
  }
  //my code
  print(){
    let s = '$' + this.words.join('$') + '$';
    console.log(s);
    return s;
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();