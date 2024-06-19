//[-]

const vocab_inspir_str= `You have overcomplicated 
the problem. You can just use shuffle to 
rearrange the letters, then take the 
first n letters to create a new word, 
where n is a random number between your min 
and max length.`;

function splitTextOnWords(s){
  //console.log(); text_content
  return s.trim().split(/[\s,.]+/);
}
const word_list = splitTextOnWords(vocab_inspir_str);

function randint(nmin, nmax){
  return nmin + Math.round((nmax-nmin) * Math.random() );
}

// "use slfufhe to rnerraage the leetrts"
//shuffle() is from https://stackoverflow.com/a/3943985/647597
function shuffle(s){
  //return w;
  let a = s.split("");
  let n = a.length; 
  for(var i = n-1; i > 0; i--) { 
    var j = Math.floor(Math.random() * (i + 1));
    // swap a[i] and a[j]
    var tmp = a[i]; 
    a[i] = a[j]; 
    a[j] = tmp; 
  } 
  return a.join(""); 
}
//String.prototype.shuffle = shuffle;


/*//MA: inspired by some code ftom Python:
sent_len = 5
word_list = list(words_dict.keys()) 

for scat in range(sent_len):
  shuffle(word_list) 
  new_word = ''.join(
    word_list[0:randint(min_len, max_len)])
    
//fm:  https://stackoverflow.com/questions/43737749/generate-random-words-with-different-lengths 
*/
const n = word_list.length;
//console.log(`${ Object.entries({word_list}) }`);//pprint()

function generateRandomWordPhrase()
{
  let s= "";
  
  let phraselen = randint(4,7);
  let startpos = randint (0, n - phraselen);
  let new_words = word_list.slice(startpos, startpos + phraselen);
  
  for(let [i,w] of new_words.entries() )
  {
    //s+= w + " ";
    //shuffle the short words
    if(w.length <=3)
      continue;//skip
    //shuffle the letters except 1st and last
    new_words[i] = w[0] + shuffle(w.slice(1,-1)) + w[w.length-1];
  }
  s= new_words.join(" ");
  
  // print the vars: 
  //console.log(`${ Object.entries({s,startpos,phraselen}) }`);
  
  return s;
}

//test 
//console.log(generateRandomWordPhrase());
