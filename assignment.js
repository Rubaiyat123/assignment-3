

//  problem-1 [kilometer to meter] 

function kilometerToMeter(kilo) {
  var result = kilo * 1000;
  return result;
}
var kilometer = kilometerToMeter(5);
console.log(kilometer);



// problem-2 [total budget] 

// taking main function 
function budgetCalculator(price1, price2, price3) {
  var add = price1 + price2 + price3;
  return add;
}

// watch quantity input and price 
function forWatch(quantity1) {
  var price1 = quantity1 * 50;       //  per watch price is 50
  return price1;
}
var watchQuantity = forWatch(5);


// Mobile quantity input and price 
function forMobile(quantity2) {
  var price2 = quantity2 * 100;       //  per mobile price is 100
  return price2;
}
var mobileQuantity = forMobile(3);


// Laptop quantity input and price 
function forLaptop(quantity3) {
  var price3 = quantity3 * 500;       //  per laptop price is 500
  return price3;
}
var laptopQuantity = forLaptop(2);


//  total calculation by calling main function
var total = budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity);
console.log(total);





//  problem-3 finding hotel-cost 
function hotelCost(perday) {
  var cost = 0;
  var Day = 1;
  if (perday <= 10)  //for first ten Days 
  {
    cost = perday * 100;      // first 10days 100tk
  }
  else if (perday <= 20) {
    var dayOne = 10 * 100;        // dayOne  for first 10 days
    var nextDays = Day - 10;   // from day 11 to 20 , perday 80tk after 10 days
    const dayTwo = nextDays * 80;
    cost = dayOne + dayTwo;
  }
  else {
    var dayOne = 10 * 100;
    var dayTwo = 10 * 80;
    var lastDays = Day - 20;     // after 20 days, as 20 days will be deducted from total days, then we will get rest of the days
    var dayThree = lastDays * 50;
    cost = dayOne + dayTwo + dayThree;
  }

  return cost;
}

console.log(hotelCost(30));




//  problem-4 finding mega name 

var names = ['Nahid', 'Muntasir', 'Ritu', 'Lubaba', 'Sadia'];


function megaFriend(names) {
  var bigName = '';
  for (i = 0; i < names.length; i++) {
    if (names[i].length <= 0) {
      return 'nothing';
    } else if (names[i].length > bigName.length) {
      bigName = names[i];
    }
  }
  return bigName;
}
console.log(megaFriend(names));







