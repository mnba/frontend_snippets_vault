// Learn real type of any JavaScript variable, beyond the `typeof` operator

// Origin: 
// https://facebook.com/story.php?story_fbid=119469973226758&id=105415694632186

/*
Ստեղծենք ֆունկցիա,որը շատ ավելի ճշգրիտ է աշխատում և անհամեմատ օգտակար է,քան typeof օպերատորը։

Ինչպես գիտենք JavaScript-ում կան 7 պրիմիտիվ և մեկ օբյեկտային( reference type ) տվյալների տեսակներ։
Օբյեկտային տիպը իր հերթին բաժանվում է մի քանի ենթատիպերի։ Օրինակ թե՛ Array-ը,թե՛ Function-ը,թե՛ Map-ն ու Set-ը համարվում են օբյեկտներ։
Երբ մենք տվյալների տիպը որոշելու համար օգտագործում ենք typeof օպերատորը,այն երբեմն իրոք հարմար չէ,որովհետև նա մեզ ինֆորմացիա չի տալիս,թե կոնկրետ ինչ տեսակի օբյեկտ է ստուգվողը։
Բացի դրանից typeof օպերատորը null պրիմիտիվ տիպը ստուգելուց վերադարձնում է "object",ինչը սխալ է։ Null-ը օբյեկտ չէ,այն տվյալների պրիմիտիվ տիպ է,որի արժեքը մեկն է՝ null,և ուղղակի նշանակում է դատարկ արժեք կամ արժեքի բացակայություն։
Փորձենք ստեղծել ֆունկցիա,որը չի ունենա typeof օպերատորի թերությունները,և օգտակար կլինի լայն սպեկտրով խնդիրների լուծման համար։
Տարբեր արժեքների վրա Օբյեկտի նախատիպի(Object.prototype) toString() մեթոդի կանչելը վերադարձնում է տարբեր արդյունքներ։ Օրինակ՝ 

Object.prototype.toString.call("hello")         // "[object String]"

Object.prototype.toString.call(888)              // "[object Number]"

Object.prototype.toString.call({})                  // "[object Object]"

Object.prototype.toString.call(/abc/)            // "[object RegExp]"

Object.prototype.toString.call(new Date())   // "[object Date]"

Այսպիսով ինչպես տեսնում ենք մեթոդը միշտ վերադարձնում է սթրինգ,որի առաջին բառը դա object-ն է,իսկ երկրորդը թե այն ինչ դասի է պատկանում։
Փաստորեն եթե մենք օգտագործենք regular expression կամ սթրինգի slice մեթոդը,կարող ենք կտրել վերադարձվող արժեքի մեզ ոչ անհրաժեշտ մասերը,և ստանալ թե կոնկրետ ինչ տիպի է պատկանում արժեքը,որը մենք ստուգում ենք։
Ես կօգտագործեմ slice մեթոդը։ Եվ այսպիսով ֆունկցիայի վերջնական տեսքը կլինի՝
*/

function toRawType(value) {
  const _toString = Object.prototype.toString;
  const str = _toString.call(value);
  return str.slice(8, -1);
}

/*
Կարող ենք ևս մի քիչ կրճատել կոդի ծավալը, 
օգտագործելով arrow function: Կարծում եմ այն շարունակում է մնալ նույնքան հասկանալի,որքան վերևի օրինակը։ */

//
const toRawType2 = value => Object.prototype.toString.call(value).slice(8, -1);

//Իսկ հիմա փորձենք աշխատացնել ֆունկցիան․

console.log(
 toRawType([1,2,3]),        // "Array"
 toRawType({color: "red"}), // "Object"
 toRawType(123),            // "Number"
 toRawType('IAmAString'),
 toRawType(/regex+/),
 toRawType(class VasilyTheClass{}),//=>Function //in javascipt class is a function 
 toRawType(function PetyaTheFunction(){}),//=>Function 
 toRawType2( ()=>this ), //-""-
 toRawType2(null),
 toRawType(undefined ),
 toRawType(5*undefined), //order in a bar: 5 `undefined`s, please 
 //=>Number //NaN is a number-type
 toRawType(Math.PI),  //Number
 toRawType(''==''),   //Boolean
 //...
); 

console.log(NaN, typeof NaN );//NaN, number

