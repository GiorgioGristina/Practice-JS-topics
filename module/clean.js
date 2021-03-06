'strict mode'

const budget = Object.freeze( [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
 

// budget[budget, spendingLimit, budget, spendingLimit,].value =budget, spendingLimit, 

const spendingLimit = Object.freeze( {
  jonas: 1500,
  matilda: 100,
});
spendingLimit.jay = 300
console.log(spendingLimit);


const getLimit = user => spendingLimit[user] ? spendingLimit[user] : 0

const addExpense = function (state, limits, value, description, user ='jonas') {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser) ?
     [...state, { value: -value, description, user: cleanUser }] 
    // budget.push({ value: -value, description, user: cleanUser });
    : state;

}
  

const newBudget1 = addExpense(budget, spendingLimit, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimit, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimit, 200, 'Stuff', 'Jay');
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);


const checkExpenses = function () {
  for (const entry of budget) {   
    if (entry.value < -getLimit(entry.user)) entry
    .flag = 'limit';
    
  }
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) 
      output += 
      entry.value <= -bigLimit ? `${entry
        .description.slice(-2)} / ` : "" // Emojis are 2 chars
    
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};


logBigExpenses(400);
