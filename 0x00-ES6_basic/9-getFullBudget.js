// import getBudgetObject from './7-getBudgetObject';

// export default function getFullBudgetObject(income, gdp, capita) {
//   const budget = getBudgetObject(income, gdp, capita);
//   const fullBudget = {
//     ...budget,
//     getIncomeInDollars() {
//       return `$${income}`;
//     },
//     getIncomeInEuros() {
//       return `${income} euros`;
//     },
//   };

//   return fullBudget;
// }


import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return Object.assign(budget, {
    getIncomeInDollars: () => `$${budget.income}`,
    getIncomeInEuros: () => `${budget.income} euros`,
  });
}