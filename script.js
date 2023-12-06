function pizzaOven(crustType, sauceType, cheeseType, toppingsType) {
  return {
    crust: crustType,
    sauce: sauceType,
    cheese: cheeseType,
    toppings: toppingsType
  }
}

var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven('garlic', 'tomato', 'mozzarella', 'pepperoni');
var pizza4 = pizzaOven('pan', 'marinara', 'parmesan', ['sausage', 'pepperoni', 'jalapenos']);
var pizza5 = pizzaOven('cheese', 'traditional', 'mozzarella');

// console.log(pizza1);
// console.log(pizza2);
// console.log(pizza3);
// console.log(pizza4);
// console.log(pizza5);



function randomPizza() {
  var crust = ['deep dish', 'hond tossed', 'garlic', 'thin crust', 'cheese'];
  var sauce = ['traditional', 'marinara', 'tomato slices', 'ketchup'];
  var cheese = ['mozzarella', 'parmesan', 'feta', 'cheddar'];
  var toppings = ['pepperoni', 'sausages', 'jalapenos', 'pineapple', 'onions'];

  var randomPizza = {
    crust: crust[Math.floor(Math.random() * 5)],
    sauce: sauce[Math.floor(Math.random() * 4)],
    cheese: cheese[Math.floor(Math.random() * 4)],
    toppings: toppings[Math.floor(Math.random() * 5)],
  }
  return randomPizza;
}

var yourPizza = randomPizza();
console.log(yourPizza);