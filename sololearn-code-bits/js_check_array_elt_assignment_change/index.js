    var increase = 2;//parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //---
    //for( p of prices ){
    for(let [i,_p] of prices.entries() ){
      prices[i] += increase;
    }
    console.log(prices);
