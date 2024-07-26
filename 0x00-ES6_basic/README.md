# 0x00. ES6 Basics 
### Description
This project is about learning the basics of ES6


![meme](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240725%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240725T160715Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=90b8d33628de1ec39762b3eec1834baf6a203965845cb26a9962b16f4433acc6)

## Resources
**Read or watch**:
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp "ECMAScript 6 - ECMAScript 2015")
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements "Statements and declarations")
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow functions")
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters "Default parameters")
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Rest parameter")
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=6ceb5f443319 "Javascript ES6 — Iterables and Iterators")

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/ "Jest Testing Framework")
- Your code will be analyzed using the linter [ESLint](https://eslint.org/ "ESLint") along with specific rules that we’ll provide
- All of your functions must be exported

## Tasks, Files & Description
### 0. Const or let? 
- File: [`0-constants.js`](./0-constants.js)
- Task: Modify
    - function `taskFirst` to instantiate variables using `const`
    - function `taskNext` to instantiate variables using `let`
        ```
        export function taskFirst() {
            var task = 'I prefer const when I can.';
            return task;
        }

        export function getLast() {
            return ' is okay';
        }

        export function taskNext() {
            var combination = 'But sometimes let';
            combination += getLast();

            return combination;
        }
        ```
- Execution example: ([`0-main.js`](./0-main.js))
    ```
    ╭─green@greenhouse
    ╰─➤  cat 0-main.js 
    import { taskFirst, taskNext } from './0-constants.js';

    console.log(`${taskFirst()} ${taskNext()}`);
    ╭─green@greenhouse
    ╰─➤  npm run dev 0-main.js 

    I prefer const when I can. But sometimes let is okay
    ╭─green@greenhouse
    ╰─➤  
    ```

### 1. Block Scope 
- File: [`1-block-scoped.js`](./1-block-scoped.js)
- Task: Modify the variables inside the function `taskBlock`
    - So the variables aren’t overwritten inside the conditional block.
        ```
        export default function taskBlock(trueOrFalse) {
            var task = false;
            var task2 = true;

            if (trueOrFalse) {
                var task = true;
                var task2 = false;
            }

            return [task, task2];
        }
        ```
- Execution Example: ([`1-main.js`](./1-main.js))
    ```
    ╭─green@greenhouse
    ╰─➤  cat 1-main.js 
    import taskBlock from './1-block-scoped.js';

    console.log(taskBlock(true));
    console.log(taskBlock(false));%                                                                          
    ╭─green@greenhouse
    ╰─➤  npm run dev 1-main.js                                                      

    [ false, true ]
    [ false, true ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 2. Arrow functions 
- File: [`2-arrow.js`](./2-arrow.js)
- Task: Rewrite the following standard function 
    - To use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)
        ```
        export default function getNeighborhoodsList() {
        this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

        const self = this;
        this.addNeighborhood = function add(newNeighborhood) {
            self.sanFranciscoNeighborhoods.push(newNeighborhood);
            return self.sanFranciscoNeighborhoods;
        };
        }
        ```
- Example Execution: ([`2-main.js`](./2-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 2-main.js 
    import getNeighborhoodsList from './2-arrow.js';

    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    console.log(res);
    ╭─green@greenhouse 
    ╰─➤  npm run dev 2-main.js 

    [ 'SOMA', 'Union Square', 'Noe Valley' ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 3. Parameter defaults 
- File: [`3-default-parameter.js`](./3-default-parameter.js)
- Task:
    - Condense the internals of the following function to 1 line - 
        - Cannot change name of each function/variable. 
            ```
            export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
            if (expansion1989 === undefined) {
                expansion1989 = 89;
            }

            if (expansion2019 === undefined) {
                expansion2019 = 19;
            }
            return initialNumber + expansion1989 + expansion2019;
            }
            ```
        - *Hint: The key here to define default parameter values for the function parameters.*
- Example Execution: ([`3-main.js`](./3-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 3-main.js 
    import getSumOfHoods from './3-default-parameter.js';

    console.log(getSumOfHoods(34));
    console.log(getSumOfHoods(34, 3));
    console.log(getSumOfHoods(34, 3, 4));%                                                                   
    ╭─green@greenhouse 
    ╰─➤  npm run dev 3-main.js 

    142
    56
    41
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 4. Rest parameter syntax for functions 
- File: [`4-rest-parameter.js`](./4-rest-parameter.js)
- Task:
- Create a function that takes an array of numbers
    - It returns the sum of all the numbers in the array.
        ```
        export default function returnHowManyArguments() {

        }
        ```
    - Example:
        ```
        > returnHowManyArguments("Hello", "Holberton", 2020);
        3
        >
        ```
- Example Execution: ([`4-main.js`](./4-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 4-main.js 
    import returnHowManyArguments from './4-rest-parameter.js';

    console.log(returnHowManyArguments("one"));
    console.log(returnHowManyArguments("one", "two", 3, "4th"));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 4-main.js

    1
    4
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 5. The wonders of spread syntax
- File: [`5-spread-operator.js`](./5-spread-operator.js)
- Task: Concatenate 2 arrays and each character of a string by modifying the function below. 
    - Using spread syntax,
        ```
        export default function concatArrays(array1, array2, string) {
        }
        ```
- Example Execution: ([`5-main.js`](./5-main.js))
    ```
    ╭─green@greenhouse
    ╰─➤  cat 5-spread-operator.js 
    export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
    }
    ╭─green@greenhouse 
    ╰─➤  npm run dev 5-main.js

    > 0x01-es6_promise@1.0.0 dev
    > npx babel-node 5-main.js

    [
    'a', 'b', 'c',
    'd', 'H', 'e',
    'l', 'l', 'o'
    ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 6. Take advantage of template literals 
- File: [`6-string-interpolation.js`](./6-string-interpolation.js)
- Task: Rewrite the return statement to use a template literal
    - You can the substitute the variables you’ve defined.
        ```
        export default function getSanFranciscoDescription() {
        const year = 2017;
        const budget = {
            income: '$119,868',
            gdp: '$154.2 billion',
            capita: '$178,479',
        };

        return 'As of ' + year + ', it was the seventh-highest income county in the United States'
                / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
                / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
        }
        ```
- Example Execution: ([`6-main.js`](./6-main.js))
    ```
    ╭─green@greenhouse
    ╰─➤  cat 6-main.js                                                                                    130 ↵
    import getSanFranciscoDescription from './6-string-interpolation.js';

    console.log(getSanFranciscoDescription());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 6-main.js 

    As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
    ╭─green@greenhouse 
    ╰─➤  
    ```
### 7. Object property value shorthand syntax 
- File: [`7-getBudgetObject.js`](./7-getBudgetObject.js)
- Task: Modify the following function’s `budget` object to simply use the keyname instead.
    ```
    export default function getBudgetObject(income, gdp, capita) {
    const budget = {
        income: income,
        gdp: gdp,
        capita: capita,
    };

    return budget;
    }
    ```
- Example Execution: ([`7-main.js`](./7-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 7-main.js 
    import getBudgetObject from './7-getBudgetObject.js';

    console.log(getBudgetObject(400, 700, 900));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 7-main.js                                                       

    { income: 400, gdp: 700, capita: 900 }
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 8. No need to create empty objects before adding in properties 
- File: [`8-getBudgetCurrentYear.js`](./8-getBudgetCurrentYear.js)
- Tasks:
    - Rewrite the `getBudgetForCurrentYear` function.
    - Use ES6 computed property names on the `budget` object
        ```
        function getCurrentYear() {
        const date = new Date();
        return date.getFullYear();
        }

        export default function getBudgetForCurrentYear(income, gdp, capita) {
        const budget = {};

        budget[`income-${getCurrentYear()}`] = income;
        budget[`gdp-${getCurrentYear()}`] = gdp;
        budget[`capita-${getCurrentYear()}`] = capita;

        return budget;
        }
        ```
- Example Execution: ([`8-main.js`](./8-main.js))
    ```
    ╭─green@greenhouse
    ╰─➤  cat 8-main.js 
    import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

    console.log(getBudgetForCurrentYear(2100, 5200, 1090));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 8-main.js 

    { 'income-2024': 2100, 'gdp-2024': 5200, 'capita-2024': 1090 }
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 9. ES6 method properties 
- File: [`9-getFullBudget.js`](./9-getFullBudget.js)
- Task: Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object
    ```
    import getBudgetObject from './7-getBudgetObject.js';

    export default function getFullBudgetObject(income, gdp, capita) {
    const budget = getBudgetObject(income, gdp, capita);
    const fullBudget = {
        ...budget,
        getIncomeInDollars: function (income) {
        return `$${income}`;
        },
        getIncomeInEuros: function (income) {
        return `${income} euros`;
        },
    };

    return fullBudget;
    }
    ```
- Example Execution: ([`9-main.js`](./9-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 9-main.js 
    import getFullBudgetObject from './9-getFullBudget.js';

    const fullBudget = getFullBudgetObject(20, 50, 10);

    console.log(fullBudget.getIncomeInDollars(fullBudget.income));
    console.log(fullBudget.getIncomeInEuros(fullBudget.income));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 9-main.js                                                                              1 ↵

    $20
    20 euros
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 10. For...of Loops 
- File: [`10-loops.js`](./10-loops.js)
- Task: Rewrite the function `appendToEachArrayValue` 
    - Use ES6’s for...of operator
    - *Note: var is not ES6-friendly.*
        ```
        export default function appendToEachArrayValue(array, appendString) {
        for (var idx in array) {
            var value = array[idx];
            array[idx] = appendString + value;
        }

        return array;
        }
        ```
- Example Execution: ([`10-main.js`](./10-main.js))
```
╭─green@greenhouse 
╰─➤  cat 10-main.js 
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
╭─green@greenhouse 
╰─➤  
```

### 11. Iterator 
- File: [`11-createEmployeesObject.js`](./11-createEmployeesObject.js)
- Task: Write a function named `createEmployeesObject`
    - That receives two arguments:
        - `departmentName` (String)
        - `employees` (Array of Strings)
            ```
            export default function createEmployeesObject(departmentName, employees) {

            }
            ```
    - The function should return an object with the following format:
        ```
        {
            $departmentName: [
                $employees,
            ],
        }
        ```
- Example Execution: ([`11-main.js`](./11-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 11-main.js 
    import createEmployeesObject from './11-createEmployeesObject.js';

    console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 11-main.js                                                          

    { Software: [ 'Bob', 'Sylvie' ] }
    ╭─green@greenhouse 
    ╰─➤  
    ```


### 12. Let's create a report object 
- File: [`12-createReportObject.js`](./12-createReportObject.js)
- Tasks: 
    - Write a function named `createReportObject`
        - With a parameter `employeesList`
        - The parameter should return the value of previous function `createEmployeesObject`.
            ```
            export default function createReportObject(employeesList) {

            }
            ```
    - `createReportObject` returns an object
        - Containing key `allEmployees` 
        - And a method property called `getNumberOfDepartments`.
    - `allEmployees` is a key 
        - Maps to object containing the department name
        - A list of employees in the department
    - The method property receives `employeesList`
        - Returns the number of departments
            - *Suggest thinking back to ES6 method property syntax*
                ```
                {
                allEmployees: {
                    engineering: [
                        'Guillaume Salva',
                        'Marshall Green',
                    ],
                },
                };
                ```
- Example Execution: ([`12-main.js`](./12-main.js))
    ```
    ╭─green@greenhouse
    ╰─➤  cat 12-main.js 
    import createEmployeesObject from './11-createEmployeesObject.js';
    import createReportObject from './12-createReportObject.js';

    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };      

    const report = createReportObject(employees);
    console.log(report.allEmployees);
    console.log(report.getNumberOfDepartments(report.allEmployees));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 12-main.js 

    { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
    2
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 13. Iterating through report objects 
- File: [`100-createIteratorObject.js`](./100-createIteratorObject.js)
- Tasks: 
    - Write a function named `createIteratorObject`
    - That takes into argument a report Object
    - Created with the previous function `createReportObject`
        - This function will return an iterator to go through every employee in every department.
            ```
            export default function createIteratorObject(report) {

            }
            ```
- Example Execution: ([`100-main.js`](./100-main.js))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 100-main.js 
    import createIteratorObject from "./100-createIteratorObject.js";

    import createEmployeesObject from './11-createEmployeesObject.js';
    import createReportObject from './12-createReportObject.js';

    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };

    const report = createReportObject(employees);

    const reportWithIterator = createIteratorObject(report);

    for (const item of reportWithIterator) {
        console.log(item);
    }
    ╭─green@greenhouse 
    ╰─➤  npm run dev 100-main.js 

    Bob
    Jane
    Sylvie
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 14. Iterate through object
- File: [`101-iterateThroughObject.js`](./101-iterateThroughObject.js)
- Tasks: 
    - Write a function named `iterateThroughObject`
    - Function parameter `reportWithIterator` is return value from `createIteratorObject`.
        ```
        export default function iterateThroughObject(reportWithIterator) {

        }
        ```
    - It should return every employee name in a string, separated by `|`
        ```
        {
        allEmployees: {
            engineering: [
                'John Doe',
                'Guillaume Salva',
            ],
        },
        ...
        };
        ```
        - Should return `John Doe | Guillaume Salva`
        - *Reminder - the functions will be imported by the test suite.*

- Full Example:
    ```
    > employees = {
        ...createEmployeesObject('engineering', engineering),
        ...createEmployeesObject('design', design),
        };
    >
    > const report = createReportObject(employees);
    > const reportWithIterator = createIteratorObject(report);
    > iterateThroughObject(reportWithIterator)
    'John Doe | Guillaume Salva | Kanye East | Jay Li'
    > 
    ```
- Execution: ([`101-main.js`](./101-main.js))
```
╭─green@greenhouse 
╰─➤  cat 101-main.js 
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
╭─green@greenhouse 
╰─➤  npm run dev 101-main.js                     

Bob | Jane | Sylvie
╭─green@greenhouse 
╰─➤  
```

