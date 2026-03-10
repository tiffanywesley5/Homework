// create the variables
const pizzaPlace = "Tiffany's Pizza Parlour"
const numberofToppings = 15;

// Print the variables and their types
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberofToppings, typeof numberofToppings);

// Print a template literal of using both variables
console.log(`${pizzaPlace} offers ${numberoftToppings} delicious toppings to choose from!`);

// If statement based on number of toppings
if (numberofToppings < 10)
{
    console.log("Quality,not quantitiy.");
}
else
{
    console.log("A Whole lot of pizza");
}
