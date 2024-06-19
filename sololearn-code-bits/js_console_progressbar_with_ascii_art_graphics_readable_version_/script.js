// original code was created by Basel?.Al_hajeri |> `ＭＢＨ`

let fprogress_bar = p => {
  //ASCII bar characters
  const bars = '█▉▉▊▋▌▍▎▏'; //bars.length ==9, [1, 7/8, 6/8,...,1/8]
  // form the filled-in area
  let result = bars[0].repeat( ~~(p/10) ) + (bars[ 9 - ~~(p%10) ] || '');
  // add to it the rest empty spaces
  if (result.length < 10) 
    result += '–'.repeat(10 - result.length);
  return `[${ result }]`;
};
//p - percentage
for (let p = 0; p <= 100; ++p){
  // do something
  /*...*/
  // show progress:
  console.log(`${fprogress_bar(p)} ${p}%`);
}

