// 1. Array of pizza toppings
const pizzaToppings = [pepperoni, sausage, pineapple, onions, peppers, hamburger]

// Helper Function for Bonus
function listToppings(toppings) {
  let result = "";
  for (let i = 0; i < toppings.length; i++) {
    if (i === toppings.length - 1 && toppings.length > 1) {
      result += "and " + toppings[i];
    } else if (toppings.length > 1 && i < toppings.length - 1) {
      result += toppings[i] + ", ";
    } else {
      result += toppings[i];
    }
  }
  return result;
}

// 2. Greet Customer and list topping using a loop
function greetcustomer (){
  let toppinglist = listToppings(pizzaToppings);
  console.log(`Welsome to Tiffany's Pizzeria, our toppings are:`{$toppinglist})
}
// 3. Get pizza order
function getPizzaOrder(size, crust, ...toppings) {
  // Bonus #3 - check if toppings are available
  for (let topping of toppings) {
    let found = false;
    for (let available of pizzaToppings) {
      if (topping === available) {
        found = true;
      }
    }
    if (!found) {
      console.log(`Sorry, we don't offer ${topping}. Please order again.`);
      return null;
    }
  }
  // 4. Prepare pizza
function preparePizza(orderArray) {
  console.log("...your pizza is cooking...");
  const pizzaObject = {
    size: orderArray[0],
    crust: orderArray[1],
    toppings: orderArray[2]
  };
  return pizzaObject;
}

// 5. Serve pizza
function servePizza(pizza) {
  // Bonus #2 - handle no toppings
  if (pizza.toppings.length === 0) {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust cheese pizza. Enjoy!`);
  } else {
    let toppingList = listToppings(pizza.toppings);
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${toppingList}. Enjoy!`);
  }
  return pizza;
}

// 6. Call each function, chaining the return values
greetCustomer();
const order = getPizzaOrder("large", "thin", "sausage", "onions", "peppers");
const cooked = preparePizza(order);
const served = servePizza(cooked);
