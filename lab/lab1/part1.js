/* =====================
# Lab 1, Part 1 — More Underscore

## Introduction

Set variables "query1" through "query7" by using underscore functions to answer
the specified question or complete the task.

There are two stretch goals where you will be asked to enhance a function and
use a templating system.

===================== */

var bakedGoods = [
  {
    "name": "Carrot",
    "type": "Cake",
    "inventory": 44,
    "price": 3.49
  },
  {
    "name": "Chocolate",
    "type": "Cake",
    "inventory": 21,
    "price": 3.49
  },
  {
    "name": "Sourdough",
    "type": "Bread",
    "inventory": 5,
    "price": 5.29
  },
  {
    "name": "Tiramisu",
    "type": "Cake",
    "inventory": 15,
    "price": 4.99
  },
  {
    "name": "Rye",
    "type": "Bread",
    "inventory": 6,
    "price": 5.09
  },
  {
    "name": "Whole Wheat",
    "type": "Bread",
    "inventory": 39,
    "price": 4.49
  },
];

var printMenu = function(foodList) {
  _.each(foodList, function(food) {
    console.log(food.name + ' ... $' + food.price);
  });
};

console.log('List of baked goods', bakedGoods);

/* =====================
Is printMenu a function? Answer this question with underscore. Should evaluate
to true.
===================== */

var query1 = _.isFunction(printMenu);

console.log('printMenu is a function:', query1);

/* =====================
Is bakedGoods an array? Answer this question with underscore. Should evaluate
to true.
===================== */

var query2 = _.isArray(bakedGoods);

console.log('bakedGoods is an array:', query2);

/* =====================
Is the first element in bakedGoods an object? Answer this question with
underscore. Should evaluate to true.
===================== */

var query3 = _.isObject(bakedGoods[0]);

console.log('The first element in bakedGoods is an object:', query3);

/* =====================
Use _.where to return all cakes. Or bread. Whichever is your favorite.
===================== */

var query4= _.where(bakedGoods, {"type": "Cake"});

console.log('All bread. Or cakes:', query4);

/* =====================
Use _.filter to return all baked goods that cost more than $4.
===================== */
    // _.filter(list, predicate, [context])
    // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => [2, 4, 6]

var query5 = _.filter(bakedGoods, function(object){ return object.price > 4; });

console.log('More than $4:', query5);

/* =====================
Use _.sortBy to order the list by inventory (from lowest to highest).
===================== */
    // _.sortBy(list, iteratee, [context])
    // var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    // _.sortBy(stooges, 'name');
    // => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

var query6 = _.sortBy(bakedGoods, "inventory");

console.log('Sorted by inventory (lowest to highest):', query6);

/* =====================
Use _.groupBy to organize the baked goods by type.
===================== */
    // _.groupBy(list, iteratee, [context])
    // _.groupBy(['one', 'two', 'three'], 'length');
    // => {3: ["one", "two"], 5: ["three"]}

var query7 = _.groupBy(bakedGoods, "type");

console.log('Grouped by type:', query7);

/* =====================
Stretch Goal:

Grouping by type changed the structure of our data. Instead of an array of
objects, we have an object that contains arrays of objects. Let's do something
with this new data structure.

Rewrite the printMenu function to receive the new structure (query7) and print
(console.log) a menu with headings. Running printMenu(query7) should log:

Cake
Carrot ... $3.49
Chocolate ... $3.49
Tiramisu ... $4.99
Bread
Sourdough ... $5.29
Rye ... $5.09
Whole Wheat ... $4.49
===================== */

    // How we did it a simple print menu with a "for" loop but without a specific grouping/oprder:
    //
    // var printMenu = function(foodList){  // pass the function an array of objects and have it return a menu
    //     for (i = 0; i < foodList.length; i++) {
    //       console.log(foodList[i].name + " ... " + foodList[i].cost);
    //     }
    //
    // };
    // This will combine the two functions we made above, the printMenu function and the toOrder funtion
    // printMenu(toOrder(menuList, quantityMin)); -->  this will print the menu for any items that have less than the specific quantityMin



// The issue is that query 7 is an object that contains 2 arrays that each contain 3 objects
// you can't call an object's length or specific place with object[i], you have to use object.thing
      // you can call query7.Bread to get the array with all the breads
      // you can call query7.Cake to get the array with all the cakes
      // you can call query7.Bread[0].name and get the price of Sourdough
      // you can call query7.Bread[0].price and get the price of Sourdough
_.each(foodList, function(food)

var printmenu2 = _.each(foodList, function())

    var printMenu2 = _.each(foodList.Cake, function(foodList); {
          console.log(menu.Cake[0].name + ' ... $' + menu.Cake[0].price);

    }

    printMenu2(query7);



/* =====================
Stretch Goal:

We're writing each line of the menu with the code `food.name + " ... $" + food.price`.
While this method technically works, it will become less manageable when the
content becomes more complicated, when the number of strings and variables
increases. Underscore has a templating system that can be used to clean up this
rendering process.

Use _.template to render the price lines of the menu (Carrot ... $3.49).

===================== */
